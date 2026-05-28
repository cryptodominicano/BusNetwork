export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.busfleetai.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body || {};

  // Find email from any field name
  const email = body.email || body.Email || Object.values(body).find(v => typeof v === 'string' && v.includes('@'));
  if (!email) return res.status(400).json({ error: 'Email is required' });

  // Build a table row for every field submitted
  const rows = Object.entries(body)
    .filter(([k, v]) => v && String(v).trim())
    .map(([key, val]) => {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">${label}</td><td style="padding:8px;border-bottom:1px solid #eee;">${val}</td></tr>`;
    })
    .join('');

  const htmlBody = `
    <h2>New BusFleetAI Lead</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;">
      ${rows}
    </table>
    <br>
    <p style="color:#666;font-size:12px;">Sent from busfleetai.com contact form</p>
  `;

  // Try to extract a name and company for the subject line
  const name = body.name || body.your_name || body['Your Name'] || '';
  const company = body.company || body.company_name || body['Company Name'] || '';
  const subject = `New BusFleetAI Lead: ${name || email}${company ? ' (' + company + ')' : ''}`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'BusFleetAI Leads <Bus-Lead@goldcoastai.pro>',
        to: ['isaias@inteliard.com'],
        reply_to: email,
        subject,
        html: htmlBody
      })
    });

    const result = await response.json();
    if (!response.ok) {
      console.error('Resend error:', result);
      return res.status(500).json({ error: 'Failed to send message' });
    }
    return res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}

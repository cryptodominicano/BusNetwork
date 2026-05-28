export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.busfleetai.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const htmlBody = `
    <h2>New BusFleetAI Lead</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name || 'Not provided'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || 'Not provided'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company || 'Not provided'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || 'Not provided'}</td></tr>
    </table>
    <br>
    <p style="color:#666;font-size:12px;">Sent from busfleetai.com contact form</p>
  `;

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
        subject: `New BusFleetAI Lead: ${name || email}${company ? ' (' + company + ')' : ''}`,
        html: htmlBody,
        tags: [
          { name: 'source', value: 'busfleetai-contact-form' }
        ]
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

# BusFleetAI Website

## Project Overview
Static React website for BusFleetAI - Intelligent Bus Fleet Management Solutions. Built with Vite, React, and Tailwind CSS. Originally created with Lovable.dev and deployed on Vercel.

## Tech Stack
- **Frontend**: React (compiled/minified bundle)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Form Backend**: Formspree (endpoint: `https://formspree.io/f/xgowpdbz`)
- **Deployment**: Vercel (auto-deploys from GitHub)

## File Structure
```
BusNetwork/
├── index.html          # Main HTML with custom CSS/JS injections
├── assets/
│   ├── index-B6OA1am8.js   # Compiled React bundle
│   ├── logo.png            # BusFleetAI logo
│   └── open-graph.png      # Social sharing image
├── css/
│   └── index-D3t_mO8X.css  # Compiled Tailwind CSS
├── fonts/
├── images/
└── .claude/
    └── settings.local.json
```

## Customizations (in index.html)

### Header Styling
- Permanently white background with shadow
- Dark nav links that turn orange on hover
- Custom logo replacement (400x200px)
- Hidden default "Bus Fleet AI" text

### WhatsApp Contact Link
- **Phone**: (610) 357-5363
- **WhatsApp URL**: `https://wa.me/16103575363`
- Added to header navigation (before CTA button)
- Added to footer
- Green WhatsApp icon with hover effect

### Contact Form Enhancements
- **Form endpoint**: Formspree (`xgowpdbz`)
- Custom form data collection for React controlled inputs
- Smart field name detection from placeholders (name, email, phone, company, message)
- Added "Additional Questions or Comments" textarea
- Validation for empty submissions
- Error logging with specific Formspree error messages

### Lovable Badge/Toast Removal
Multiple CSS rules and JavaScript to hide:
- Elements with "lovable" in id, class, or href
- Fixed positioned divs outside #root
- Toast notification container (`ol.fixed` with `z-[100]`)
- Any fixed element in bottom-right corner (within 250x150px area)

## Important Notes

### Form Submission
The form uses a custom JavaScript handler that:
1. Intercepts form submit events
2. Collects data directly from input fields (not FormData API)
3. Derives field names from placeholders if name/id attributes are missing
4. Posts JSON to Formspree
5. Shows success/error alerts

### Badge Removal
The `removeBadge()` function runs at 500ms, 1s, 2s, 3s, and 5s after page load to catch dynamically rendered elements. It scans all elements for:
- Position: fixed
- Located in bottom-right corner
- Small size (< 300x150px)

### CSS Specificity
Many rules use `!important` to override Tailwind's utility classes in the compiled bundle.

## Deployment
Push to `main` branch triggers automatic Vercel deployment.

```bash
git add .
git commit -m "Your message"
git push
```

## Contact
- **Website**: busfleetai.com
- **WhatsApp**: (610) 357-5363

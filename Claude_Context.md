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

---

## IMPORTANT: Lovable Badge Removal (Reusable for All Lovable Sites)

When exporting sites from Lovable.dev, they include badge/watermark elements that need to be hidden. **CRITICAL:** You must be careful not to break Radix UI dropdown menus which Lovable uses.

### The Problem
Lovable injects:
1. Badge links with "lovable" in the href
2. Toast notification containers (`<ol>` elements)
3. iframes

**WARNING:** Radix UI (used by Lovable for dropdowns) creates **portals** - it renders dropdown content as direct children of `<body>`, NOT inside `#root`. If you hide all elements outside `#root`, you will break all dropdown menus!

### The Solution - CSS (Add to `<style>` in index.html)

```css
/* Hide Lovable badge/watermark only */
#lovable-badge,
[id*="lovable"],
[class*="lovable"],
a[href*="lovable.dev"],
a[href*="lovable.app"] {
  display: none !important;
  visibility: hidden !important;
}

/* Hide toast/badge container inside #root (won't affect Radix portals which are on body) */
#root > div.fixed.bottom-4.right-4,
#root > div.fixed.bottom-2.right-2 {
  display: none !important;
  visibility: hidden !important;
}

/* Hide toast OL container */
ol.fixed.top-0.z-\[100\],
ol.fixed[class*="z-"][class*="100"] {
  display: none !important;
  visibility: hidden !important;
}
```

### The Solution - JavaScript (Add to `<script>` in index.html)

```javascript
// Remove Lovable badge only - very targeted approach
function removeBadge() {
  // Only remove iframes (Lovable uses iframes for badge)
  document.querySelectorAll('iframe').forEach(el => el.remove());

  // Remove elements with lovable in href only
  document.querySelectorAll('a[href*="lovable"]').forEach(el => el.remove());
}

// Run once after page loads
window.addEventListener('load', () => {
  setTimeout(removeBadge, 1000);
});
```

### What NOT To Do (Will Break Dropdowns)

DO NOT use these selectors - they will hide Radix dropdown portals:

```css
/* BAD - breaks dropdowns! */
body > div:not(#root) { display: none !important; }

/* BAD - too broad, catches dropdowns */
div[style*="position: fixed"][style*="bottom"] { display: none !important; }

/* BAD - catches dropdown wrappers */
div.fixed[class*="bottom"][class*="right"] { display: none !important; }
```

DO NOT use JavaScript that removes body children or scans all fixed elements:

```javascript
/* BAD - removes dropdown portals! */
document.querySelectorAll('body > *').forEach(el => {
  if (el.id !== 'root') el.remove();
});

/* BAD - hides dropdowns when they appear */
document.querySelectorAll('*').forEach(el => {
  if (getComputedStyle(el).position === 'fixed') {
    // ... any hiding logic here
  }
});
```

---

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

### Testimonial Update
- **Attribution**: Patrick Goebel, Barons Bus Company
- **Link**: https://baronsbus.com/
- Uses `updateTestimonial()` function to find and replace the `<cite>` element text
- Permission granted to use their name

## Important Notes

### Form Submission (for React/Lovable sites)
Lovable uses React controlled inputs which don't populate the standard FormData API. The form uses a custom JavaScript handler that:
1. Intercepts form submit events
2. Collects data directly from input fields (not FormData API)
3. Derives field names from placeholders if name/id attributes are missing
4. Posts JSON to Formspree
5. Shows success/error alerts

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

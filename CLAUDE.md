# busfleetai.com — Orchestrator Reference

Read WEEKLY-INTEL.md next. It has current rankings, session findings, and priority actions.
Read KEYWORD-MAP.md when building pages, writing posts, or checking cannibalization.

---

## Site Identity

Domain: busfleetai.com
Purpose: Bus fleet monitoring SaaS lead gen. Charter and private bus companies get automated alerts for driver no-shows, speed violations, and DVIR compliance on top of existing fleet systems.
Model: Lead capture form on homepage (#contact). Leads go to Isaias@InteliaRD.com (change to busfleetai.com email when set up).
Tech stack: Static HTML, Vercel, cleanUrls enabled (.html extensions stripped).
GitHub repo: cryptodominicano/BusNetwork (main branch, auto-deploys to Vercel).

## Infrastructure (Permanent)

| Resource | Value |
|----------|-------|
| Vercel Project | Not yet tracked in master.env |
| GA4 Measurement ID | G-R18FVQ82XG |
| GSC Property | busfleetai.com (URL prefix, verified, Owner: IsaiasPerez1977@gmail.com) |
| GSC Service Account | n8n-analytics@gen-lang-client-0224310505.iam.gserviceaccount.com (Full access) |
| Bing Webmaster | busfleetai.com/ (verified, 2 clicks / 134 impressions as of May 27) |
| IndexNow Key | 315f4dac70b642a3975368b65600393e |
| IndexNow Key Location | https://www.busfleetai.com/315f4dac70b642a3975368b65600393e.txt |
| DataForSEO Auth (Base64) | aXNhaWFzQGludGVsaWFyZC5jb206MGVhYmUyMjY5OTFmOGFiYg== |
| DataForSEO Location | 2840 (USA) |
| DataForSEO Language | en |
| VPS | srv1175204.hstgr.cloud |
| N8N | https://n8n.srv1175204.hstgr.cloud |
| Service Account | n8n-analytics@gen-lang-client-0224310505.iam.gserviceaccount.com |
| GitHub Repo | cryptodominicano/BusNetwork |

## Lead Capture Architecture

Single contact form on index.html (#contact section). All subpage CTAs link to /#contact. No separate CRM integration yet. Leads arrive via email to Isaias@InteliaRD.com. Testimonial from Patrick Goebel, Barons Bus Company, is live on /driver-no-show-alerts and /charter-bus.

## Session Protocol

1. Read WEEKLY-INTEL.md for current state before doing anything.
2. DataForSEO calls always via VPS infra-mcp exec_command — never from Claude sandbox (blocked).
3. KEYWORD-MAP.md contains all page-to-keyword assignments and the SERP sweep baseline. Reference it for all content decisions.
4. At session end when findings exist: push timestamped block to WEEKLY-INTEL.md via GitHub API.
5. Token in master.env on VPS. Format: "## Session: [Month DD, YYYY — HH:MM UTC]".

## Permanent Rules (Never Break)

Never change any .html URL without GSC data first (once GSC is active).
One primary keyword per URL, forever. Check KEYWORD-MAP.md before creating anything.
Service/integration pages own commercial intent. Blog posts own informational intent. Never cross these.
Every blog post must reference a specific fleet platform (Saucon TDS, Geotab, or Zonar) or DOT regulation in the first 60 words.
Never include specific pricing unless a /pricing page is created.
Never deploy more than 2 significant changes at once.
The Saucon TDS content cluster is the strongest traffic driver. Protect rankings on /saucon-tds and /blog/saucon-tds-guide. Do not consolidate these pages without evidence of cannibalization damage.
Internal link density: 2-5 links per 1,000 words. Never exceed this.
Never build more than 15-20 new referring domains in a single week.

## Content Rules

First 60 words of every page: direct factual statement answering the primary query. No marketing copy, no preamble.
Service pages: H1 must contain primary service description. Meta 100-160 chars with primary keyword in first 30 characters.
Blog posts: 1,500-2,500 words, 5+ FAQ items with FAQPage schema, min 3 internal links.
Schema required on all pages: FAQPage + BreadcrumbList on service pages, Article + FAQPage + BreadcrumbList on blog posts.
Statistics density: one attributed stat every 150-200 words (FMCSA, DOT, NHTSA sources).

## Integration Partners (Not Competitors)

Saucon TDS (saucontds.com): The /saucon-tds page ranks alongside their brand results. This is cooperative positioning (we add value on top of their platform), not competitive.
Geotab (geotab.com): Same cooperative model. The /geotab page should position BusFleetAI as "the alert layer Geotab doesn't provide natively."
Zonar (zonar.com): Same cooperative model. The /zonar page needs content parity with Saucon TDS and Geotab pages.

## Competitor Summary (May 27, 2026)

fleetio.com: Broad fleet management SaaS. Appears in 4/20 SERP sweeps at positions 2-4. Not bus-specific. Our edge: bus-only focus, deeper integration content.
buscmms.com: Bus-specific CMMS. Ranks #1 for "automated bus fleet alerts." Closest direct competitor. Our edge: monitoring/alerts layer vs. their maintenance focus.
heavyvehicleinspection.com: DVIR niche content site. Holds #1 for "DVIR compliance automation." Our edge: we offer automated monitoring, they are content-only.
samsara.com: Massive fleet platform. High domain authority. Not bus-specific.
verizonconnect.com: Enterprise fleet. Ranks for DVIR content. Not bus-specific.
jjkeller.com: Compliance content authority. Ranks for DVIR tracking terms.

Key advantage: No competitor combines all three integration partners (Saucon TDS + Geotab + Zonar) with bus-specific automated alerts. Our integration pages are unique content moats.

## SEO and GEO Standards

### robots.txt Rules
Allow: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, CCBot, Claude-SearchBot, Claude-User, Applebot-Extended.
Disallow: Bytespider.
Current state: Missing ClaudeBot, OAI-SearchBot, CCBot, Claude-SearchBot, Claude-User, Applebot-Extended, Bytespider Disallow.

### Schema — Required on All Pages
Homepage: Organization (with sameAs), WebSite, SoftwareApplication, FAQPage.
Service pages: Service, FAQPage, BreadcrumbList.
Integration pages: SoftwareApplication, FAQPage, BreadcrumbList.
Blog posts: Article (with author Person schema), FAQPage, BreadcrumbList.
Validate every schema block with Rich Results Test before committing.

### llms.txt
Must list every live page URL. After every new page deploy, update llms.txt in the same commit.

### GEO — First 60 Words Rule
Direct factual statement answering the primary query. Service entity named explicitly (not "we" or "our"). One specific number or regulation reference. No marketing copy.

### Deployment Checklist
After every deploy confirm: HTTP 200 on all pages, schema validates in Rich Results Test, llms.txt updated, robots.txt correct, canonical self-referencing, sitemap.xml lastmod updated.

---

## Priority Actions (Updated May 27, 2026)

1. Add SITE_BUSFLEETAI_* block to master.env. Deploy IndexNow key file (315f4dac70b642a3975368b65600393e.txt) to repo. Submit sitemap via Bing API.
2. Fix /pricing 404.
3. Fix "Ascensions" typo in all footers.
4. Create llms.txt.
5. Update robots.txt with full AI bot directives.
6. Add WebSite schema and sameAs to homepage.
7. Expand DVIR blog post (4,480/mo keyword cluster opportunity).
8. Add author Person schema to all blog posts.
9. Create blog index page.
10. Begin directory backlink campaign.

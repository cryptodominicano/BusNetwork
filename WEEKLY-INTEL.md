# BusFleetAI — Weekly Intelligence Log

This file is the persistent memory layer for the SEO orchestrator. It is read at the start of every session alongside CLAUDE.md. Each session's findings are prepended so the most recent entry is always first. Never delete old entries. Format for each entry: ## Session: [Month DD, YYYY — HH:MM UTC]

## Session: May 27, 2026 — 20:00 UTC

### Session Type
Initial SEO/GEO audit and baseline SERP sweep. First entry in the intelligence log.

### Site Inventory
14 URLs in sitemap.xml across 7 service/integration pages, 5 blog posts, and 2 legal pages.
GitHub repo: cryptodominicano/BusNetwork (static HTML, Vercel, cleanUrls enabled).
GA4: G-R18FVQ82XG (hardcoded in HTML, not tracked in master.env).

### DataForSEO Ranked Keywords (Labs Database)
BusFleetAI has 22 keywords ranked in Google according to DataForSEO Labs.

The Saucon TDS content cluster is the dominant traffic driver. The /saucon-tds page and /blog/saucon-tds-guide together rank for 14 of the 22 keywords, capturing navigational intent from Saucon TDS users searching for login, portal access, and driver log information. Combined monthly search volume for Saucon TDS navigational queries exceeds 2,000 searches. Key positions: "tds saucon" #6, "sdp saucon tds" #7, "saucon tds" #8, "saucon my driver log" #14.

The DVIR blog post (/blog/what-is-dvir) touches 4 keywords totaling 4,480 monthly searches but ranks at positions 47-87. This is the single largest volume opportunity on the site: "dvir" at 2,400/mo (#87), "dvir meaning" at 1,000/mo (#60), "what does dvir stand for" at 590/mo (#47), and "dot regulations dvir" at 170/mo (#70). Expanding this post to 2,500+ words with FMCSA statistics and comprehensive FAQ could push it into the top 20.

"busfleet" branded query ranks #24 at 90/mo. The Zonar page ranks #34 for "zonar tracking" (30/mo) and #45 for "zonar bus tracking."

### Live SERP Sweep (20 Keywords)
Keywords in top 10: 4 (DVIR compliance automation #5, charter bus fleet monitoring #6, saucon tds bus monitoring #4, saucon tds api integration #5).
Keywords ranked top 20: 8 of 20 swept.
Keywords not ranked: 12 of 20.

Best positions: saucon tds bus monitoring #4, DVIR compliance automation #5, saucon tds api integration #5, charter bus fleet monitoring #6.

Weakest areas: No ranking for "bus fleet monitoring software" (the homepage primary keyword), "bus driver no show alerts" (dedicated page exists), "zonar bus fleet monitoring" (dedicated page exists), and most broad fleet management terms.

### Volume Analysis
High-volume terms with DataForSEO search volume data:
- "dvir" 2,400/mo (we rank #87)
- "saucon tech" 1,300/mo (we rank #28)
- "dvir meaning" 1,000/mo (we rank #60)
- "what does dvir stand for" 590/mo (we rank #47)
- "saucon tds" 320/mo (we rank #6-8)
- "what is DVIR" 320/mo (we rank #47)
- "fleet monitoring software" 210/mo (not ranked)
- "saucon login" 210/mo (we rank #39)
- "geotab fleet telematics" 140/mo (not ranked specifically)
- "saucon tds portal" 140/mo (we rank #19)

### Competitor Analysis
Fleetio.com is the most frequent competitor, appearing in 4 of 20 SERP sweeps at positions 2-4. They are a broad fleet management SaaS, not bus-specific. Geotab.com appears in 5 of 20 sweeps with massive domain authority, but BusFleetAI integrates with them (partner, not competitor). BusCMMS.com is the closest direct competitor: bus-specific, ranks #1 for "automated bus fleet alerts." The niche site heavyvehicleinspection.com holds #1 for "DVIR compliance automation" where we rank #5.

### Critical Audit Findings (20 Issues Documented)
Full audit saved to busfleetai-seo-audit-2026-05-27.md. Top priorities:

1. GSC verified (URL prefix busfleetai.com, service account has Full access). Bing Webmaster verified (2 clicks, 134 impressions). IndexNow key generated (315f4dac70b642a3975368b65600393e) but key file not yet deployed to repo and sitemap not yet submitted via Bing API. Need to add SITE_BUSFLEETAI_* block to master.env.
2. /pricing returns 404 but is linked from every page footer.
3. No llms.txt file (required for GEO citation).
4. robots.txt missing ClaudeBot, OAI-SearchBot, CCBot directives.
5. No WebSite schema on homepage.
6. Organization schema missing sameAs array.
7. Footer has "Ascensions" typo (should be "Ascension").
8. No author Person schema on blog posts.
9. First 40-60 words not optimized for GEO extraction on most pages.
10. Zero industry statistics with attributed sources across all content.

### Cannibalization Warning
/saucon-tds and /blog/saucon-tds-guide both rank for "saucon tds" variants. Blog guide ranks #6 for "tds saucon" while service page ranks #7-8 for similar terms. These need intent differentiation: blog owns "guide/how-to" queries, service page owns "monitoring/alerts/integration" queries.

### Priority Actions

1. Add SITE_BUSFLEETAI_* block to master.env (GSC verified as URL prefix, Bing verified, IndexNow key 315f4dac70b642a3975368b65600393e). Deploy IndexNow key file to repo and submit sitemap via Bing API.
2. Fix /pricing 404 (create page or remove from all footers).
3. Fix "Ascensions" typo to "Ascension" on all pages.
4. Create llms.txt at site root.
5. Update robots.txt with ClaudeBot, OAI-SearchBot, CCBot, Claude-SearchBot, Claude-User, Applebot-Extended. Add Disallow for Bytespider.
6. Add WebSite schema to homepage.
7. Add sameAs array to Organization schema.
8. Expand /blog/what-is-dvir to 2,500+ words (DVIR cluster = 4,480/mo opportunity).
9. Create DVIR requirements blog post (90/mo volume, supports cluster).
10. Begin directory backlink campaign: LinkedIn, Crunchbase, Foursquare.

---

<!-- APPEND NEW SESSIONS ABOVE THIS LINE -->

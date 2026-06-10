# BusFleetAI — Weekly Intelligence Log

This file is the persistent memory layer for the SEO orchestrator. It is read at the start of every session alongside CLAUDE.md. Each session's findings are prepended so the most recent entry is always first. Never delete old entries. Format for each entry: ## Session: [Month DD, YYYY — HH:MM UTC]

---
## Session: June 10, 2026 — 22:45 UTC

### Session Type
Vercel + SEO infrastructure audit and fix. 7-point checklist matching darioamadorperez.com audit pattern.

### Audit Results

| # | Check | Finding | Action |
|---|-------|---------|--------|
| 1 | .vercel.app alias redirect | bus-network-two.vercel.app returned HTTP 200 with full site content (duplicate content risk) | FIXED: patched via Vercel API to 308 → www.busfleetai.com |
| 2 | Security headers | X-XSS-Protection missing. X-Frame-Options was DENY (should be SAMEORIGIN). All other headers present. | FIXED: added X-XSS-Protection: 1; mode=block, changed X-Frame-Options to SAMEORIGIN in vercel.json |
| 3 | Cache-Control / X-Vercel-Cache | X-Vercel-Cache: HIT confirmed on www. CDN caching is active. No action needed. | PASS |
| 4 | Preview URL noindex | Per-commit preview deployments return X-Robots-Tag: noindex (HTTP 401 + noindex). Confirmed safe. | PASS |
| 5 | HSTS | Strict-Transport-Security: max-age=63072000; includeSubDomains; preload confirmed on www. | PASS |
| 6 | og:image stability | All pages use self-hosted /assets/open-graph.png on www.busfleetai.com. No third-party CDN URLs. | PASS |
| 7 | Canonical chain | Apex was 307 → www (should be 308). www returns 200. All canonicals self-referencing www domain. | FIXED: patched apex domain via Vercel API to 308 → www.busfleetai.com |

### Changes Deployed

**Commit f9820e0a** — vercel.json updated:
- Added X-XSS-Protection: 1; mode=block
- Changed X-Frame-Options from DENY to SAMEORIGIN
- Added redirects block (host-conditional apex 308 rule — superseded by Vercel API patch below)

**Vercel API patches (no deploy needed, instant):**
- bus-network-two.vercel.app: 308 redirect → www.busfleetai.com
- busfleetai.com apex domain: redirectStatusCode patched from null (307) to 308

### Final Verified Header State (www.busfleetai.com)

X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-XSS-Protection: 1; mode=block
X-Vercel-Cache: HIT
HTTP/2 200

### Final Verified Redirect Chain

busfleetai.com → HTTP 308 → https://www.busfleetai.com/ ✓
bus-network-two.vercel.app → HTTP 308 → https://www.busfleetai.com/ ✓
www.busfleetai.com → HTTP 200 ✓
Per-commit preview URLs → HTTP 401 + X-Robots-Tag: noindex ✓

---



## 12-Month SEO/GEO Domination Plan (June 2026 through May 2027)

Baseline: May 27, 2026. 22 ranked keywords, 4 in top 10, zero referring domains, zero AI citations confirmed, 15 live pages (7 service/integration, 5 blog, 1 blog index, 2 legal). Bing: 2 clicks, 134 impressions. Google: positions 4-87 on ranked terms.

### Month 1 — June 2026: Foundation Complete + Indexing Push

Week 1 and Week 2 technical and content fixes are deployed (completed May 27). June focus is indexing acceleration and first backlinks. Submit all 15 URLs via IndexNow (Bing API using key 315f4dac70b642a3975368b65600393e). Submit sitemap to Bing Webmaster API. Run GSC URL Inspection request indexing on the 10 most important pages (homepage, 3 service pages, 3 integration pages, blog index). Verify all pages show "URL is on Google" in GSC within 14 days.

Begin directory backlink campaign (safe velocity for new domain: 5-10 referring domains/month). Tier 1 free directories: LinkedIn company page, Crunchbase, Foursquare/Swarm, Yelp business listing, Google Business Profile (if applicable for SaaS), F6S, ProductHunt (ship page). All listings use branded anchor text.

Expand /blog/what-is-dvir to 2,500+ words. This is the 4,480/mo keyword cluster ("dvir" 2,400, "dvir meaning" 1,000, "what does dvir stand for" 590). Add: state-by-state DVIR requirements table, FMCSA penalty breakdown, electronic vs paper DVIR comparison, expanded FAQ to 8+ questions. Target: push from #47-87 to top 30.

Publish 1 new blog post: /blog/dvir-requirements (90/mo, supports DVIR cluster). First GEO baseline audit: test 5 target prompts in ChatGPT, Perplexity, Gemini. Log results.

End of month targets: 30+ ranked keywords, 5+ in top 10, 3+ referring domains.

### Month 2 — July 2026: Content Velocity + DVIR Cluster Completion

Publish 2 new blog posts: /blog/fmcsa-bus-fleet-compliance (70/mo) and /blog/bus-fleet-management-best-practices (pillar content for broader fleet cluster). Both must follow the reverse silo pattern: link down to service pages, cross-link to existing blog posts.

Continue directory campaign: add Capterra, G2, Software Advice listings for BusFleetAI as a SaaS product. These are high-authority software directories. Target 5-8 new referring domains this month.

Create comparison content: /blog/geotab-vs-saucon-tds-bus-fleets. Comparison tables are strongly preferred by AI models for citation (KB: GEO Advanced). This page should rank for "geotab vs saucon tds" and similar comparison queries while linking to both integration pages.

Zonar page content parity: expand /zonar to match the depth of /saucon-tds and /geotab (API data table, expanded service descriptions, full FAQ). Currently the weakest integration page.

Monitor DVIR blog expansion results. If "what does dvir stand for" moves to top 30, the expansion worked. If not, add more FAQ items and internal links.

End of month targets: 35+ ranked keywords, 6+ in top 10, 8+ referring domains, blog posts at 8 total.

### Month 3 — August 2026: Authority Building + First Outreach

Publish 2 new blog posts: /blog/bus-fleet-cost-savings (ROI content, bottom-funnel) and /blog/csa-score-bus-fleet (compliance anxiety content, links to DVIR cluster).

Launch first outreach campaign. Identify 10 broken link opportunities on fleet management, DOT compliance, and charter bus industry resource pages. Send replacement content pitches pointing to BusFleetAI blog posts. Target 2-3 link acquisitions.

Submit to HARO/Connectively/Featured.com as a fleet monitoring expert. Respond to queries about bus safety, DVIR compliance, fleet automation. Target 1-2 media mentions.

Create first linkable asset: a comprehensive "Bus Fleet Compliance Checklist 2026" as a downloadable PDF or standalone page at /bus-fleet-compliance-checklist. Detailed, authoritative, designed to earn organic backlinks.

Second monthly GEO audit. Compare to June baseline. If zero citations, investigate: check that llms.txt is returning 200, verify AI bot crawl in server logs, review first-60-words quality.

End of month targets: 40+ ranked keywords, 8+ in top 10, 12+ referring domains, first HARO mention.

### Month 4 — September 2026: Optimization Cycle

No new pages this month. Focus on optimizing existing content based on 3 months of GSC data.

GSC position 6-15 audit: identify every keyword ranking 6-15 and audit the corresponding page. For each: refresh statistics, expand FAQ, add 1-2 new internal links, improve title tag CTR. These are the "striking distance" keywords where small improvements yield page 1 rankings.

CTR optimization pass: review GSC for keywords with high impressions but low CTR (below position-benchmark CTR curves). Rewrite meta descriptions on those pages.

Content refresh on all 5 original blog posts: update statistics, add new sections if word count is under 1,500, verify all internal links still point to live pages.

Guest post campaign: identify 3-5 fleet management, transportation industry, or DOT compliance blogs accepting guest contributions. Pitch 2 posts. Target DR 30+ sites with real organic traffic.

End of month targets: 45+ ranked keywords, 10+ in top 10, 15+ referring domains.

### Month 5 — October 2026: Scale Content + Seasonal Prep

Publish 2-3 new blog posts targeting keywords discovered from GSC query data (queries with impressions but no dedicated page). Use the Content Opportunity Agent pattern from the golf site: scan GSC for unowned queries.

Build first Digital PR data asset: an original data study or industry report. Example: "The State of Bus Fleet Compliance 2026" using FMCSA public data (MCMIS crash files, enforcement data). Pitch to 50-100 transportation journalists and bloggers.

Prep for Q4 travel season: charter bus companies book heavily for holiday travel (Thanksgiving, Christmas, New Year's corporate events). Create or refresh content targeting "charter bus compliance for holiday travel," "how to prepare your bus fleet for winter."

Third monthly GEO audit. By now, if the site has 15+ referring domains and 40+ ranked keywords, AI citation probability increases significantly.

End of month targets: 50+ ranked keywords, 12+ in top 10, 20+ referring domains.

### Month 6 — November 2026: Six-Month Review + Strategy Reset

Full DataForSEO ranked_keywords sweep on busfleetai.com and all 6 competitors (fleetio, buscmms, samsara, geotab fleet pages, verizonconnect, jjkeller). Compare keyword overlap and gaps.

Review all KPIs against June baseline. Assess: which content clusters drove the most traffic? Which pages have the best conversion rate (GA4 qualify_lead events)? Which backlinks moved rankings most?

Prune or consolidate any content that has zero impressions after 6 months. If a blog post has zero GSC impressions, it either needs a complete rewrite or should be consolidated into a stronger page.

Refresh the keyword map based on new GSC data. Add any new high-volume queries discovered. Remove any keywords that turned out to be irrelevant.

End of month targets: 55+ ranked keywords, 14+ in top 10, 25+ referring domains, 1+ confirmed AI citation.

### Months 7-9 — December 2026 through February 2027: Authority Consolidation

Continue publishing 2 posts/month. Focus on bottom-funnel comparison and ROI content that supports conversion: "BusFleetAI vs manual monitoring," "how much does a missed DVIR cost your fleet," "ROI of automated driver no-show alerts."

Intensify guest posting: target 2 placements per month on DR 40+ sites. Pitch podcast appearances on fleet management, transportation safety, and small business automation podcasts.

Build out a case study page using the Barons Bus testimonial as the foundation. Expand with data points: "71 buses monitored, 5-minute alert response, X missed DVIRs caught in first 90 days." Case studies are high-citation content for AI models.

Monthly GEO audits continue. By Month 9, the site should have enough authority for consistent partial citations in Perplexity and Bing Copilot.

End of Month 9 targets: 70+ ranked keywords, 18+ in top 10, 35+ referring domains, 3+ AI citations.

### Months 10-12 — March through May 2027: Dominance Push

By this phase the site should have 35+ referring domains, 70+ ranked keywords, and established topical authority in bus fleet monitoring, DVIR compliance, and charter bus operations.

Push for #1 positions on the 4 keywords currently in top 10: "DVIR compliance automation," "charter bus fleet monitoring," "saucon tds bus monitoring," "saucon tds api integration." This requires targeted backlink building to these specific pages.

Launch a "BusFleetAI Academy" content hub: a comprehensive resource center with all blog posts organized by topic cluster, downloadable checklists, and video walkthroughs. This becomes the pillar hub for the entire site.

Final competitive gap analysis: identify any keywords competitors rank for that BusFleetAI doesn't. Build content to close gaps.

End of Month 12 targets: 100+ ranked keywords, 25+ in top 10, 50+ referring domains, 5+ consistent AI citations, DVIR content cluster in top 10 for "what is dvir" and "dvir meaning."

---

## Session: May 28, 2026 — 06:00 UTC

### Session Type
Month 1 execution continued: full SEO/GEO audit against KB, all audit fixes deployed, Resend contact form live, Clarity deployed.

### SEO/GEO Audit Scorecard (Post-Fix)
Ran comprehensive live audit against all 46 points in seo_agent_knowledge Qdrant KB. 20 categories tested across 16 HTML pages + robots.txt + llms.txt + sitemap.xml.

Pre-fix score: 72% (14.4/20 categories passing)
Post-fix score: 95%+ (all categories passing except homepage H1 which uses JS injector for React compatibility)

### Audit Fixes Deployed (Commit 8205604, 15 files, 221 insertions)

Fix 1: Homepage H1 added via JS injector (React hero h2 promoted to h1).
Fix 2: fetchpriority="high" added to hero images on all 13 static content pages.
Fix 3: Preload links added in head for hero images on 13 pages.
Fix 4: All Unsplash images converted to WebP (&fm=webp&q=80), zero JPG remaining.
Fix 5: Security headers added to vercel.json (X-Frame-Options, X-Content-Type-Options, HSTS, Referrer-Policy, Permissions-Policy).
Fix 6: 5 blog title tags shortened to under 60 characters (removed "| BusFleetAI" suffix from blogs).
Fix 7: "BusFleetAI" entity confirmed in first paragraph of all 6 blog posts.
Fix 8: Service schema added to charter-bus, driver-no-show-alerts, dvir-compliance.
Fix 9: SoftwareApplication schema added to saucon-tds, geotab, zonar.
Fix 10: OG tags added to blog/index.html.

### Contact Form — Resend API Live
Replaced Formspree with Vercel serverless function at /api/contact.js. Form submissions now go through Resend API (endpoint: https://api.resend.com/emails, NOT /v1/emails) from Bus-Lead@goldcoastai.pro to isaias@inteliard.com. Reply-to set to lead's email. All form fields rendered dynamically in the lead email table.

RESEND_API_KEY added as encrypted Vercel env var on project prj_siP8LBjQrLr9w8XghoAJxwH9ZFqO.

Critical discovery: Resend send endpoint is /emails not /v1/emails. The /v1/ path returns 401 with misleading "restricted_api_key" error. Resend API skill updated to reflect this.

### Microsoft Clarity Deployed (Commit via GitHub API)
Clarity tracking snippet (project wxzhvix4ea) added to all 15 HTML pages. Tracking ID stored in master.env.

### Vercel Project ID Confirmed
prj_siP8LBjQrLr9w8XghoAJxwH9ZFqO (bus-network). Added to master.env as SITE_BUSFLEETAI_VERCEL_PROJECT_ID.

### Current Site State (Post All Deploys)
17 live pages (7 service/integration, 7 blog posts, 1 blog index, 2 legal). All pages have: GA4 + Clarity tracking, correct schema per page type, GEO-optimized first paragraphs with BusFleetAI entity, attributed FMCSA/DOT statistics, fetchpriority hero images in WebP, security headers via vercel.json, full internal linking with reverse silo pattern. robots.txt allows all 10 AI bots, Bytespider disallowed. llms.txt lists all pages. sitemap.xml current.

### Priority Actions (Next Session)
1. Begin directory backlink campaign: LinkedIn company page, Crunchbase, Capterra, G2 (Month 1 plan)
2. Submit sitemap manually in Bing Webmaster dashboard (API SubmitFeed still returns NotAuthorized)
3. Build rank intelligence agent (weekly DataForSEO SERP sweep, auto-push to WEEKLY-INTEL.md)
4. Build technical health agent (monthly page-by-page KB compliance check)
5. Create Google Sheet tracker matching golf site tab structure
6. Month 2 content: /blog/fmcsa-bus-fleet-compliance, /blog/bus-fleet-management-best-practices, /blog/geotab-vs-saucon-tds-bus-fleets
7. Expand /zonar to match /saucon-tds and /geotab content depth
8. Consider retargeting /driver-no-show-alerts keyword (search intent mismatch confirmed in GEO audit)


## Session: May 28, 2026 — 02:00 UTC

### Session Type
Month 1 execution: IndexNow submission, Bing URL batch, DVIR cluster content deployment, GEO baseline audit.

### Indexing Actions Completed
IndexNow bulk submit: 16 URLs accepted (HTTP 200) via api.indexnow.org. Bing URL batch: 16 URLs submitted via SubmitUrlBatch API ({"d":null} success). Bing quota after submit: 84 daily / 384 monthly remaining. Bing sitemap submission via API failed (NotAuthorized on SubmitFeed endpoint), must submit manually from Bing Webmaster dashboard. New /blog/dvir-requirements URL submitted via both IndexNow and Bing batch API separately after DVIR cluster deploy.

### DVIR Cluster Content Deployed (Commit b3dd992)
/blog/what-is-dvir expanded from ~800 words to 5,000+ words. Six new H2 sections added: vehicle types, pre-trip vs post-trip, penalties with HTML table, electronic vs paper DVIR, state-by-state requirements, DOT compliance review prep. FAQ expanded from 5 to 10 questions. 44 attributed FMCSA/DOT/CFR references.

New blog post /blog/dvir-requirements created: 1,800+ words, full Article + FAQPage + BreadcrumbList schema, 6 FAQ items, 32 attributed regulatory references. Cross-linked to/from what-is-dvir and dvir-compliance. Added to sitemap.xml, llms.txt, blog/index.html.

Site now has 17 live pages and 7 blog posts.

### Microsoft Clarity Deployed
Clarity tracking snippet (project wxzhvix4ea) added to all 15 HTML pages after GA4 gtag block. Tracking ID stored in master.env as SITE_BUSFLEETAI_CLARITY_TRACKING_ID=wxzhvix4ea.

### GEO Baseline Audit (May 28, 2026)

Tested 5 target prompts via web search (proxy for how search engines and AI models surface results). Results logged below for monthly tracking comparison.

| # | Prompt | BusFleetAI Cited? | Which Pages | Competitor Context |
|---|--------|-------------------|-------------|-------------------|
| 1 | "bus fleet monitoring software for charter companies" | NO | Not in results | ezlogz, gitnux, mobisoftinfotech, wifitalents, fitgap, allrideapps, busify dominate |
| 2 | "how to automate DVIR compliance for bus fleets" | YES | /blog/what-is-dvir | verizonconnect #1, worktrek #2, buscmms #3-6 (4 pages!), busfleetai #7 |
| 3 | "saucon tds fleet monitoring add-on" | YES (x2) | /saucon-tds, /blog/saucon-tds-guide | saucontds.com official, eyeride comparison page |
| 4 | "driver no show alert system for bus companies" | NO | Not in results | safefleet (hardware), saferwatchapp, protrantechnology, childcheckmate dominate. Results skew toward physical alert devices, not fleet software. |
| 5 | "best fleet monitoring software for private bus companies" | NO | Not in results | ezlogz, wifitalents, zipdo, fitgap, matrackinc, buscmms dominate |

### GEO Baseline Summary
Cited: 2 of 5 prompts (40%)
Strong: Saucon TDS queries (double citation), DVIR content (post-expansion)
Weak: Broad "fleet monitoring software" queries (no citation), "driver no show" queries (search engines interpret as physical alert hardware, not software)
Key competitor: BusCMMS appears in 4 results across 2 prompts with deep content. They are the strongest organic competitor in the DVIR/compliance space.

### Observations
Prompt 4 ("driver no show alert system") returns results about physical bus safety devices and passenger no-show policies, not fleet management software. The keyword intent is misaligned. The /driver-no-show-alerts page needs to differentiate itself by targeting "bus driver no show notification software" or "driver attendance monitoring for bus fleets" instead.

BusCMMS has published 5+ blog posts specifically about DVIR and DOT compliance in the last 4 months. They are actively building topical authority in our strongest content cluster. The DVIR expansion and new dvir-requirements post are direct competitive responses.

### Priority Actions (Updated)
1. Submit sitemap manually in Bing Webmaster dashboard (API auth failed)
2. Begin directory backlink campaign: LinkedIn company page, Crunchbase, Capterra, G2
3. Consider retargeting /driver-no-show-alerts keyword to "bus driver attendance monitoring software" or similar (search intent mismatch on current keyword)
4. Next GEO audit: June 30, 2026


## Session: May 27, 2026 — 22:00 UTC

### Session Type
Week 2 execution: content optimization, GEO rewrites, internal linking overhaul, author schema, blog index creation.

### What Was Deployed (Commit dee4dd2, 17 files, 331 insertions)

Task 1 (GEO First-60-Words): All 7 service/integration pages rewritten with primary keyword in sentence 1, "BusFleetAI" named explicitly, and a specific regulation or stat (49 CFR 396.11, $16,000 penalties, "within 5 minutes").

Task 2 (Statistics Density): 5-9 attributed FMCSA/DOT/NHTSA/ABA statistics added per page across all 12 content pages. Zero placeholder stats.

Task 3 (Author Schema): All 5 blog posts now have Person schema for Isaias Perez (jobTitle: Fleet Automation Specialist, worksFor: BusFleetAI, sameAs: GitHub) in Article JSON-LD, plus a visible author bio section above each footer.

Task 4 (FAQ Verification): All 12 pages confirmed: FAQ schema questions match visible accordion content. No schema-only FAQs found.

Task 5 (Internal Linking): Blog-to-blog cross-links added (all 5 posts link to 2+ other posts). Blog-to-service links verified (2+ service pages + 1+ integration page per post). Service-to-blog links added. Descriptive anchor text with varied phrasing. Reverse silo pattern active.

Task 6 (Blog Index): Created at /blog with all 5 posts, BreadcrumbList schema, GEO intro paragraph, CTA. Nav updated on all 15 pages. Added to sitemap.xml and llms.txt.

Task 7 (Sitemap): All lastmod dates updated to 2026-05-27. Blog index entry added.

### What Was Deployed Earlier (Commit 1dd031c, Week 1)

IndexNow key file created. "Ascensions" typo fixed on all 14 pages. robots.txt updated with full AI bot directives + Bytespider Disallow. llms.txt created. WebSite schema added to homepage. sameAs expanded on Organization schema. /pricing link removed from all footers.

### Current State After Both Deploys

Site now has: 16 live pages (added /blog index), full AI bot access in robots.txt, llms.txt listing all pages, WebSite + Organization + SoftwareApplication + FAQPage schema on homepage, BreadcrumbList + FAQPage on all subpages, Article + Person author schema on all blog posts, GEO-optimized first paragraphs on all pages, attributed industry statistics throughout, full internal linking with reverse silo pattern, blog-to-blog cross-links active.

### Priority Actions (Updated)

1. Submit sitemap and all URLs via IndexNow/Bing API
2. Expand /blog/what-is-dvir to 2,500+ words (DVIR cluster = 4,480/mo)
3. Publish /blog/dvir-requirements (90/mo, new)
4. Begin directory backlinks: LinkedIn, Crunchbase, Capterra, G2
5. Run first GEO baseline audit (5 prompts, ChatGPT + Perplexity + Gemini)
6. Set up daily aggregation script (match golf site pattern)
7. Set up SERP sweep cron (DataForSEO, 20 keywords daily)
8. Create Google Sheet tracker with same tab structure as golf site

---

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

# AI field guide: research notes (step B1)

Checked on: 2026-10-31. Budget used: 30 of 30 web searches, 20 of 20 page reads.

## Notes on method, denials and limits (read first)
- **Denials:** (a) Bash was denied (don't-ask mode), so this file was NOT copied to ~/Projects/ai-field-guide/research/ and NOT committed there. It exists only at this path. (b) 3 page reads returned HTTP 403 (Axios Amodei article, Justia Mata v. Avianca order, WEF press release). No workaround attempted. A DORA 2025 page read returned no numbers.
- Evidence tags: **P** = I read the page (in full or part); **S** = search-result summary only, page not opened; **V** = vendor or interested-party source. Strength: strong / moderate / weak.
- WebSearch returns summaries, not raw pages. Anything tagged S must be re-checked at the URL before publishing. Quotes are only those returned by page reads (P). Nothing invented.
- Low-quality aggregator results were deliberately not used as evidence.
- No personal facts about Musa.

---
## 1. Using AI well: evidence on productivity and learning

### 1.1 METR randomized trial, early 2025 (P)
- https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ (published 2025-07-10)
- RCT: 16 experienced open-source developers, 246 real issues, AI randomly allowed or not (mainly Cursor Pro with Claude 3.5/3.7 Sonnet). With AI allowed, tasks took 19% longer. Developers expected a 24% speedup and afterwards still believed about 20%.
- Authors' limits: small sample, one setting, early-2025 tools, possible sampling bias. They state they do NOT claim AI slows most developers. Page now carries a notice that these results are out of date.
- Evidence: strong for what it measured; weak for generalising. **Contested / narrow.**

### 1.2 METR update, 2026-02-24 (P)
- https://metr.org/blog/2026-02-24-uplift-update/
- Late-2025 data: returning developers -18% time (CI about -38% to +9%), new developers -4% (CI about -15% to +9%): possible speedup, but intervals include zero. METR calls it "very weak evidence": developers refused to work without AI and withheld tasks (30-50% said so). Self-reported speedups unreliable. Experiment being redesigned.
- Evidence: moderate-to-weak. Shows the measurement problem itself. **Contested.**
- Secondary blogs misreport this update in conflicting ways. Use only METR's page.

### 1.3 Anthropic RCT on learning, 2026-01-29 (P, vendor study)
- https://www.anthropic.com/research/AI-assistance-coding-skills
- 52 mostly junior engineers learning the Trio library. Completion time not significantly different (about 2 min faster with AI, p = 0.391). Quiz 50% (AI) vs 67% (no AI), p = 0.01, d = 0.738. Largest gap on debugging.
- Low scorers delegated code or used AI only to debug; high scorers (65%+) asked conceptual or follow-up questions. Authors: pattern analysis correlational; small sample; comprehension measured shortly after; chat assistant, not agentic tool.
- Evidence: moderate (small RCT). Flag: AI vendor studying its own product category, though the result is unflattering.

### 1.4 Education: Bastani et al., PNAS 2025 (S)
- https://papers.ssrn.com/abstract=4895486 ; PNAS vol. 122 e2422633122 (https://econpapers.repec.org/RePEc:nas:journl:v:122:y:2025:p:e2422633122)
- Randomised trial, nearly 1,000 high-school maths students in Turkey, Fall 2023. Unguarded GPT access improved practice scores but students did 17% worse on later unassisted exams; a guarded tutor version avoided the penalty.
- Evidence: moderate (peer-reviewed RCT) but one school, one subject, 2023 model.

### 1.5 Stack Overflow Developer Survey 2025 (P)
- https://survey.stackoverflow.co/2025/ai (fieldwork dates not on page)
- Daily AI tool use 47.1% (all respondents; 50.6% of professionals); distrust accuracy 45.7% vs trust 32.7%; 3.1% highly trust; 66% top frustration "AI solutions that are almost right, but not quite"; favourable 59.7%.
- Evidence: moderate. Large, self-selected, self-reported attitudes, not outcomes.

### 1.6 DORA 2025 (partial P + S)
- https://dora.dev/research/2025/dora-report/ (P partial); https://blog.google/technology/developers/dora-report-2025/ (S)
- P: "AI's primary role is as an amplifier, magnifying an organization's existing strengths and weaknesses."
- S (unverified on page): published 2025-09-23; about 5,000 respondents; 90% adoption; adoption now linked to higher throughput but also instability unless testing/QA keep pace.
- Evidence: moderate (large survey, correlational, Google-run programme). Check PDF for exact numbers.

### 1.7 Anthropic Economic Index, Jan 2026 (P, vendor data)
- https://www.anthropic.com/research/anthropic-economic-index-january-2026-report (2026-01-15)
- Computer/maths (mostly coding): "a third of conversations on Claude.ai and nearly half of 1P API traffic"; Claude.ai share fell from 40% (Mar 2025) to 34% (Nov 2025). Augmented 52% vs automated 45%. Report: "none of the measures should be taken as exact or definitive."
- Evidence: moderate. **Vendor data about one vendor's users only**, not AI use in general.

---
## 2. Safe and responsible use

### 2.1 OWASP Top 10 for LLM Applications 2025 (P)
- https://genai.owasp.org/llm-top-10/
- LLM01 Prompt Injection; 02 Sensitive Information Disclosure; 03 Supply Chain; 04 Data and Model Poisoning; 05 Improper Output Handling; 06 Excessive Agency; 07 System Prompt Leakage; 08 Vector and Embedding Weaknesses; 09 Misinformation; 10 Unbounded Consumption.
- Evidence: strong as community-consensus risk list; not measured incidence.

### 2.2 NCSC: prompt injection is not SQL injection, 2025-12-08 (P)
- https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection
- LLMs have no inherent boundary between instructions and data; prompt injection "may never be totally mitigated"; reduce impact via least privilege, deterministic non-LLM safeguards, logging; be wary of products claiming to "stop" it; if risk is intolerable, an LLM may not suit the use case. Warns of "a similar wave of breaches".
- Evidence: strong as authoritative government technical opinion; analysis, not an empirical study. Fetched byline inconsistent ("Dave Chismon" vs sign-off "David C"); cite as NCSC.

### 2.3 NCSC guidelines for secure AI system development (P)
- https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development (2023-11-27, v1.0)
- Four areas: secure design, development, deployment, operation and maintenance. Aligned with NIST SSDF and CISA secure-by-design. Page did not list partner agencies; do not claim a joint list without checking.
- Evidence: strong as guidance; not outcome evidence.

### 2.4 NIST AI 600-1 Generative AI Profile (P partial + S)
- https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence (2024-07-26)
- P: "cross-sectoral profile of and companion resource for the AI Risk Management Framework (AI RMF 1.0) for Generative AI", "intended for voluntary use", issued under EO 14110.
- S: twelve GAI-specific risks, 200+ suggested actions. Vendor "control counts" (8, 43) conflict; ignore. I did not check EO 14110's current status; do not assert it.
- Evidence: strong as reference; voluntary, not a certification.

### 2.5 EU AI Act dates (P unofficial tracker + S)
- https://artificialintelligenceact.eu/implementation-timeline/ ("last updated 31 August 2026"; unofficial, not EUR-Lex)
- Prohibitions and AI-literacy duty from 2025-02-02; GPAI from 2025-08-02 (older models by 2027-08-02); Article 50 transparency 2026-08-02 (Art 50(2) for pre-existing systems by 2026-12-02); high-risk Annex III 2027-12-02, Annex I 2028-08-02.
- **Unresolved:** search results disagree on whether the "Digital Omnibus" delay is in force (one says Regulation (EU) 2026/1744, in force 2026-07-27; another says still draft). Verify in the Official Journal. Art. 4 wording reportedly softened to "promote" AI literacy (S, unverified).
- Evidence: moderate until checked against EUR-Lex.

### 2.6 Data leakage / IP incidents
- **Samsung, 2023 (S):** staff pasted internal source code into ChatGPT; Samsung temporarily restricted generative AI on company devices (https://www.techradar.com/news/samsung-bans-chatgpt-use-after-employee-leak ; https://www.csoonline.com/article/3695170/samsung-bans-staff-ai-use-over-data-leak-concerns.html). Memo did not say what code leaked. Evidence: moderate (consistent press; original Bloomberg not read).
- **EchoLeak, CVE-2025-32711 (S):** zero-click indirect prompt injection in Microsoft 365 Copilot (Aim Security), CVSS 9.3, patched; no evidence of in-the-wild exploitation (https://thehackernews.com/2025/06/zero-click-ai-vulnerability-exposes.html). One aggregator gave a conflicting 2026 patch date; check NVD/MSRC. Evidence: moderate.
- **Bartz v. Anthropic (S):** $1.5bn copyright settlement over pirated books; final approval reported July 2026 (https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/). Earlier ruling (Alsup, June 2025) found training fair use but not the pirated library. Opt-out suits ongoing. Dates/judge vary slightly across sources. Evidence: moderate. Disclose that the defendant is the maker of Claude.

---
## 3. What employers value

### 3.1 Public CEO memos (S)
- Shopify, April 2025: "reflexive AI usage" as baseline expectation, AI in performance reviews, teams show AI can't do a job before asking for headcount (https://www.tomshardware.com/tech-industry/artificial-intelligence/shopify-ceo-teams-must-prove-ai-cant-do-a-task-before-asking-for-new-hires-resources). Duolingo "AI-first" email, 2025-04-28 (https://www.tomsguide.com/ai/duolingo-wants-to-ditch-contractors-in-favor-of-ai); reportedly later clarified no full-time layoffs (secondary).
- Memos not read directly. These are statements of intent, not policy documents or outcomes. Evidence: weak-to-moderate. Describe as "two publicly reported CEO memos"; no logos, no implied endorsement.
- Gap: no actual published acceptable-use policy was read. UK Government AI Playbook (https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government, 2025-02-10 per S) is a public-sector candidate; not opened.

### 3.2 Job adverts (S, secondary)
- Relayed: Lightcast (via Stanford AI Index 2026) AI-competency postings +55% year on year; Indeed share of postings requiring AI skills +45.7% in 2025; LinkedIn 2026 says AI literacy now baseline; FrogHire.ai (vendor) about 20.7m postings, AI-skill mentions 9.33% to 19.11%. Fisher Phillips: no shared definition of "AI literacy" (https://www.fisherphillips.com/en/news-insights/what-ai-skills-should-hiring-employers-look-for.html).
- No primary report opened. Figures vary by method. Evidence: weak until Lightcast/Indeed/LinkedIn originals are checked.

### 3.3 WEF Future of Jobs 2025 (S; read blocked)
- Per summaries: about 1,000 employers, 14m workers, 22 industries, 55 economies; AI and big data, networks and cybersecurity, technological literacy among fastest-growing skills to 2030; creative thinking, resilience, flexibility rising. "77% plan to reskill" came garbled. Primary: https://www.weforum.org/publications/the-future-of-jobs-report-2025/ (not read).
- **Employer expectations, not outcomes.** Evidence: moderate once verified.

### 3.4 Stanford "Canaries in the Coal Mine" (P)
- https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/ (revised 2026-08-12)
- Brynjolfsson, Chandar, Chen; ADP payroll data to June 2026. Ages 22-25 in AI-exposed occupations "now stands 19% below where it would be had it kept pace with that of their less-exposed peers." Earlier versions said 13% (Aug 2025) and 16% (Nov 2025, S): the number moves with revisions.
- Authors: "early, descriptive indicators... rather than causal estimates"; weakens with education controls; some trends predate generative AI; ADP gap larger than national benchmarks.
- Evidence: moderate, descriptive. **Contested** (I did not retrieve a rebuttal).

### 3.5 MIT NANDA "95% of pilots" (S, contested)
- Widely reported (e.g. https://finance.yahoo.com/news/mit-report-95-generative-ai-105412686.html); critique: https://neonvagabond.xyz/mirrors/mit-report-lacks-evidence.html . Critics: thin methodology, narrow "failure" (no measurable P&L within about six months), author tie to NANDA tech.
- Evidence: weak. Do NOT quote 95% as fact; if used, "widely reported but methodologically criticised".

---
## 4. Coding
- Controlled evidence: 1.1-1.3. Summary: one RCT (early 2025) found a slowdown for experienced developers on their own mature repos; METR's later data suggests smaller or reversed effect but inconclusive; Anthropic RCT shows a learning cost when delegating. Self-reported speedups unreliable.
- **Veracode 2025 GenAI Code Security Report (P, vendor)**: https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/ (2025-07-30). 80 CWE-based completion tasks, 100+ LLMs; 45% of cases introduced OWASP-Top-10-class flaws; Java over 70% failure; Python/C#/JavaScript 38-45%; XSS (CWE-80) failed in 86%, log injection (CWE-117) 88%; "models are getting better at coding accurately but are not improving at security". **Vendor study** (Veracode sells scanning/fix tools); synthetic benchmark where a secure and insecure option existed, not "45% of real AI code is vulnerable" (some outlets overstate). Evidence: moderate.
- DORA and Stack Overflow: 1.5, 1.6.

---
## 5. Cyber security

### 5.1 AI-enabled attack: Anthropic GTG-1002, 2025-11-13 (P, vendor self-report)
- https://www.anthropic.com/news/disrupting-AI-espionage
- Anthropic says a group it assesses "with high confidence" as Chinese state-sponsored used Claude Code against roughly thirty targets, "succeeded in a small number of cases"; AI did "80-90% of the campaign", humans at about 4-6 decision points. Claude "occasionally hallucinated credentials", "an obstacle to fully autonomous cyberattacks". Anthropic admits it only sees Claude usage.
- Evidence: weak-to-moderate. **Vendor claim, not independently verified**; "first" and 80-90% are Anthropic's framing. Reported outside scepticism (S, no named critic; do not name one unchecked).

### 5.2 Prompt injection: NCSC (2.2), OWASP LLM01 (2.1), EchoLeak (2.6). Strong consensus it is unsolved.

### 5.3 AI in the SOC (S, vendor-heavy)
- Gartner **forecast**: by 2028, 70% of large SOCs will pilot AI agents for tier 1/2 work, only 15% will see results; analysts Craig Lawson and Andrew Davies (https://www.helpnetsecurity.com/2026/09/09/prophet-security-evaluating-ai-soc-agents/ , a Prophet Security vendor-sponsored page). Gartner reportedly puts AI SOC agents at Peak of Inflated Expectations (2026 Hype Cycle). Gartner report paywalled, not read.
- SANS 2025 SOC Survey: 69% mostly manual reporting; 2026 figure (79% use AI/ML, 36% integrated in a defined workflow) single-sourced via Vectra (vendor). Weak.
- Evidence: weak. Gartner number is a forecast.

---
## 6. Other fields (with limits)

### 6.1 Healthcare: ambient AI scribes (S)
- Two NEJM AI trials (late 2025): UCLA (Lukac et al.), 238 physicians, DAX Copilot vs Nabla vs usual care; Nabla reduced time-in-note, burnout measures improved modestly (secondary endpoints needing confirmation), occasional clinically significant note inaccuracies; Afshar et al. pragmatic trial, 66 practitioners, work exhaustion down 0.44 on a 5-point scale. https://pubmed.ncbi.nlm.nih.gov/41497288/ ; https://www.news-medical.net/news/20251126/AI-tools-can-ease-documentation-burden-and-reduce-physician-burnout.aspx
- Limits: small, burnout/time outcomes not patient outcomes; funding/vendor ties not checked; citation details vary. Evidence: moderate, small.

### 6.2 Law
- Mata v. Avianca (S.D.N.Y.): sanctions order 2023-06-22, Judge Castel; lawyer used ChatGPT, fabricated cases cited (https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc. ; order https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54, read 403). Sanction amount not verified.
- Scale (P): Charlotin AI Hallucination Cases database, https://www.damiencharlotin.com/hallucinations/ : "2241 cases identified so far", updated 2026-10-29; 1,294 pro se, 884 lawyers, 33 judges; USA 1,514, Canada 238, Australia 112, UK 89. Counts court decisions discussing hallucinated content (some alleged, not confirmed); "does not track every fake citation".
- Evidence: strong that it happens and is rising; not a rate per filing. Single-researcher curated database.

### 6.3 Finance (S)
- BoE/FCA AI survey 2024 (2024-11-21, 118 respondents): 75% of firms using AI, 10% more planning within three years; FCA says no AI-specific rules, supervises under existing frameworks; FINRA Regulatory Notice 24-09 (June 2024): existing supervision/communications rules apply to AI content. All via law-firm summaries (e.g. https://www.regulationtomorrow.com/2026/01/how-are-regulators-and-firms-approaching-ai-this-year/); no primary read. Evidence: weak-to-moderate; no 2025 survey found. Unverified aggregator claim ("90% of financial professionals see more AI-enabled fraud"): do not use.

### 6.4 Education: 1.3 and 1.4 (learning harm without guardrails). Moderate, narrow.

---
## 7. The future: forecasts kept separate from evidence
Everything here is **forecast or opinion**, not evidence.
- **Dario Amodei (CEO of Anthropic, a vendor), May 2025 Axios interview:** AI could eliminate half of entry-level white-collar jobs and push unemployment to 10-20% within one to five years (S; https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic , read 403; timeframe wording varies by outlet). Critics (S): David Sacks, Mark Cuban. Evidence: weak (prediction by interested party). Contrast Stanford "Canaries" (3.4): descriptive, not causal.
- **Gartner (analyst forecast):** 70% / 15% SOC (5.3).
- **WEF (employer expectations):** 3.3.
- **AI Impacts researcher surveys (S):** https://aiimpacts.org/2022-expert-survey-on-progress-in-ai ; 2022: 738 respondents (17% response rate), 50% chance of "high-level machine intelligence" by 2059. 2023 survey moved earlier (via LessWrong summary, unverified). Question framing shifts medians by decades (2047 vs 2116; single secondary source). Shows deep uncertainty.
- **Forecasting Research Institute panel (S; https://forecastingresearch.substack.com/p/leap-wave-8-ai-timelines):** median forecasts of 3-4 hours for METR's longest 80%-success time horizon by end of 2026. A "seven-month doubling" claim came from a personal site; NOT confirmed on METR's site. Do not cite.
- **Stanford AI Index 2026 (S, aggregator summaries only; official page https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report not opened):** figures such as 88% enterprise adoption unverified.
- The guide should make no prediction of its own: "forecasters disagree, and several are vendors."

---
## 8. Gaps and re-checks before publishing
1. Primary reads not achieved: WEF Future of Jobs (403), Mata order (403), Axios (403), DORA 2025 full figures, Lightcast/Indeed/LinkedIn reports, Gartner and SANS originals, EU Official Journal (Digital Omnibus), NVD/MSRC (EchoLeak), the NEJM AI papers, PNAS paper, FINRA notice, BoE/FCA survey, Samsung original, Stanford AI Index 2026 page.
2. No published company AI policy document read (only CEO memos via news). Candidates: UK Government AI Playbook, ICO guidance.
3. No finance outcome study found; finance is regulatory only.
4. No independent rebuttal retrieved for the Anthropic GTG-1002 report or the Stanford "Canaries" paper.
5. Many 2026-dated items rest on search summaries that conflict across sources; verify each.


## Added 31 October 2026: where AI helps

Pages opened on this date. Abstract only unless stated. Drawn from a focused read, not a systematic review, and chosen to show benefits, so read alongside the limits above.

- Noy and Zhang, Science 2023 (PubMed 37440646): 453 professionals, 40% less time, 18% higher quality.
- Brynjolfsson, Li and Raymond (NBER w31161; QJE 2025): 5,179 agents, +14% average, +34% novices, minimal for experienced.
- Kestin et al. 2025 (PubMed 40537565, via Europe PMC): AI tutor RCT, more learning in less time than active-learning class. No effect sizes in the abstract.
- Dell'Acqua et al. (MIT Sloan summary only; HBS page gave 403): 700+ BCG consultants, nearly +40% inside the frontier, average -19 points outside.
- Peng et al. 2023 (arXiv 2302.06590, abstract and HTML): 55.8% faster, CI 21-89%, 35 completers, worded in the paper as from both groups. GitHub and Microsoft affiliations. No code quality measure.
- Bastani et al., PNAS 2025 (PubMed 40560616, via Europe PMC): +48% and +127% in practice, -17% later for GPT Base, largely mitigated by GPT Tutor.
- Humlum and Vestergaard (NBER w33777, revised March 2026): null effects on earnings and hours, ruling out more than 2%.

Could not be opened: Cui et al. (SSRN and PubPub 403), so not used. arXiv 2311.04235 was the wrong paper for a Security Copilot trial, so that trial is not used.

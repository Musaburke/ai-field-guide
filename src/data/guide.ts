// All guide content. Every claim traces to research/ai-research.md.
// Text supports [label](url) links only. Nothing here is a prediction by this guide.

export const checkedOn = '2026-10-31';
export const checkedOnLabel = '31 October 2026';

export type Read = 'page' | 'partial' | 'snippet';
export type Flag = 'contested' | 'vendor' | 'unresolved';

export interface Claim {
  id: string;
  text: string;
  read: Read;
  strength: string; // as tagged in the research file
  flags?: Flag[];
  note?: string; // caution or limit, shown under the claim
}

export interface Forecast {
  id: string;
  who: string;
  kind: string;
  text: string;
  read: Read;
  caveat: string;
  flags?: Flag[];
}

export interface Section {
  id: string;
  title: string;
  intro: string;
  claims: Claim[];
  habits?: { text: string }[];
  gap?: string;
}

export const readLabel: Record<Read, string> = {
  page: 'Source page read',
  partial: 'Source page partly read',
  snippet: 'Search summary only: re-check at the source',
};

export const flagLabel: Record<Flag, string> = {
  contested: 'Contested',
  vendor: 'Vendor or interested-party source',
  unresolved: 'Unresolved',
};

export const sections: Section[] = [
  {
    id: 'using-ai-well',
    title: 'Using AI well',
    intro:
      'Evidence on whether AI tools make people faster, and what they do to learning. The honest headline is that the measurements are hard and the results are mixed.',
    claims: [
      {
        id: 'metr-2025',
        text: 'In a [randomized trial by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) (published 10 July 2025), 16 experienced open-source developers worked on 246 real issues, with AI tools randomly allowed or not. When AI was allowed, tasks took 19% longer. The developers had expected a 24% speedup and, afterwards, still believed it was about 20%.',
        read: 'page',
        strength: 'Strong for what it measured, weak for generalising',
        flags: ['contested'],
        note: 'The authors list limits: a small sample, one setting, early-2025 tools and possible sampling bias. They say they do not claim AI slows most developers. METR\'s page now carries a notice that the results are out of date.',
      },
      {
        id: 'metr-2026',
        text: 'METR\'s [update of 24 February 2026](https://metr.org/blog/2026-02-24-uplift-update/) used late-2025 data. Returning developers showed about 18% less time with AI and new developers about 4% less, but the confidence intervals include zero. METR calls this "very weak evidence": many developers refused to work without AI or withheld tasks, and self-reported speedups are unreliable. The experiment is being redesigned.',
        read: 'page',
        strength: 'Moderate to weak',
        flags: ['contested'],
        note: 'Its value is showing how hard the measurement is. Secondary blogs report this update in conflicting ways, so this guide uses only METR\'s own page.',
      },
      {
        id: 'anthropic-rct',
        text: 'In an [Anthropic randomized trial](https://www.anthropic.com/research/AI-assistance-coding-skills) (29 January 2026), 52 mostly junior engineers learned the Trio library. Completion time was not significantly different (about 2 minutes faster with AI, p = 0.391). On a later quiz the AI group scored 50% and the no-AI group 67% (p = 0.01), with the largest gap on debugging. Lower scorers delegated code or used AI only to debug; higher scorers (65% and above) asked conceptual or follow-up questions.',
        read: 'page',
        strength: 'Moderate (small RCT)',
        flags: ['vendor'],
        note: 'Anthropic is an AI vendor studying its own product category, although the result is unflattering. The authors say the pattern analysis is correlational, the sample small, comprehension was measured shortly afterwards, and the tool was a chat assistant, not an agentic one.',
      },
      {
        id: 'bastani',
        text: 'A randomised trial of nearly 1,000 high-school maths students in Turkey (Bastani et al., [PNAS vol. 122](https://econpapers.repec.org/RePEc:nas:journl:v:122:y:2025:p:e2422633122); [working paper](https://papers.ssrn.com/abstract=4895486)) reportedly found that unguarded GPT access improved practice scores, but students did 17% worse on later unassisted exams. A guarded tutor version reportedly avoided the penalty.',
        read: 'snippet',
        strength: 'Moderate',
        note: 'Peer-reviewed, but one school, one subject and a 2023 model. Figures come from a search summary and have not been checked on the paper.',
      },
      {
        id: 'so-2025',
        text: 'The [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai) reports that 47.1% of all respondents (50.6% of professionals) use AI tools daily. 45.7% distrust the accuracy of AI output against 32.7% who trust it, and 3.1% highly trust it. The top frustration, at 66%, is "AI solutions that are almost right, but not quite".',
        read: 'page',
        strength: 'Moderate',
        note: 'A large, self-selected, self-reported survey. It measures attitudes, not outcomes. Fieldwork dates are not on the page.',
      },
      {
        id: 'dora-2025',
        text: 'The [DORA 2025 report](https://dora.dev/research/2025/dora-report/) describes AI\'s primary role as "an amplifier, magnifying an organization\'s existing strengths and weaknesses." A [Google blog summary](https://blog.google/technology/developers/dora-report-2025/) reportedly adds that adoption is linked to higher throughput but also to instability unless testing and quality assurance keep pace.',
        read: 'partial',
        strength: 'Moderate',
        note: 'Large survey, correlational, from a Google-run research programme. Only the quoted sentence was confirmed on the page; the throughput and instability point rests on a search summary. Exact numbers are deliberately not given.',
      },
      {
        id: 'econ-index',
        text: 'The [Anthropic Economic Index (15 January 2026)](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report) says computer and maths tasks, mostly coding, are "a third of conversations on Claude.ai and nearly half of 1P API traffic". The Claude.ai share fell from 40% (March 2025) to 34% (November 2025). The report says "none of the measures should be taken as exact or definitive."',
        read: 'page',
        strength: 'Moderate',
        flags: ['vendor'],
        note: 'Data about one vendor\'s users only. It is not a measure of AI use in general.',
      },
    ],
    habits: [
      {
        text: 'Ask for explanations and follow-up questions rather than only handing off the code. In the [Anthropic trial](https://www.anthropic.com/research/AI-assistance-coding-skills), higher quiz scorers worked this way (a correlational pattern in a small study).',
      },
      {
        text: 'Do not trust your own sense of speed. Developers in the [2025 METR trial](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) believed they were faster when they were slower, and METR says [self-reported speedups are unreliable](https://metr.org/blog/2026-02-24-uplift-update/).',
      },
      {
        text: 'Check "almost right" output. It is the most common frustration in the [Stack Overflow survey](https://survey.stackoverflow.co/2025/ai).',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety and responsibility',
    intro:
      'Reference frameworks, official guidance and documented incidents. Frameworks are consensus on risks, not measurements of how often harm happens.',
    claims: [
      {
        id: 'owasp',
        text: 'The [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/) lists: prompt injection; sensitive information disclosure; supply chain; data and model poisoning; improper output handling; excessive agency; system prompt leakage; vector and embedding weaknesses; misinformation; unbounded consumption.',
        read: 'page',
        strength: 'Strong as a community-consensus risk list',
        note: 'It ranks risks by expert judgement. It is not measured incidence.',
      },
      {
        id: 'ncsc-injection',
        text: 'The UK NCSC (8 December 2025) argues that [prompt injection is not SQL injection](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection): language models have no inherent boundary between instructions and data, so prompt injection "may never be totally mitigated". It advises reducing impact through least privilege, deterministic non-LLM safeguards and logging, being wary of products that claim to "stop" it, and accepting that if the risk is intolerable, an LLM may not suit the use case.',
        read: 'page',
        strength: 'Strong as authoritative government technical opinion',
        note: 'Analysis, not an empirical study.',
      },
      {
        id: 'ncsc-guidelines',
        text: 'The [Guidelines for secure AI system development](https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development) (v1.0, 27 November 2023) cover four areas: secure design, development, deployment, and operation and maintenance. They align with NIST\'s secure software development framework and CISA\'s secure-by-design approach.',
        read: 'page',
        strength: 'Strong as guidance',
        note: 'Guidance, not outcome evidence. The page did not list partner agencies, so none are claimed here.',
      },
      {
        id: 'nist-600-1',
        text: 'NIST\'s [Generative AI Profile (AI 600-1)](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), published 26 July 2024, is a "cross-sectoral profile of and companion resource for the AI Risk Management Framework (AI RMF 1.0) for Generative AI", "intended for voluntary use".',
        read: 'partial',
        strength: 'Strong as a reference',
        note: 'Voluntary, not a certification. The page was only partly read, and the current status of the executive order it was issued under was not checked, so nothing is claimed about it.',
      },
      {
        id: 'eu-ai-act',
        text: 'An unofficial [EU AI Act implementation tracker](https://artificialintelligenceact.eu/implementation-timeline/) (last updated 31 August 2026) lists these dates: prohibitions and the AI-literacy duty from 2 February 2025; general-purpose AI obligations from 2 August 2025; Article 50 transparency from 2 August 2026; high-risk Annex III systems from 2 December 2027; Annex I systems from 2 August 2028.',
        read: 'partial',
        strength: 'Moderate until checked against the Official Journal',
        flags: ['unresolved'],
        note: 'Unresolved: sources disagree on whether the "Digital Omnibus" amendment that would delay some dates is in force or still a draft. Do not rely on these dates. Check the EU Official Journal (EUR-Lex). The tracker is not an official source.',
      },
      {
        id: 'samsung',
        text: 'In 2023, Samsung staff reportedly pasted internal source code into ChatGPT, and the company temporarily restricted generative AI on company devices ([TechRadar](https://www.techradar.com/news/samsung-bans-chatgpt-use-after-employee-leak); [CSO Online](https://www.csoonline.com/article/3695170/samsung-bans-staff-ai-use-over-data-leak-concerns.html)).',
        read: 'snippet',
        strength: 'Moderate (consistent press reports)',
        note: 'The original report was not read, and the company memo did not say what code leaked.',
      },
      {
        id: 'echoleak',
        text: 'EchoLeak (CVE-2025-32711) was reported as a zero-click indirect prompt injection flaw in Microsoft 365 Copilot, found by Aim Security, rated CVSS 9.3 and patched, with no evidence of exploitation in the wild ([The Hacker News](https://thehackernews.com/2025/06/zero-click-ai-vulnerability-exposes.html)).',
        read: 'snippet',
        strength: 'Moderate',
        note: 'One aggregator gave a conflicting patch date. Check the National Vulnerability Database or the vendor\'s advisory before relying on details.',
      },
      {
        id: 'bartz',
        text: 'Authors sued Anthropic in Bartz v. Anthropic over pirated books. A ruling in June 2025 reportedly found training itself to be fair use but not the pirated library, and a US$1.5 billion settlement was reportedly given final approval in July 2026 ([Jurist](https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/)).',
        read: 'snippet',
        strength: 'Moderate',
        flags: ['vendor'],
        note: 'Disclosure: the defendant makes Claude, a product this guide also cites as a source. Dates and details vary slightly between sources.',
      },
    ],
    habits: [
      {
        text: 'Keep confidential code and data out of tools you have not been cleared to use. The Samsung case is the documented example of what happens otherwise.',
      },
      {
        text: 'Treat anything an AI agent can read as a way to instruct it. NCSC\'s advice is least privilege, deterministic safeguards that do not depend on the model, and logging ([NCSC](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection)).',
      },
    ],
  },
  {
    id: 'employers',
    title: 'What employers value',
    intro:
      'Public statements and surveys about what employers say they want. These are statements of intent and expectation, not outcomes. No published company acceptable-use policy was read for this guide.',
    claims: [
      {
        id: 'ceo-memos',
        text: 'Two publicly reported CEO memos from 2025 set out expectations. One, from [Shopify](https://www.tomshardware.com/tech-industry/artificial-intelligence/shopify-ceo-teams-must-prove-ai-cant-do-a-task-before-asking-for-new-hires-resources) (April 2025), reportedly made "reflexive AI usage" a baseline expectation, put AI use into performance reviews, and asked teams to show AI cannot do a job before requesting headcount. The other, from [Duolingo](https://www.tomsguide.com/ai/duolingo-wants-to-ditch-contractors-in-favor-of-ai) (28 April 2025), announced an "AI-first" approach.',
        read: 'snippet',
        strength: 'Weak to moderate',
        note: 'The memos themselves were not read; these are press reports of two companies\' stated intent. They are examples, not a representative sample, and are not an endorsement of either company.',
      },
      {
        id: 'job-adverts',
        text: 'Employment-law commentary notes that there is [no shared definition of "AI literacy"](https://www.fisherphillips.com/en/news-insights/what-ai-skills-should-hiring-employers-look-for.html) in hiring. Statistics on how many job adverts mention AI skills exist from several analytics firms, but they vary by method.',
        read: 'snippet',
        strength: 'Weak until primary reports are checked',
        note: 'No primary advert-analysis report was opened, so this guide reproduces no advert percentages.',
      },
      {
        id: 'wef',
        text: 'The [World Economic Forum Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/) is reported to survey about 1,000 employers covering 14 million workers in 22 industries and 55 economies. According to summaries, AI and big data, networks and cybersecurity, and technological literacy are among the fastest-growing skills to 2030, alongside creative thinking, resilience and flexibility.',
        read: 'snippet',
        strength: 'Moderate once verified',
        note: 'The report page could not be read (access refused), so this rests on summaries. These are employer expectations, not outcomes.',
      },
      {
        id: 'canaries',
        text: 'The Stanford Digital Economy Lab paper [Canaries in the Coal Mine](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/) (Brynjolfsson, Chandar and Chen; revised 12 August 2026) uses ADP payroll data to June 2026. It finds employment of 22-to-25-year-olds in AI-exposed occupations "now stands 19% below where it would be had it kept pace with that of their less-exposed peers."',
        read: 'page',
        strength: 'Moderate, descriptive',
        flags: ['contested'],
        note: 'The authors call these "early, descriptive indicators... rather than causal estimates". The effect weakens with education controls and some trends predate generative AI. Earlier versions reported 13% (August 2025), so the number moves between revisions. No rebuttal was retrieved.',
      },
      {
        id: 'mit-pilots',
        text: 'A statistic attributed to an MIT report on the failure rate of generative AI pilots was [widely reported](https://finance.yahoo.com/news/mit-report-95-generative-ai-105412686.html) and has been [criticised](https://neonvagabond.xyz/mirrors/mit-report-lacks-evidence.html) for thin methodology, a narrow definition of "failure" (no measurable profit-and-loss impact within about six months) and an author tie to a related technology.',
        read: 'snippet',
        strength: 'Weak',
        flags: ['contested'],
        note: 'This guide does not use the figure as evidence. It is listed here because readers will meet it.',
      },
    ],
    gap: 'Gap: no primary hiring-report, no company AI policy and no employer survey with raw data was read. Treat this section as a map of claims to check, not a verdict on what employers want.',
  },
  {
    id: 'coding',
    title: 'AI and coding',
    intro:
      'Controlled studies of coding productivity and learning are in the sections above ([METR 2025](#metr-2025), [METR 2026](#metr-2026), [Anthropic trial](#anthropic-rct)), with survey data in [Stack Overflow](#so-2025) and [DORA](#dora-2025). Summarised: one trial found a slowdown for experienced developers on their own mature repositories, later data suggests a smaller or reversed effect but is inconclusive, and a second trial found a learning cost when code was delegated.',
    claims: [
      {
        id: 'veracode',
        text: 'The [Veracode 2025 GenAI Code Security Report](https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/) (30 July 2025) tested 100+ language models on 80 coding tasks built from known weakness types (CWEs). In 45% of cases the models introduced a flaw of an OWASP Top 10 class. Java failed in over 70% of cases, Python, C# and JavaScript between 38% and 45%, cross-site scripting (CWE-80) in 86% and log injection (CWE-117) in 88%. The report says models are "getting better at coding accurately but are not improving at security".',
        read: 'page',
        strength: 'Moderate',
        flags: ['vendor'],
        note: 'Veracode sells code-scanning and fixing tools. This is a synthetic benchmark in which a secure and an insecure option both existed. It does not show that 45% of real AI-written code is vulnerable, although some outlets state it that way.',
      },
    ],
    habits: [
      {
        text: 'Review and test AI-written code like a stranger\'s pull request, especially for injection and input handling, where the [Veracode benchmark](https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/) found the highest failure rates (a vendor study).',
      },
      {
        text: 'DORA\'s finding that AI amplifies existing strengths and weaknesses points to the basics, such as testing, as the thing to have in place first. That is this guide\'s reading of a correlational report, not a tested recommendation.',
      },
    ],
  },
  {
    id: 'cyber',
    title: 'AI and cyber security',
    intro:
      'Two directions: AI used by attackers, and AI as a target. Prompt injection is covered above; the NCSC and OWASP entries are the strongest sources in this guide.',
    claims: [
      {
        id: 'gtg-1002',
        text: 'Anthropic [reported](https://www.anthropic.com/news/disrupting-AI-espionage) (13 November 2025) that a group it assesses "with high confidence" as Chinese state-sponsored used Claude Code against roughly thirty targets and "succeeded in a small number of cases". Anthropic says the AI did "80-90% of the campaign", with humans at about four to six decision points, and that Claude "occasionally hallucinated credentials", "an obstacle to fully autonomous cyberattacks".',
        read: 'page',
        strength: 'Weak to moderate',
        flags: ['vendor'],
        note: 'Vendor self-report, not independently verified. Words such as "first" and the 80-90% figure are Anthropic\'s framing, and Anthropic says it only sees its own product\'s usage. No independent rebuttal was retrieved.',
      },
      {
        id: 'injection-unsolved',
        text: 'Prompt injection is treated as an unsolved problem by both the [NCSC](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection) and [OWASP](https://genai.owasp.org/llm-top-10/) (LLM01). [EchoLeak](#echoleak) is a reported real-world example.',
        read: 'page',
        strength: 'Strong consensus',
      },
    ],
    gap: 'Gap: no independent evaluation of AI in security operations centre (SOC) work was found. The sources located were vendor-heavy or vendor-sponsored, so this guide gives no SOC effectiveness figures. The one SOC forecast found is in the forecasts section below.',
  },
  {
    id: 'other-fields',
    title: 'Other fields',
    intro:
      'Healthcare, law, finance and education, each with its limits. Education evidence is in the sections above ([Anthropic trial](#anthropic-rct), [Bastani et al.](#bastani)).',
    claims: [
      {
        id: 'health',
        text: 'Two trials in NEJM AI (late 2025) tested ambient AI scribes for clinical notes. A UCLA trial (Lukac et al.) of 238 physicians compared two products with usual care and found one reduced time spent on notes, with modest burnout improvements and occasional clinically significant note inaccuracies. A pragmatic trial (Afshar et al.) of 66 practitioners reported work exhaustion down 0.44 on a 5-point scale ([PubMed](https://pubmed.ncbi.nlm.nih.gov/41497288/); [News-Medical summary](https://www.news-medical.net/news/20251126/AI-tools-can-ease-documentation-burden-and-reduce-physician-burnout.aspx)).',
        read: 'snippet',
        strength: 'Moderate, small',
        note: 'Small trials measuring time and burnout, not patient outcomes. Funding and vendor ties were not checked, citation details vary, and the papers were not read.',
      },
      {
        id: 'law-mata',
        text: 'In Mata v. Avianca (S.D.N.Y.), a sanctions order of 22 June 2023 by Judge Castel concerned a lawyer who used ChatGPT and cited fabricated cases ([overview](https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.); [order](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54)).',
        read: 'snippet',
        strength: 'Strong that it happened',
        note: 'The court order itself could not be opened (access refused), so details such as the sanction amount are not given.',
      },
      {
        id: 'law-database',
        text: 'Damien Charlotin\'s [AI Hallucination Cases database](https://www.damiencharlotin.com/hallucinations/) listed "2241 cases identified so far" (updated 29 October 2026): 1,294 involving self-represented litigants, 884 lawyers and 33 judges. By country: USA 1,514, Canada 238, Australia 112, UK 89.',
        read: 'page',
        strength: 'Strong that it happens and is rising; not a rate',
        note: 'It counts court decisions discussing hallucinated content, some only alleged, and "does not track every fake citation". It is curated by one researcher and is not a rate per filing.',
      },
      {
        id: 'finance',
        text: 'A Bank of England and FCA survey (21 November 2024, 118 respondents) reportedly found 75% of firms using AI and a further 10% planning to within three years. The FCA says it has no AI-specific rules and supervises under existing frameworks, and FINRA Regulatory Notice 24-09 (June 2024) says existing supervision and communications rules apply to AI-generated content ([law-firm summary](https://www.regulationtomorrow.com/2026/01/how-are-regulators-and-firms-approaching-ai-this-year/)).',
        read: 'snippet',
        strength: 'Weak to moderate',
        note: 'Regulatory position only: no outcome study for finance was found, no 2025 survey was found, and no primary document was read.',
      },
    ],
  },
];

export const forecasts: Forecast[] = [
  {
    id: 'f-amodei',
    who: 'Dario Amodei, chief executive of Anthropic (an AI vendor)',
    kind: 'Opinion from an interested party',
    text: 'In a [May 2025 Axios interview](https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic), he said AI could eliminate half of entry-level white-collar jobs and push unemployment to 10-20% within one to five years, as reported.',
    read: 'snippet',
    caveat: 'The article could not be read (access refused) and outlets word the timeframe differently. Critics were reported. Compare the descriptive, non-causal data in the [Canaries paper](#canaries).',
    flags: ['vendor'],
  },
  {
    id: 'f-gartner',
    who: 'Gartner analysts Craig Lawson and Andrew Davies',
    kind: 'Analyst forecast',
    text: 'By 2028, 70% of large security operations centres will pilot AI agents for tier 1 and 2 work, but only 15% will see results, as relayed on a [vendor-sponsored page](https://www.helpnetsecurity.com/2026/09/09/prophet-security-evaluating-ai-soc-agents/) (Prophet Security).',
    read: 'snippet',
    caveat: 'The Gartner report is paywalled and was not read. The relaying page is sponsored by a vendor of AI SOC tools.',
    flags: ['vendor'],
  },
  {
    id: 'f-wef',
    who: 'Employers surveyed by the World Economic Forum',
    kind: 'Employer expectations to 2030',
    text: 'The [Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/) records what surveyed employers expect, summarised in the [employers section](#wef).',
    read: 'snippet',
    caveat: 'Expectations, not outcomes. The report page could not be read.',
  },
  {
    id: 'f-aiimpacts',
    who: 'AI Impacts researcher survey (2022)',
    kind: 'Survey of AI researchers',
    text: 'In the [2022 expert survey](https://aiimpacts.org/2022-expert-survey-on-progress-in-ai), 738 respondents (a 17% response rate) gave a 50% chance of "high-level machine intelligence" by 2059.',
    read: 'snippet',
    caveat: 'Reported to shift by decades depending on how the question is framed (single secondary source, unverified). It shows deep uncertainty, not a date.',
  },
  {
    id: 'f-fri',
    who: 'Forecasting Research Institute panel (LEAP wave 8)',
    kind: 'Forecasting panel',
    text: 'Median forecasts of 3 to 4 hours for the longest task length METR measures at 80% success by the end of 2026, per a [Substack post by the institute](https://forecastingresearch.substack.com/p/leap-wave-8-ai-timelines).',
    read: 'snippet',
    caveat: 'Forecast of a benchmark metric, not of jobs or capabilities in general. Not read in full.',
  },
];

export const notUsed: string[] = [
  'A claimed doubling time for AI task length that came from a personal website. It was not confirmed on METR\'s own site, so it is not cited.',
  'The widely shared MIT-linked pilot-failure statistic, as fact. It appears above only as a contested claim.',
  'Figures attributed to the Stanford AI Index 2026 by aggregator sites. The official report page was not opened, so none are reproduced.',
  'Job-advert percentages relayed second-hand from analytics firms, and a 2026 SOC survey figure that traced to a single vendor.',
  'Control counts for NIST AI 600-1 from vendor summaries (they conflict), and an unverified claim about fraud in financial services.',
];

export const notRead: string[] = [
  'World Economic Forum Future of Jobs report, Axios interview and Mata v. Avianca order (access refused).',
  'Lightcast, Indeed and LinkedIn hiring reports; Gartner and SANS originals.',
  'EU Official Journal text on the Digital Omnibus; the National Vulnerability Database entry for EchoLeak.',
  'The NEJM AI papers, the PNAS paper, FINRA Notice 24-09, the Bank of England and FCA survey, and Samsung\'s original memo.',
  'Any company\'s published AI acceptable-use policy. The UK Government AI Playbook and ICO guidance are candidates for a next pass.',
];

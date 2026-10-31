// Display layer over guide.ts. Every line is a shortened restatement of an
// existing claim and keeps its hedge. Nothing here adds a fact. guide.ts stays
// the source: when a claim changes there, change its line here too.

export interface Figure {
  value: string;
  label: string;
  claim: string;
}

// Home mosaic. Each label carries the caveat the figure needs.
export const figures: Figure[] = [
  {
    value: '19% longer',
    label: 'Tasks with AI allowed, in one small 2025 trial of 16 developers. Contested, and now marked out of date.',
    claim: 'metr-2025',
  },
  {
    value: '45%',
    label: 'Of cases in a vendor\'s synthetic benchmark. Not 45% of real AI-written code.',
    claim: 'veracode',
  },
  {
    value: '2241 cases',
    label: 'Court decisions discussing AI-hallucinated content, some only alleged. A count, not a rate.',
    claim: 'law-database',
  },
  {
    value: '50% vs 67%',
    label: 'Later quiz scores, with and without AI, in a small vendor trial of 52 engineers.',
    claim: 'anthropic-rct',
  },
  {
    value: '66%',
    label: 'Top frustration in a self-selected survey: "almost right, but not quite".',
    claim: 'so-2025',
  },
];

export interface Takeaway {
  text: string;
  claim?: string; // absent only when the line restates the section's own gap
}

export const takeaways: Record<string, Takeaway[]> = {
  'using-ai-well': [
    {
      text: 'In METR\'s 2025 trial, 16 experienced developers took 19% longer with AI allowed and afterwards still believed they were about 20% faster. It is one small, contested trial on early-2025 tools.',
      claim: 'metr-2025',
    },
    {
      text: 'METR\'s late-2025 data points to less time with AI, but the confidence intervals include zero and METR says its data is "only very weak evidence" for the size of the increase.',
      claim: 'metr-2026',
    },
    {
      text: 'In a small Anthropic trial, the AI group scored 50% on a later quiz and the no-AI group 67%. Anthropic is an AI vendor.',
      claim: 'anthropic-rct',
    },
    {
      text: 'A trial of nearly 1,000 maths students reportedly found that unguarded GPT access left them 17% worse on later unassisted exams.',
      claim: 'bastani',
    },
  ],
  safety: [
    {
      text: 'The UK NCSC argues prompt injection "may never be totally mitigated", and advises reducing its impact through least privilege, deterministic safeguards and logging.',
      claim: 'ncsc-injection',
    },
    {
      text: 'The OWASP Top 10 for LLM Applications is a community-consensus list ranked by expert judgement. It is not measured incidence.',
      claim: 'owasp',
    },
    {
      text: 'In 2023, Samsung staff reportedly pasted internal source code into ChatGPT, and the company temporarily restricted generative AI on company devices.',
      claim: 'samsung',
    },
    {
      text: 'Do not rely on the EU AI Act dates listed here. Sources disagree on an amendment, so check the EU Official Journal.',
      claim: 'eu-ai-act',
    },
  ],
  employers: [
    {
      text: 'Press reports of two 2025 CEO memos show stated intent, from Shopify\'s "reflexive AI usage" to Duolingo\'s "AI-first" approach. They are examples, not a representative sample.',
      claim: 'ceo-memos',
    },
    {
      text: 'A Stanford paper finds employment of 22-to-25-year-olds in AI-exposed occupations 19% below where it would be had it kept pace with less-exposed peers. Its authors call this descriptive, not causal.',
      claim: 'canaries',
    },
    {
      text: 'According to summaries, the World Economic Forum report lists AI and big data among the fastest-growing skills to 2030. The report page could not be read.',
      claim: 'wef',
    },
    {
      text: 'The MIT-linked pilot-failure statistic has been criticised for thin methodology, and this guide does not use it as evidence.',
      claim: 'mit-pilots',
    },
  ],
  coding: [
    {
      text: 'One trial found a slowdown for experienced developers on their own mature repositories. Later data suggests a smaller or reversed effect but is inconclusive.',
      claim: 'metr-2025',
    },
    {
      text: 'A second trial found a learning cost when code was delegated.',
      claim: 'anthropic-rct',
    },
    {
      text: 'In Veracode\'s synthetic benchmark, models introduced a flaw of an OWASP Top 10 class in 45% of cases. That does not show 45% of real AI-written code is vulnerable, and Veracode sells code-scanning tools.',
      claim: 'veracode',
    },
  ],
  cyber: [
    {
      text: 'Both the NCSC and OWASP treat prompt injection as an unsolved problem.',
      claim: 'injection-unsolved',
    },
    {
      text: 'Anthropic reported that a group it assesses as Chinese state-sponsored used Claude Code against roughly thirty targets. This is a vendor self-report, not independently verified.',
      claim: 'gtg-1002',
    },
    {
      text: 'No independent evaluation of AI in security operations centre work was found, so this guide gives no effectiveness figures for it.',
    },
  ],
  'other-fields': [
    {
      text: 'Two small trials of ambient AI scribes in NEJM AI measured time and burnout, not patient outcomes.',
      claim: 'health',
    },
    {
      text: 'One researcher\'s database listed 2241 court decisions discussing hallucinated content on 29 October 2026, some only alleged. It is not a rate per filing.',
      claim: 'law-database',
    },
    {
      text: 'A 2024 Bank of England and FCA survey reportedly found 75% of firms using AI. No outcome study for finance was found.',
      claim: 'finance',
    },
  ],
};

// Short names for rows and citations.
export const claimLabel: Record<string, string> = {
  'metr-2025': 'METR\'s 2025 randomized trial',
  'metr-2026': 'METR\'s February 2026 update',
  'anthropic-rct': 'Anthropic\'s trial on learning a library',
  bastani: 'Maths students in Turkey (Bastani et al.)',
  'so-2025': 'Stack Overflow Developer Survey 2025',
  'dora-2025': 'DORA 2025 report',
  'econ-index': 'Anthropic Economic Index, January 2026',
  owasp: 'OWASP Top 10 for LLM Applications 2025',
  'ncsc-injection': 'NCSC: prompt injection is not SQL injection',
  'ncsc-guidelines': 'Guidelines for secure AI system development',
  'nist-600-1': 'NIST Generative AI Profile (AI 600-1)',
  'eu-ai-act': 'EU AI Act dates, from an unofficial tracker',
  samsung: 'Samsung staff and ChatGPT, 2023',
  echoleak: 'EchoLeak in Microsoft 365 Copilot',
  bartz: 'Bartz v. Anthropic',
  'ceo-memos': 'Shopify and Duolingo CEO memos',
  'job-adverts': 'AI skills in job adverts',
  wef: 'World Economic Forum Future of Jobs 2025',
  canaries: 'Canaries in the Coal Mine (Stanford)',
  'mit-pilots': 'The MIT-linked pilot-failure statistic',
  veracode: 'Veracode 2025 GenAI Code Security Report',
  'gtg-1002': 'Anthropic\'s report of an AI-driven espionage campaign',
  'injection-unsolved': 'Prompt injection as an unsolved problem',
  health: 'Ambient AI scribes in NEJM AI',
  'law-mata': 'Mata v. Avianca',
  'law-database': 'AI Hallucination Cases database',
  finance: 'Finance: survey and regulators',
  'f-amodei': 'Dario Amodei in Axios, May 2025',
  'f-gartner': 'Gartner on AI agents in SOCs',
  'f-wef': 'WEF employer expectations to 2030',
  'f-aiimpacts': 'AI Impacts researcher survey, 2022',
  'f-fri': 'Forecasting Research Institute, LEAP wave 8',
};

// Dates, only where the claim's own text gives one.
export const claimDate: Record<string, string> = {
  'metr-2025': '10 July 2025',
  'metr-2026': '24 February 2026',
  'anthropic-rct': '29 January 2026',
  'econ-index': '15 January 2026',
  'ncsc-injection': '8 December 2025',
  'ncsc-guidelines': '27 November 2023',
  'nist-600-1': '26 July 2024',
  'eu-ai-act': 'Tracker last updated 31 August 2026',
  samsung: '2023',
  'ceo-memos': 'April 2025',
  canaries: 'Revised 12 August 2026',
  veracode: '30 July 2025',
  'gtg-1002': '13 November 2025',
  health: 'Late 2025',
  'law-mata': '22 June 2023',
  'law-database': 'Updated 29 October 2026',
  finance: '21 November 2024',
  'f-amodei': 'May 2025',
};

// Authored line breaks for chapter titles, two lines at every width.
export const titleLines: Record<string, [string, string?]> = {
  'using-ai-well': ['Using AI', 'well'],
  safety: ['Safety and', 'responsibility'],
  employers: ['What employers', 'value'],
  coding: ['AI and', 'coding'],
  cyber: ['AI and', 'cyber security'],
  'other-fields': ['Other', 'fields'],
};

// Forecasts paired with measured claims, only where the text itself links them.
export const forecastPairs: Record<string, { claim?: string; gapOf?: string }> = {
  'f-amodei': { claim: 'canaries' },
  'f-wef': { claim: 'wef' },
  'f-gartner': { gapOf: 'cyber' },
};

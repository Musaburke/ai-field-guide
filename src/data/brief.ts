// The readable layer over guide.ts. Each entry shortens one claim or forecast and keeps
// its hedge. Nothing here adds a fact. When a claim changes in guide.ts, change it here too.
export interface Bar { label: string; value: number; show: string; strong?: boolean }
export interface Visual { big?: string; label?: string; caption?: string; bars?: Bar[] }
export interface Brief { source: string; title: string; summary: string; catch?: string; visual?: Visual }

export const briefs: Record<string, Brief> = {
  'metr-2025': {
    source: 'METR', title: 'Felt faster, measured slower',
    summary: '16 experienced developers took 19% longer with AI allowed, yet still believed they were about 20% faster.',
    catch: 'Small, one setting, early-2025 tools. METR now marks the results as out of date, and does not claim AI slows most developers.',
    visual: { bars: [
      { label: 'Time without AI', value: 84, show: 'Baseline' },
      { label: 'Time with AI', value: 100, show: '19% longer', strong: true },
    ] },
  },
  'metr-2026': {
    source: 'METR', title: 'A follow-up that could not settle it',
    summary: 'Later data pointed to about 18% less time for returning developers and 4% for new ones, but the confidence intervals include zero.',
    catch: 'METR calls its data "only very weak evidence" for the size of the speedup.',
    visual: { big: 'Inconclusive' },
  },
  'anthropic-rct': {
    source: 'Anthropic', title: 'No clear speed gain, lower scores',
    summary: '52 mostly junior engineers finished in a statistically similar time, but the AI group scored 50% on a later quiz against 67%.',
    catch: 'A small vendor trial, tested shortly afterwards, using a chat assistant.',
    visual: { bars: [
      { label: 'Quiz score, no AI', value: 67, show: '67%', strong: true },
      { label: 'Quiz score, with AI', value: 50, show: '50%' },
    ] },
  },
  bastani: {
    source: 'Bastani et al.', title: 'Better practice, worse exams',
    summary: 'Nearly 1,000 maths students with unguarded GPT reportedly improved in practice, then did 17% worse on later exams without it.',
    catch: 'One school, one subject, a 2023 model. Not checked on the paper.',
    visual: { big: '17% worse', caption: 'Reportedly' },
  },
  'so-2025': {
    source: 'Stack Overflow survey', title: 'Daily use, low trust',
    summary: '47.1% of respondents use AI daily, but 46% distrust its accuracy against 33% who trust it.',
    catch: 'A self-selected survey of attitudes, not outcomes.',
    visual: { bars: [
      { label: 'Distrust accuracy', value: 46, show: '46%', strong: true },
      { label: 'Trust accuracy', value: 33, show: '33%' },
    ] },
  },
  'dora-2025': {
    source: 'DORA', title: 'DORA: AI is an amplifier',
    summary: 'DORA describes AI as "an amplifier" of an organisation\'s existing strengths and weaknesses.',
    catch: 'A correlational survey from a Google-run programme. Only this quote was confirmed.',
    visual: { big: 'An amplifier' },
  },
  'econ-index': {
    source: 'Anthropic Economic Index', title: 'Where Claude gets used',
    summary: 'Computer and maths tasks, mostly coding, are about a third of conversations on Claude.ai.',
    catch: 'One vendor\'s users only, and it says no measure is exact.',
    visual: { big: 'A third' },
  },
  owasp: {
    source: 'OWASP', title: 'A community list of AI risks',
    summary: 'A community list of ten risks, including prompt injection, data disclosure and excessive agency.',
    catch: 'Ranked by expert judgement, not measured incidents.',
    visual: { big: '10 risks' },
  },
  'ncsc-injection': {
    source: 'UK NCSC', title: 'Plan to contain prompt injection',
    summary: 'The NCSC says it "may never be totally mitigated", so reduce the damage it can do.',
    catch: 'Expert analysis, not an empirical study.',
    visual: { label: '"May never be totally mitigated"' },
  },
  'ncsc-guidelines': {
    source: 'Secure AI guidelines', title: 'Security from design to upkeep',
    summary: 'The guidelines cover four areas: secure design, development, deployment, and operation and maintenance.',
    catch: 'Guidance, not evidence of outcomes.',
    visual: { big: '4 areas' },
  },
  'nist-600-1': {
    source: 'NIST', title: 'A voluntary risk companion',
    summary: 'NIST\'s profile is a companion to its AI Risk Management Framework, intended for voluntary use.',
    catch: 'Not a certification, and the page was only partly read.',
    visual: { big: 'Voluntary' },
  },
  'eu-ai-act': {
    source: 'Unofficial EU AI Act tracker', title: 'EU dates: check before trusting',
    summary: 'An unofficial tracker lists phased duties from February 2025 to August 2028.',
    catch: 'Sources disagree on a possible delay. Check the EU Official Journal.',
    visual: { label: 'Check the Official Journal' },
  },
  samsung: {
    source: 'Press reports', title: 'Code reportedly pasted into ChatGPT',
    summary: 'Samsung staff reportedly pasted internal code into ChatGPT, and the company temporarily restricted generative AI.',
    catch: 'Press reports. The original report was not read.',
    visual: { label: 'Temporarily restricted' },
  },
  echoleak: {
    source: 'The Hacker News', title: 'A reported zero-click Copilot flaw',
    summary: 'EchoLeak was reported as a prompt injection flaw in Microsoft 365 Copilot, patched, with no evidence of exploitation in the wild.',
    catch: 'One source gave a conflicting patch date.',
    visual: { big: 'CVSS 9.3', caption: 'As reported' },
  },
  bartz: {
    source: 'Bartz v. Anthropic', title: 'A reported US$1.5bn settlement',
    summary: 'A ruling reportedly found training itself to be fair use, but not the pirated library, and a settlement was reportedly approved.',
    catch: 'Details vary. The defendant makes Claude, which this guide also cites.',
    visual: { big: 'US$1.5bn', caption: 'As reported' },
  },
  'ceo-memos': {
    source: 'Press reports', title: 'Two CEOs set AI expectations',
    summary: 'Shopify reportedly made "reflexive AI usage" a baseline, and Duolingo announced an "AI-first" approach.',
    catch: 'Two companies\' stated intent, not a representative sample.',
    visual: { label: '"Reflexive AI usage"' },
  },
  'job-adverts': {
    source: 'Employment-law commentary', title: 'No agreed meaning of AI literacy',
    summary: 'Commentary notes hiring has no shared definition, and job-advert statistics vary by method.',
    catch: 'No primary report was opened, so no percentages are given.',
    visual: { label: 'No shared definition' },
  },
  wef: {
    source: 'World Economic Forum', title: 'Employers expect AI skills to grow',
    summary: 'According to summaries, AI and big data are among the fastest-growing skills to 2030, in a survey of about 1,000 employers.',
    catch: 'Employer expectations. The report page could not be read.',
    visual: { big: '~1,000', caption: 'Employers surveyed, according to summaries' },
  },
  canaries: {
    source: 'Stanford Digital Economy Lab', title: 'Young workers lag in exposed jobs',
    summary: 'Employment of 22-to-25-year-olds in AI-exposed jobs is 19% below where it would be had it kept pace with less-exposed peers.',
    catch: 'The authors call it descriptive, not causal, and the number can move between revisions.',
    visual: { big: '19% below', caption: 'Against less-exposed peers' },
  },
  'mit-pilots': {
    source: 'Press reports', title: 'A popular statistic to be wary of',
    summary: 'A widely reported MIT-linked figure on AI pilot failure has been criticised for thin methodology.',
    catch: 'Listed because you will meet it. Not used as evidence here.',
    visual: { label: 'Not used as evidence' },
  },
  veracode: {
    source: 'Veracode', title: 'Insecure code in a vendor test',
    summary: 'Models introduced a flaw of an OWASP Top 10 class in 45% of cases in a synthetic benchmark.',
    catch: 'Veracode sells code-scanning tools. This does not show 45% of real AI code is vulnerable.',
    visual: { big: '45%' },
  },
  'gtg-1002': {
    source: 'Anthropic', title: 'A reported AI-driven espionage case',
    summary: 'Anthropic reports that a group it assesses as Chinese state-sponsored used Claude Code against roughly thirty targets and succeeded in a small number of cases.',
    catch: 'A vendor self-report, not independently verified.',
    visual: { big: '~30 targets', caption: 'Anthropic says it succeeded in a small number of cases' },
  },
  'injection-unsolved': {
    source: 'NCSC and OWASP', title: 'Prompt injection remains unsolved',
    summary: 'Both the NCSC and OWASP treat prompt injection as an unsolved problem.',
    visual: { big: 'Unsolved' },
  },
  health: {
    source: 'NEJM AI', title: 'AI scribes and clinical notes',
    summary: 'Across two small trials, one product cut time on notes and burnout measures improved, with occasional clinically significant note inaccuracies.',
    catch: 'Patient outcomes were not measured, and the papers were not read.',
    visual: { label: 'Time and burnout, not patient outcomes' },
  },
  'law-mata': {
    source: 'Mata v. Avianca', title: 'Fake cases, real sanctions',
    summary: 'A 2023 sanctions order concerned a lawyer who used ChatGPT and cited fabricated cases.',
    catch: 'The court order itself could not be opened.',
    visual: { label: 'Fabricated cases' },
  },
  'law-database': {
    source: 'AI Hallucination Cases database', title: 'AI-invented citations in court',
    summary: 'One researcher\'s database lists 2241 court decisions discussing hallucinated content.',
    catch: 'Some are only alleged, and it is not a rate per filing.',
    visual: { big: '2241 cases' },
  },
  finance: {
    source: 'Bank of England and FCA', title: 'Reported AI use, existing rules',
    summary: 'A 2024 survey with 118 respondents reportedly found 75% of firms using AI, and the FCA reportedly says it has no AI-specific rules.',
    catch: 'No outcome study was found, and no primary document was read.',
    visual: { big: '75%', caption: 'Of firms, as reportedly surveyed in 2024' },
  },
  'f-amodei': {
    source: 'Dario Amodei, Anthropic', title: 'Half of entry-level jobs could go',
    summary: 'He said AI could eliminate half of entry-level white-collar jobs within one to five years, as reported. Outlets word the timeframe differently.',
    catch: 'Anthropic sells AI, and the article could not be read.',
  },
  'f-gartner': {
    source: 'Gartner analysts', title: 'Many AI pilots, few results by 2028',
    summary: 'By 2028, 70% of large security operations centres will pilot AI agents, but only 15% will see results, as relayed.',
    catch: 'Relayed by a vendor-sponsored page. The report was not read.',
  },
  'f-wef': {
    source: 'World Economic Forum', title: 'What employers expect by 2030',
    summary: 'The report records what surveyed employers expect to happen to skills.',
    catch: 'Expectations, not outcomes. The report page could not be read.',
  },
  'f-aiimpacts': {
    source: 'AI Impacts survey, 2022', title: 'A 2022 survey on AI timelines',
    summary: 'Researchers gave a 50% chance of "high-level machine intelligence" by 2059.',
    catch: 'A 17% response rate, and the date reportedly shifts by decades with the question.',
  },
  'f-fri': {
    source: 'Forecasting Research Institute', title: 'A benchmark forecast for 2026',
    summary: 'The median forecast is 3 to 4 hours for the longest task METR measures at 80% success by the end of 2026.',
    catch: 'A forecast of a benchmark, not of jobs. Not read in full.',
  },
};

// One honest line per chapter, shown as its opening.
export const verdicts: Record<string, string> = {
  'using-ai-well': 'One trial measured a slowdown and two reported a learning cost. Later speed data is inconclusive.',
  safety: 'The UK NCSC says prompt injection may never be fully fixed, so limit what AI tools can reach.',
  employers: 'Some employers say they expect AI skills, but what is public here is stated intent, not results.',
  coding: 'The speed evidence is mixed, and one vendor\'s benchmark is a reason to review AI-written code.',
  cyber: 'One vendor reports a state-linked group using AI in attacks, AI tools are targets themselves, and independent evidence is thin.',
  'other-fields': 'AI is in use across these fields, with documented mistakes and few studies of real outcomes.',
};

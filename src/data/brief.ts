// The readable layer over guide.ts. Each entry shortens one claim or forecast and keeps
// its hedge. Nothing here adds a fact. When a claim changes in guide.ts, change it here too.
export interface Bar { label: string; value: number; show: string; strong?: boolean }
export interface Visual { big?: string; label?: string; caption?: string; bars?: Bar[] }
export interface Brief { source: string; title: string; summary: string; catch?: string; visual?: Visual }

export const briefs: Record<string, Brief> = {
  'prompting': {
    source: 'Anthropic prompting guide', title: 'Clear prompts get better results',
    summary: 'Be explicit about what you want and give examples. If a colleague would be confused by your prompt, the model will be too.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-models': {
    source: 'Claude Code docs', title: 'Match the model to the task',
    summary: 'Haiku is for simple tasks, Sonnet for daily coding, Opus for complex reasoning and Fable for the hardest, longest work.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-usage': {
    source: 'Claude Code docs', title: '/usage shows your session and your plan',
    summary: 'On a paid plan, /usage shows what counts against your limits. For subscribers the session cost figure is not a bill.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-statusline': {
    source: 'Claude Code docs', title: 'A status line can show your limits',
    summary: 'Subscribers get a five-hour and a weekly window, each with a percentage used and a reset time.',
    catch: 'Official documentation from the toolmaker, read through excerpts.',
  },
  'cc-retention': {
    source: 'Claude Code docs', title: 'Transcripts are deleted after 30 days',
    summary: 'cleanupPeriodDays sets how long transcripts are kept. The default is 30, and deletion happens without a message.',
    catch: 'Official documentation from the toolmaker, read through excerpts.',
  },
  'cc-imports': {
    source: 'Claude Code docs', title: 'CLAUDE.md can pull in other files',
    summary: 'An @path line in CLAUDE.md loads that file too, and ~/.claude/CLAUDE.md applies to every project.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'refero': {
    source: 'Refero Styles', title: 'Design systems an AI can read',
    summary: 'Over 2,000 design systems from product websites, each with a DESIGN.md for AI coding tools.',
    catch: 'The site describing itself. Pricing and terms not checked.',
  },
  'cc-costs': {
    source: 'Claude Code docs', title: 'Long conversations cost more',
    summary: 'Token costs grow with context size, so clear the conversation when you switch to unrelated work.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-plan': {
    source: 'Claude Code docs', title: 'Plan mode explores without editing',
    summary: 'In plan mode Claude reads and explores but does not edit your source files. Press Shift+Tab to reach it.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-best': {
    source: 'Claude Code docs', title: 'Give it a pass or fail check',
    summary: 'Give the tool something it can run that passes or fails, and ask for evidence such as the output or a screenshot.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-skills': {
    source: 'Claude Code docs', title: 'Skills load only when used',
    summary: 'A skill is a saved set of instructions, so long reference material costs almost nothing until needed.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-memory': {
    source: 'Claude Code docs', title: 'Keep CLAUDE.md under 200 lines',
    summary: 'Claude reads it at the start of every session, as context rather than enforced rules.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-subagents': {
    source: 'Claude Code docs', title: 'Subagents add parallelism, not smarts',
    summary: 'Each sends its own requests against the same limits. By default you get parallel work or a fresh reviewer, but not a smarter answer.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-permissions': {
    source: 'Claude Code docs', title: 'Permission rules are not up to the model',
    summary: 'Claude Code enforces permission rules itself. The docs say to use bypass mode only in isolated environments.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'cc-mcp': {
    source: 'Claude Code docs', title: 'Only connect servers you trust',
    summary: 'MCP links Claude Code to other tools and data, and servers that fetch outside content can expose you to prompt injection.',
    catch: 'Official documentation from the toolmaker, not a measured result.',
  },
  'gov-playbook': {
    source: 'UK Government AI Playbook', title: 'Keep humans on high-risk decisions',
    summary: 'UK government guidance says AI is not guaranteed to be accurate, privacy risk should be minimised from the start, and humans should validate high-risk decisions.',
    catch: 'Guidance for government work, not a study.',
  },
  'security-copilot': {
    source: 'Bono and Xu, Microsoft', title: 'Copilot made IT admin tasks more accurate',
    summary: '181 people doing IT admin tasks in a simulated lab were 34.53% more accurate with Security Copilot and took 29.79% less time overall.',
    catch: 'Microsoft staff testing a Microsoft product, in a lab. Multiple-choice questions took longer with it.',
    visual: { big: '34.53%', caption: 'More accurate, in a vendor-run lab trial' },
  },
  'noy-zhang': {
    source: 'Noy and Zhang, Science', title: 'ChatGPT cut writing time by 40%',
    summary: '453 professionals doing writing tasks in their own field took 40% less time with ChatGPT, and quality rose by 18%.',
    catch: 'Set tasks in an online experiment, with an early model. Only the abstract was read.',
    visual: { big: '40% less time', caption: 'And 18% higher quality' },
  },
  brynjolfsson: {
    source: 'Brynjolfsson, Li and Raymond', title: 'Novices gained most from AI help',
    summary: 'An AI assistant raised issues resolved per hour by 14% across 5,179 support agents, and by 34% for novices, with minimal change for experts.',
    catch: 'One kind of work. Only the abstract page was read.',
    visual: { bars: [
      { label: 'Novice agents', value: 34, show: '+34%', strong: true },
      { label: 'All agents', value: 14, show: '+14%' },
    ] },
  },
  kestin: {
    source: 'Kestin et al.', title: 'An AI tutor beat an active class',
    summary: 'In a randomised trial, college students learned significantly more in less time with a custom AI tutor than in an in-class active learning lesson.',
    catch: 'A purpose-built tutor, not a general chatbot. Only the abstract was read.',
  },
  dellacqua: {
    source: 'Dell\'Acqua et al., via MIT Sloan', title: 'Great inside its limits, harmful outside',
    summary: 'Across more than 700 consultants, GPT-4 improved performance by nearly 40% on tasks it could do, and cut it by an average of 19 points on a task it could not.',
    catch: 'From MIT Sloan\'s summary, because the paper could not be opened.',
    visual: { big: 'Nearly +40%', caption: 'On tasks it could do, and an average of 19 points lower on one it could not' },
  },
  humlum: {
    source: 'Humlum and Vestergaard, NBER', title: 'No earnings effect yet in Denmark',
    summary: 'Danish labour records show no measurable effect on earnings or hours, ruling out more than 2% two years after ChatGPT launched, though workers report benefits.',
    catch: 'One country, early period. Only the abstract page was read.',
  },
  peng: {
    source: 'Peng et al., with GitHub staff', title: 'Copilot users finished 55.8% faster',
    summary: 'Programmers with GitHub Copilot finished one JavaScript server task 55.8% faster than a control group.',
    catch: 'Authors include GitHub and Microsoft staff, it is one task, and code quality was not studied.',
    visual: { big: '55.8% faster', caption: 'On one task' },
  },
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
    source: 'METR', title: 'Later speed gains remain unproven',
    summary: 'Later data pointed to about 18% less time for returning developers and 4% for new ones, but the confidence intervals include zero.',
    catch: 'METR calls its data "only very weak evidence" for the size of the speedup.',
  },
  'anthropic-rct': {
    source: 'Anthropic', title: 'AI learners scored lower on a quiz',
    summary: '52 mostly junior engineers finished in a statistically similar time, but the AI group scored 50% on a later quiz against 67%.',
    catch: 'A small vendor trial, tested shortly afterwards, using a chat assistant.',
    visual: { bars: [
      { label: 'Quiz score, no AI', value: 67, show: '67%', strong: true },
      { label: 'Quiz score, with AI', value: 50, show: '50%' },
    ] },
  },
  bastani: {
    source: 'Bastani et al., PNAS', title: 'Better in practice, worse in exams',
    summary: 'Nearly 1,000 maths students with plain GPT-4 scored 48% higher in practice, then 17% lower on later exams without it. A tutor version built to protect learning largely avoided the drop.',
    catch: 'One study, and only the abstract was read.',
    visual: { big: '17% worse', caption: 'On later exams without AI' },
  },
  'so-2025': {
    source: 'Stack Overflow survey', title: 'Many use it daily, fewer trust it',
    summary: '47.1% of respondents use AI daily, but 46% distrust its accuracy against 33% who trust it.',
    catch: 'A self-selected survey of attitudes, not outcomes.',
    visual: { bars: [
      { label: 'Distrust accuracy', value: 46, show: '46%', strong: true },
      { label: 'Trust accuracy', value: 33, show: '33%' },
    ] },
  },
  'dora-2025': {
    source: 'DORA', title: 'AI amplifies strengths and weaknesses',
    summary: 'DORA describes AI as "an amplifier" of an organisation\'s existing strengths and weaknesses.',
    catch: 'A correlational survey from a Google-run programme. Only this quote was confirmed.',
  },
  'econ-index': {
    source: 'Anthropic Economic Index', title: 'Coding leads Claude use',
    summary: 'Computer and maths tasks, mostly coding, are about a third of conversations on Claude.ai.',
    catch: 'One vendor\'s users only, and it says no measure is exact.',
    visual: { big: 'A third' },
  },
  owasp: {
    source: 'OWASP', title: 'Ten AI risks to know',
    summary: 'A community list of ten risks, including prompt injection, data disclosure and excessive agency.',
    catch: 'Ranked by expert judgement, not measured incidents.',
    visual: { big: '10 risks' },
  },
  'ncsc-injection': {
    source: 'UK NCSC', title: 'Prompt injection may never fully go away',
    summary: 'The NCSC says it "may never be totally mitigated", so reduce the damage it can do.',
    catch: 'Expert analysis, not an empirical study.',
  },
  'ncsc-guidelines': {
    source: 'Secure AI guidelines', title: 'Build security in from the start',
    summary: 'The guidelines cover four areas: secure design, development, deployment, and operation and maintenance.',
    catch: 'Guidance, not evidence of outcomes.',
  },
  'nist-600-1': {
    source: 'NIST', title: 'A voluntary guide to AI risk',
    summary: 'NIST\'s profile is a companion to its AI Risk Management Framework, intended for voluntary use.',
    catch: 'Not a certification, and the page was only partly read.',
  },
  'eu-ai-act': {
    source: 'Unofficial EU AI Act tracker', title: 'EU AI rules phase in, dates unsettled',
    summary: 'An unofficial tracker lists phased duties from February 2025 to August 2028.',
    catch: 'Sources disagree on a possible delay. Check the EU Official Journal.',
  },
  samsung: {
    source: 'Press reports', title: 'Staff reportedly pasted code into ChatGPT',
    summary: 'Samsung staff reportedly pasted internal code into ChatGPT, and the company temporarily restricted generative AI.',
    catch: 'Press reports. The original report was not read.',
  },
  echoleak: {
    source: 'The Hacker News', title: 'Reported Copilot flaw needed no clicks',
    summary: 'EchoLeak was reported as a prompt injection flaw in Microsoft 365 Copilot, patched, with no evidence of exploitation in the wild.',
    catch: 'One source gave a conflicting patch date.',
    visual: { big: 'CVSS 9.3', caption: 'As reported' },
  },
  bartz: {
    source: 'Bartz v. Anthropic', title: 'Reported US$1.5bn settlement over pirated books',
    summary: 'A ruling reportedly found training itself to be fair use, but not the pirated library, and a settlement was reportedly approved.',
    catch: 'Details vary. The defendant makes Claude, which this guide also cites.',
    visual: { big: 'US$1.5bn', caption: 'As reported' },
  },
  'ceo-memos': {
    source: 'Press reports', title: 'Two CEOs set AI expectations',
    summary: 'Shopify reportedly made "reflexive AI usage" a baseline, and Duolingo announced an "AI-first" approach.',
    catch: 'Two companies\' stated intent, not a representative sample.',
  },
  'job-adverts': {
    source: 'Employment-law commentary', title: 'No shared definition of AI literacy',
    summary: 'Commentary notes hiring has no shared definition, and job-advert statistics vary by method.',
    catch: 'No primary report was opened, so no percentages are given.',
  },
  wef: {
    source: 'World Economic Forum', title: 'Employers expect AI skills to grow',
    summary: 'According to summaries, AI and big data are among the fastest-growing skills to 2030, in a survey of about 1,000 employers.',
    catch: 'Employer expectations. The report page could not be read.',
    visual: { big: '~1,000', caption: 'Employers surveyed, according to summaries' },
  },
  canaries: {
    source: 'Stanford Digital Economy Lab', title: 'Young workers lag in AI-exposed jobs',
    summary: 'Employment of 22-to-25-year-olds in AI-exposed jobs is 19% below where it would be had it kept pace with less-exposed peers.',
    catch: 'The authors call it descriptive, not causal, and the number can move between revisions.',
    visual: { big: '19% below', caption: 'Against less-exposed peers' },
  },
  'mit-pilots': {
    source: 'Press reports', title: 'A viral AI failure figure is shaky',
    summary: 'A widely reported MIT-linked figure on AI pilot failure has been criticised for thin methodology.',
    catch: 'Listed because you will meet it. Not used as evidence here.',
  },
  veracode: {
    source: 'Veracode', title: 'Models added flaws in 45% of tests',
    summary: 'Models introduced a flaw of an OWASP Top 10 class in 45% of cases in a synthetic benchmark.',
    catch: 'Veracode sells code-scanning tools. This does not show 45% of real AI code is vulnerable.',
    visual: { big: '45%' },
  },
  'gtg-1002': {
    source: 'Anthropic', title: 'Anthropic reports AI-driven espionage',
    summary: 'Anthropic reports that a group it assesses as Chinese state-sponsored used Claude Code against roughly thirty targets and succeeded in a small number of cases.',
    catch: 'A vendor self-report, not independently verified.',
    visual: { big: '~30 targets', caption: 'Anthropic says it succeeded in a small number of cases' },
  },
  'injection-unsolved': {
    source: 'NCSC and OWASP', title: 'Prompt injection remains unsolved',
    summary: 'Both the NCSC and OWASP treat prompt injection as an unsolved problem.',
  },
  health: {
    source: 'NEJM AI', title: 'AI scribes can cut note time',
    summary: 'Across two small trials, one product cut time on notes and burnout measures improved, with occasional clinically significant note inaccuracies.',
    catch: 'Patient outcomes were not measured, and the papers were not read.',
  },
  'law-mata': {
    source: 'Mata v. Avianca', title: 'Fake cases, real sanctions',
    summary: 'A 2023 sanctions order concerned a lawyer who used ChatGPT and cited fabricated cases.',
    catch: 'The court order itself could not be opened.',
  },
  'law-database': {
    source: 'AI Hallucination Cases database', title: '2,241 court decisions discuss AI fakes',
    summary: 'One researcher\'s database lists 2,241 court decisions discussing hallucinated content.',
    catch: 'Some are only alleged, and it is not a rate per filing.',
    visual: { big: '2,241' },
  },
  finance: {
    source: 'Bank of England and FCA', title: 'Most surveyed firms reportedly use AI',
    summary: 'A 2024 survey with 118 respondents reportedly found 75% of firms using AI, and the FCA reportedly says it has no AI-specific rules.',
    catch: 'No outcome study was found, and no primary document was read.',
    visual: { big: '75%', caption: 'Of firms, as reportedly surveyed in 2024' },
  },
  'f-amodei': {
    source: 'Dario Amodei, Anthropic', title: 'CEO warns half of entry jobs could go',
    summary: 'He said AI could eliminate half of entry-level white-collar jobs within one to five years, as reported. Outlets word the timeframe differently.',
    catch: 'Anthropic sells AI, and the article could not be read.',
  },
  'f-gartner': {
    source: 'Gartner analysts', title: 'Few AI SOC pilots expected to pay off',
    summary: 'By 2028, 70% of large security operations centres will pilot AI agents, but only 15% will see results, as relayed.',
    catch: 'Relayed by a vendor-sponsored page. The report was not read.',
  },
  'f-wef': {
    source: 'World Economic Forum', title: 'Employers\' skill expectations to 2030',
    summary: 'The report records what surveyed employers expect to happen to skills.',
    catch: 'Expectations, not outcomes. The report page could not be read.',
  },
  'f-aiimpacts': {
    source: 'AI Impacts survey, 2022', title: 'Researchers put 50% odds on 2059',
    summary: 'Researchers gave a 50% chance of "high-level machine intelligence" by 2059.',
    catch: 'A 17% response rate, and the date reportedly shifts by decades with the question.',
  },
  'f-fri': {
    source: 'Forecasting Research Institute', title: 'Forecasters expect 3-4 hour AI tasks',
    summary: 'The median forecast is 3 to 4 hours for the longest task METR measures at 80% success by the end of 2026.',
    catch: 'A forecast of a benchmark, not of jobs. Not read in full.',
  },
};

// One honest line per chapter, shown as its opening.
export const verdicts: Record<string, string> = {
  'using-ai-well': 'Get real work done faster, and keep learning while you do it.',
  'set-up-your-tools': 'Pick the right model, plan first and keep your usage under control.',
  usage: 'Know what you have left, spend it on the work that needs it, and read the numbers right.',
  'second-brain': 'Write down what you learn once, so every new chat can start from it.',
  safety: 'Get the benefits without giving away data or access you cannot get back.',
  employers: 'Show what you can do with AI, and be honest about how you checked it.',
  coding: 'Build faster, understand what you build, and review all of it.',
  'build-sites': 'Show it real sites you like, then judge every version with your own eyes.',
  cyber: 'Use AI to learn and defend, and only test what you have permission to test.',
  'other-fields': 'Find where AI helps in your work, and the checks your field still requires.',
};

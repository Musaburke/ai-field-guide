// All guide content. Every claim traces to research/ai-research.md.
// Text supports [label](url) links only. Nothing here is a prediction by this guide.

export const checkedOn = '2026-11-01';
export const checkedOnLabel = '1 November 2026';

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
    title: 'Get good at AI',
    intro:
      'Get real work done faster with AI and keep learning while you do it, with practical steps and the evidence behind them.',
    claims: [
      {
        id: 'noy-zhang',
        text: 'In a preregistered online experiment [published in Science](https://pubmed.ncbi.nlm.nih.gov/37440646/) (Noy and Zhang, July 2023), 453 college-educated professionals did occupation-specific writing tasks, and half were randomly given ChatGPT. "The average time taken decreased by 40% and output quality rose by 18%." Inequality between workers decreased.',
        read: 'partial',
        strength: 'Strong for what it measured',
        note: 'Only the abstract was read. These were set tasks in an experiment, with an early version of ChatGPT, so real jobs may differ.',
      },
      {
        id: 'brynjolfsson',
        text: 'A study of [5,179 customer support agents](https://www.nber.org/papers/w31161) (Brynjolfsson, Li and Raymond; published in the Quarterly Journal of Economics, 2025) found an AI assistant raised issues resolved per hour by 14% on average, "including a 34% improvement for novice and low-skilled workers but with minimal impact on experienced and highly skilled workers."',
        read: 'partial',
        strength: 'Strong for this setting',
        note: 'Only the abstract page was read. It covers one kind of work, and the tool was introduced in stages rather than in a lab trial.',
      },
      {
        id: 'kestin',
        text: 'In a randomised trial at college level ([Kestin et al., 2025](https://pubmed.ncbi.nlm.nih.gov/40537565/); [full article](https://www.nature.com/articles/s41598-025-97652-6)), students "learn significantly more in less time" with an AI tutor than in an in-class active learning lesson, and felt more engaged and motivated. The tutor was custom-built on the same teaching practices as the class.',
        read: 'partial',
        strength: 'Moderate',
        note: 'Only the abstract was read, so effect sizes and sample size are not given here. This was a purpose-built tutor, not a general chatbot.',
      },
      {
        id: 'dellacqua',
        text: 'A study with [more than 700 Boston Consulting Group consultants](https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-can-boost-highly-skilled-workers-productivity) (Dell\'Acqua et al.), as summarised by MIT Sloan, found GPT-4 could improve performance by nearly 40% on tasks within its abilities. On a task outside them, performance dropped by an average of 19 percentage points.',
        read: 'partial',
        strength: 'Moderate until the paper is read',
        note: 'This rests on MIT Sloan\'s summary because the paper\'s page refused access. The summary\'s 19-point average is not reconciled with its separate 13 and 24 point figures.',
      },
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
        text: 'METR\'s [update of 24 February 2026](https://metr.org/blog/2026-02-24-uplift-update/) used late-2025 data. Returning developers showed about 18% less time with AI and new developers about 4% less, but the confidence intervals include zero. METR says its data is "only very weak evidence" for the size of the increase: many developers refused to work without AI or withheld tasks, and self-reported speedups are unreliable. The experiment is being redesigned.',
        read: 'page',
        strength: 'Moderate to weak',
        flags: ['contested'],
        note: 'Its value is showing how hard the measurement is. Secondary blogs report this update in conflicting ways, so this guide uses only METR\'s own page.',
      },
      {
        id: 'anthropic-rct',
        text: 'In an [Anthropic randomized trial](https://www.anthropic.com/research/AI-assistance-coding-skills) (29 January 2026), 52 mostly junior engineers learned the Trio library. Completion time was not significantly different (about 2 minutes faster with AI, p = 0.391). On a later quiz the AI group scored 50% and the no-AI group 67% (p = 0.01), with the largest gap on debugging. Lower-scoring usage patterns delegated code or used AI only to debug; patterns averaging 65% or higher asked conceptual or follow-up questions.',
        read: 'page',
        strength: 'Moderate (small RCT)',
        flags: ['vendor'],
        note: 'Anthropic is an AI vendor studying its own product category, although the result is unflattering. The authors say the pattern analysis is correlational, the sample small, comprehension was measured shortly afterwards, and the tool was a chat assistant, not an agentic one.',
      },
      {
        id: 'bastani',
        text: 'A field experiment with nearly 1,000 high-school maths students (Bastani et al., [PNAS abstract](https://pubmed.ncbi.nlm.nih.gov/40560616/); [working paper](https://papers.ssrn.com/abstract=4895486)) found GPT-4 access raised practice grades by 48% with a standard chat interface and 127% with a tutor version built to safeguard learning. When access was removed, the standard group did 17% worse than students who never had it. The authors say the safeguards largely mitigated this.',
        read: 'partial',
        strength: 'Moderate',
        note: 'The abstract was read, not the full paper. Peer-reviewed. That it was one school in Turkey comes from search summaries.',
      },
      {
        id: 'so-2025',
        text: 'The [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai) reports that 47.1% of all respondents (50.6% of professionals) use AI tools daily. 46% distrust the accuracy of AI output against 33% who trust it, and 3.1% highly trust it. The top frustration, at 66%, is "AI solutions that are almost right, but not quite".',
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
      {
        id: 'dunlosky',
        text: 'A review of ten study techniques ([Dunlosky et al., 2013](https://europepmc.org/article/MED/26173288)) says "Practice testing and distributed practice received high utility assessments because they benefit learners of different ages and abilities". Self-explanation, elaborative interrogation and interleaved practice were rated moderate. "Five techniques received a low utility assessment: summarization, highlighting, the keyword mnemonic, imagery use for text learning, and rereading."',
        read: 'partial',
        strength: 'Strong (a large review of studies)',
        note: 'Only the abstract was read. The review predates AI chatbots, so it says nothing about AI directly. This guide applies it to AI: being quizzed is practice testing, while reading an AI summary is closer to rereading.',
      },
      {
        id: 'roediger',
        text: 'In [Roediger and Karpicke (2006)](https://europepmc.org/article/MED/16507066), students either took recall tests or restudied the material. On a final test 5 minutes later, "repeated studying improved recall". On tests 2 days and 1 week later, "prior testing produced substantially greater retention than studying, even though repeated studying increased students\' confidence". The authors conclude: "Testing is a powerful means of improving learning, not just assessing it."',
        read: 'partial',
        strength: 'Strong (a classic, often repeated finding)',
        note: 'Only the abstract was read. These were short prose passages in a lab, not a whole course.',
      },
      {
        id: 'lehmann',
        text: 'In two lab experiments and a field study in university programming courses ([Lehmann, Cornelius and Sting](https://arxiv.org/abs/2409.09047), revised March 2025), students who "substitute some of their learning activities with LLMs (e.g., by generating solutions to exercises)" covered more topics but understood each one less. Students who used them to complement their learning, "by asking for explanations", understood more. The authors "observe that LLMs widen the gap between students with low and high prior knowledge."',
        read: 'partial',
        strength: 'Moderate',
        note: 'A preprint, not yet peer-reviewed as far as was checked. Only the abstract was read. The experiments found no overall effect of LLMs on learning; the split by usage comes from exploratory analyses and the field study.',
      },
      {
        id: 'fan',
        text: 'In a randomised study of 117 university students on a writing task ([Fan et al.](https://arxiv.org/abs/2412.09315v1), December 2024), the "ChatGPT group outperformed in the essay score improvement but their knowledge gain and transfer were not significantly different" from groups helped by a human expert, writing tools or nothing. The paper calls the risk "metacognitive laziness".',
        read: 'partial',
        strength: 'Moderate',
        note: 'Only the abstract was read. One writing task in one setting. It was published in the British Journal of Educational Technology, according to a search summary.',
      },
      {
        id: 'prather',
        text: 'Watching 21 novice programmers ([Prather et al., ICER 2024](https://arxiv.org/abs/2405.17739)), researchers found "students who accelerated were able to use GenAI to create code they already intended to make". For students who struggled, GenAI could "compound" their difficulties, and they "finished with an illusion of competence".',
        read: 'partial',
        strength: 'Moderate for what it observed',
        note: 'Only the abstract was read. A small observational study, not a trial, so it shows patterns rather than causes.',
      },
      {
        id: 'study-modes',
        text: 'The main chat tools now have a learning setting. [ChatGPT study mode](https://openai.com/index/chatgpt-study-mode/) (29 July 2025) "Combines Socratic questioning, hints, and self-reflection prompts", and OpenAI says it is "powered by custom system instructions", which may cause "some inconsistent behavior and mistakes across conversations". [Claude\'s Learning mode](https://www.anthropic.com/news/introducing-claude-for-education) (2 April 2025) "guides students\' reasoning process rather than providing answers". [Gemini Guided Learning](https://blog.google/products/gemini/guided-learning-google-gemini/) "walks you through each step, making you do the work". In Claude Code, the [Learning output style](https://code.claude.com/docs/en/output-styles) "leaves small pieces of code for you to write yourself", marked TODO(human), though the docs say a style "doesn\'t guarantee that something always happens or never happens."',
        read: 'page',
        strength: 'Official product descriptions',
        flags: ['vendor'],
        note: 'Each company describing its own product. No independent trial of these modes was found. They can be switched off at any time, so they help only if you keep using them.',
      },
    ],
    habits: [
      {
        text: 'Get quizzed instead of rereading. A large review rates practice testing among the two most useful study techniques and rereading among the least ([Dunlosky et al.](https://europepmc.org/article/MED/26173288)).',
      },
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
    id: 'set-up-your-tools',
    title: 'Set up your AI tools',
    intro: 'Practical habits for any AI tool, using Claude and Claude Code as the worked example.',
    claims: [
      {
        id: 'prompting',
        text: 'Anthropic\'s [prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) says "Claude responds well to clear, explicit instructions" and suggests a test: "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they\'d be confused, Claude will be too." It also says examples "are one of the most reliable ways to steer Claude\'s output format, tone, and structure."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-models',
        text: 'The [Claude Code model docs](https://code.claude.com/docs/en/model-config) describe haiku as for "simple tasks", sonnet for "daily coding tasks", opus for "complex reasoning tasks" and fable for "your hardest and longest-running tasks". /model switches during a session and saves your choice as the default unless you pick session-only. Its [costs page](https://code.claude.com/docs/en/costs) says "Sonnet handles most coding tasks well and costs less than Opus."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-costs',
        text: 'The [Claude Code costs page](https://code.claude.com/docs/en/costs) says "Token costs scale with context size." It advises /clear when switching to unrelated work because "Stale context wastes tokens on every subsequent message", and warns that "compacting a large context is itself a large request." /usage shows token use for the session.',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-plan',
        text: 'The [Claude Code permissions page](https://code.claude.com/docs/en/permissions) says that in plan mode Claude "reads files and runs read-only shell commands to explore but doesn\'t edit your source files". The [costs page](https://code.claude.com/docs/en/costs) says to "Press Shift+Tab to cycle to plan mode before implementation." The [best practices page](https://code.claude.com/docs/en/best-practices) suggests having Claude interview you, writing a spec, then building in a fresh session.',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-best',
        text: 'The [Claude Code best practices page](https://code.claude.com/docs/en/best-practices) advises: "Give Claude something it can run that comes back pass or fail." It also says to ask for "evidence: the command it ran and its output, or the screenshot."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-skills',
        text: 'The [Claude Code skills docs](https://code.claude.com/docs/en/skills) say a skill is a SKILL.md file of instructions, kept in .claude/skills/<name>/ for a project or ~/.claude/skills/<name>/ for you, and run with /skill-name or loaded when relevant. "Unlike CLAUDE.md content, a skill\'s body loads only when it\'s used, so long reference material costs almost nothing until you need it." Setting disable-model-invocation: true "prevents Claude from invoking the skill on its own; you can still run it directly."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-memory',
        text: 'The [Claude Code memory docs](https://code.claude.com/docs/en/memory) say CLAUDE.md files give Claude persistent instructions that it reads at the start of every session, and that /init generates a starting file. They advise: "target under 200 lines per CLAUDE.md file." They also warn: "Claude treats them as context, not enforced configuration."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-subagents',
        text: 'The [Claude Code subagent docs](https://code.claude.com/docs/en/sub-agents) say each subagent runs in its own context window and "sends its own requests, which count toward the same usage limits as your main conversation." The [best practices page](https://code.claude.com/docs/en/best-practices) says they pay off for parallel work, keeping long output out of the main conversation and getting a reviewer who has not seen how the code was written. By default, it says, you get "parallelism or a fresh pair of eyes out of it, but not a smarter answer."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-permissions',
        text: 'The [Claude Code permissions page](https://code.claude.com/docs/en/permissions) says "Permission rules are enforced by Claude Code, not by the model", and are evaluated in the order deny, ask, allow. On bypass mode it says: "Only use this mode in isolated environments like containers or VMs where Claude Code can\'t cause damage."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-mcp',
        text: 'The [Claude Code MCP docs](https://code.claude.com/docs/en/mcp) describe MCP as "an open source standard for AI-tool integrations" that gives Claude Code access to tools, databases and APIs. They warn: "Verify you trust each server before connecting it. Servers that fetch external content can expose you to prompt injection risk."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
    ],
  },
  {
    id: 'usage',
    title: 'Manage your usage',
    intro: 'See what you have used, make it last and know what the numbers mean, using Claude Code as the worked example.',
    claims: [
      {
        id: 'cc-usage',
        text: 'The [Claude Code costs page](https://code.claude.com/docs/en/costs) says "The Session block at the top of /usage shows detailed token usage statistics for your current session", and that on a paid plan "/usage also shows a breakdown of what counts against your plan limits, with recommendations". It adds: "Claude Pro, Max, and Ultra subscribers have usage included in their subscription, so the session cost figure isn\'t relevant for billing purposes." It says "Run /context to see what\'s consuming space", and "Usage credits let you keep working past your plan\'s usage limit."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-statusline',
        text: 'The [Claude Code status line docs](https://code.claude.com/docs/en/statusline) say that for subscribers "the rate_limits object contains a rolling five_hour window and a weekly seven_day window. Each window provides used_percentage, from 0 to 100, and resets_at, the Unix epoch seconds when the window resets."',
        read: 'partial',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Read through documentation excerpts rather than the whole page. Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-retention',
        text: 'The [Claude Code settings reference](https://code.claude.com/docs/en/settings-reference) says cleanupPeriodDays sets "how many days Claude Code keeps session transcripts and other application data before deleting them." The default is 30, the sweep "deletes transcripts without showing a message", and "Setting 0 fails validation, so pick a large value such as 3650 for long retention."',
        read: 'partial',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Read through documentation excerpts rather than the whole page. Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'claude-limits',
        text: 'Claude\'s [usage limits page](https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits) says the five-hour period "starts when you send your first message, and your limit resets in full five hours later", and "Weekly limits apply across all models". It adds that "your usage of all different Claude product surfaces (claude.ai, Claude Code, Claude Desktop) counts towards the same usage limit." It advises a lower effort level for routine tasks, because "Higher effort uses more tokens", and turning off connected apps you do not need, because "Tools and connectors are token-intensive".',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. The page gives no numbers for each plan, and limits can change. Check the page.',
      },
      {
        id: 'claude-limit-tips',
        text: 'Claude\'s [usage limit best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) say "Content in projects is cached and counts less against your limits when reused." They also advise: "If you have multiple related tasks or questions, group them in a single message."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-caching',
        text: 'The [Claude Code prompt caching page](https://code.claude.com/docs/en/prompt-caching) says: "Pick your model and effort level at the top of a session, then save /compact for natural breaks between tasks. The fewer changes you make mid-task, the higher your cache hit rate." To abandon a path, it suggests /rewind: "Rewinding truncates back to a prefix that is already cached, rather than building a new one as compaction does." On a Claude subscription, the main conversation\'s cache lasts one hour and most other requests five minutes.',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. The page says changing effort keeps the cache on some newer models. Details can change, so check the page.',
      },
      {
        id: 'cc-costs-hidden',
        text: 'The [Claude Code costs page](https://code.claude.com/docs/en/costs) says "a one-line question in a session that has been open all day still draws usage for the whole conversation", and "your first message after a break longer than the cache lifetime misses the cache and reprocesses your full context." It says "Thinking tokens are billed as output tokens", that CLI tools "are still more context-efficient than MCP servers", and that a hook which returns only the error lines of a long log can cut context "from tens of thousands of tokens to hundreds". "Agent teams use approximately 7x more tokens than standard sessions when teammates run in plan mode."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'gemini-limits',
        text: 'Google\'s [Gemini limits page](https://support.google.com/gemini/answer/16275805?hl=en) says limits "factor in the complexity of your prompt, the models and features you use, and the length of your chat", and "Your limit refreshes every 5 hours until you reach your weekly limit." It warns that "Gemini Apps usage limits may change."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. No plan numbers are quoted here because they change. Check the page.',
      },
      {
        id: 'agent-tokens',
        text: 'Two studies measured coding agents on SWE-bench, a set of real software issues. [Bai et al.](https://arxiv.org/abs/2604.22750) (revised 2 October 2026) found "input tokens rather than output tokens driving the overall cost", that runs on the same task "can differ by up to 30x", that "higher token usage does not translate into higher accuracy", and that models "systematically underestimate real token costs". [Gao and Peng](https://arxiv.org/abs/2510.16786) found a turn limit "at the 75th percentile of the baseline" cut costs "by 24%-68%" with "minimal impact on solve rates".',
        read: 'partial',
        strength: 'Moderate',
        note: 'Only the abstracts were read. Both test agents paying per token through an API on one benchmark, not people on a subscription plan, so the direction carries over better than the percentages.',
      },
    ],
    gap: 'Gap: no independent study of subscription usage habits was found. Two studies of coding agents on a benchmark point the same way as the advice here, but this guide rests mainly on the toolmakers\' own docs and one person\'s numbers.',
  },
  {
    id: 'second-brain',
    title: 'Give AI a second brain',
    intro: 'Give the AI your context once, in projects, memory and plain notes files, so each new chat starts from what you already know.',
    claims: [
      {
        id: 'cc-imports',
        text: 'The [Claude Code memory docs](https://code.claude.com/docs/en/memory) say "CLAUDE.md files can import additional files using @path/to/import syntax. Imported files are expanded and loaded into context alongside the CLAUDE.md that references them." They list ~/.claude/CLAUDE.md as user instructions, for "Personal preferences for all projects". For folders added with --add-dir, "By default, CLAUDE.md files from these directories are not loaded."',
        read: 'partial',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'The first two thirds of the page were read in full, and the table of locations through an excerpt. Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-rules',
        text: 'The [Claude Code memory docs](https://code.claude.com/docs/en/memory), checked again on 22 November 2026, say to write instructions "concrete enough to verify", such as "Use 2-space indentation" instead of "Format code properly". Over 200 lines, "Longer files consume more context and reduce adherence", so instructions for one part of a project go in .claude/rules/ files with a paths field, which "only apply when Claude is working with files matching the specified patterns." Auto memory loads "up to the first 200 lines or 25KB of MEMORY.md". /doctor prompt-audit checks instruction files "for outdated or conflicting content". The page also says: "Claude treats CLAUDE.md files and auto memory as context. They aren\'t enforced configuration. To block an action regardless of what Claude decides, use a PreToolUse hook instead."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'agents-md',
        text: '[AGENTS.md](https://agents.md/) calls itself "a README for agents" and says it "is now stewarded by the Agentic AI Foundation under the Linux Foundation"; when files conflict, "The closest AGENTS.md to the edited file wins". The [Claude Code memory docs](https://code.claude.com/docs/en/memory) say Claude Code reads AGENTS.md "only when you have no CLAUDE.md in your working directory or above it", and that this "requires Claude Code v2.1.277 or later".',
        read: 'page',
        strength: 'Official guidance',
        note: 'The AGENTS.md site describes its own format, and the Claude Code page describes Claude Code only. Which other tools read the file was not checked tool by tool.',
      },
      {
        id: 'claude-memory',
        text: 'Claude\'s [memory help page](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) says "Memory is on by default for Free, Pro, Max, and Ultra plans", and that "Claude saves memory as a set of individual topics as you chat". "Each project has its own memory", which Claude uses "alongside your memory from chats outside of projects, but not memory from other projects." Incognito chats are available on every plan. The [projects page](https://support.claude.com/en/articles/9517075-what-are-projects) says "Free users can create a maximum of five projects."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. Settings names and plan details change often, so check the page.',
      },
      {
        id: 'claude-app-skills',
        text: 'Claude\'s [skills help page](https://support.claude.com/en/articles/12512180-using-skills-in-claude) says "Skills are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans" and require code execution to be on. It warns: "Only install skills only from trusted sources", and says to read a skill\'s files before enabling one from a less-trusted source, "including one shared by a colleague".',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'chatgpt-memory',
        text: 'OpenAI\'s help pages say "Free and Go users can save up to 1,500 characters in custom instructions", and paid plans up to 5,000 ([custom instructions](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)). "Project instructions apply only within that project and override your global custom instructions" ([projects](https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt)). The [memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq) says "Deleting a chat alone does not necessarily delete a separate saved memory created from that chat", that "OpenAI may retain logs of deleted saved memories for up to 30 days", and that "Temporary chats do not create or update memories".',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. Help pages show only relative update dates, so check them before relying on a detail.',
      },
      {
        id: 'gemini-gems',
        text: 'Google\'s [Gems transition page](https://support.google.com/gemini/answer/18560919?hl=en) says that for personal Google accounts of people aged 18 or over, from "November 17, 2026: Gems transition to skills and become read only", and on "December 17, 2026: Gems are removed from Gemini Apps." Work and education accounts follow later.',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. Dates for work, education and under-18 accounts were not checked in detail.',
      },
      {
        id: 'context-eng',
        text: 'Anthropic\'s [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (29 September 2025) describes "context rot": "as the number of tokens in the context window increases, the model\'s ability to accurately recall information from that context decreases." Its guiding principle is to "find the smallest set of high-signal tokens that maximize the likelihood of your desired outcome." It describes an agent "maintaining a NOTES.md file" so that notes "get pulled back into the context window at later times".',
        read: 'page',
        strength: 'Moderate (practitioner guidance)',
        flags: ['vendor'],
        note: 'An engineering post by an AI vendor about building agents, not a study of students or note-taking. It supports the idea of keeping notes outside the chat and loading them when needed.',
      },
    ],
  },
  {
    id: 'coding',
    title: 'Code with AI',
    intro:
      'Controlled studies of coding productivity and learning are in other chapters ([METR 2025](#metr-2025), [METR 2026](#metr-2026), [Anthropic trial](#anthropic-rct)), with survey data in [Stack Overflow](#so-2025) and [DORA](#dora-2025). Summarised: one trial found a slowdown for experienced developers on their own mature repositories, later data suggests a smaller or reversed effect but is inconclusive, and a second trial found a learning cost when code was delegated.',
    claims: [
      {
        id: 'peng',
        text: 'In a [randomised experiment](https://arxiv.org/abs/2302.06590) (Peng et al., February 2023), professional programmers recruited through Upwork, using GitHub Copilot, finished an HTTP server task in JavaScript 55.8% faster than a control group (95% confidence interval 21 to 89%). 95 were recruited and 35 from both groups completed it. Less experienced developers benefited more.',
        read: 'page',
        strength: 'Moderate',
        flags: ['vendor'],
        note: 'Authors include GitHub and Microsoft Research staff, and both sell Copilot. It is one standard task, and the authors say it "does not examine the effects of AI on code quality".',
      },
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
    id: 'agents',
    title: 'Hand work to agents',
    intro: 'What to hand to an AI agent, how to run it on a schedule, and how to keep an undo it cannot touch, using Claude Code as the worked example.',
    claims: [
      {
        id: 'building-agents',
        text: 'Anthropic\'s [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (19 December 2024) recommends "finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all." It warns that "The autonomous nature of agents means higher costs, and the potential for compounding errors", and recommends "extensive testing in sandboxed environments, along with the appropriate guardrails."',
        read: 'page',
        strength: 'Moderate (practitioner guidance)',
        flags: ['vendor'],
        note: 'Advice from an AI vendor to people building agent systems, based on its own work with customers. It is not a measured result.',
      },
      {
        id: 'cc-hooks',
        text: 'The [Claude Code hooks guide](https://code.claude.com/docs/en/hooks-guide) says hooks are shell commands that run at set points, which "gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." Its example hook blocks edits to protected files, and adds: "Claude can still change the protected files with shell commands", so it suggests deny rules as well.',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-checkpoints',
        text: 'The [Claude Code checkpointing page](https://code.claude.com/docs/en/checkpointing) says /rewind, or its alias /undo, undoes Claude\'s file edits. "A file that only Bash commands changed isn\'t tracked and stays as it is", and Claude Code "usually doesn\'t capture" a subagent\'s edits. Under the heading "Not a replacement for version control", it says to keep using Git "for commits, branches, and long-term history."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-auto-mode',
        text: 'The [Claude Code permission modes page](https://code.claude.com/docs/en/permission-modes) says auto mode blocks by default actions such as "Downloading and executing code, like curl | bash", "Production deploys and migrations" and "Irreversibly destroying files that existed before the session". It warns: "Auto mode reduces permission prompts but does not guarantee safety. Use it for tasks where you trust the general direction, not as a replacement for review on sensitive operations." It also says "bypassPermissions offers no protection against prompt injection or unintended actions."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'cc-scheduling',
        text: 'In Claude Code, [/loop](https://code.claude.com/docs/en/scheduled-tasks) re-runs a prompt on an interval within a session, for example "/loop 5m check the deploy". "Recurring tasks automatically expire 7 days after creation", which "bounds how long a forgotten loop can run." [Cloud scheduled tasks](https://code.claude.com/docs/en/routines), "formerly routines", are "in research preview". "Anything a scheduled task does through your connected GitHub identity or connectors appears as you", "All of your connected MCP connectors are included by default", and they "draw down subscription usage the same way interactive sessions do."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. Cloud scheduled tasks are a research preview, so behaviour and limits may change. Check the page.',
      },
      {
        id: 'chatgpt-tasks',
        text: 'OpenAI\'s [scheduled tasks page](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt) says "Active task limits depend on the plan: 3 for Free and Go, 5 for Plus, 10 for Business and Edu, and 15 for Pro and Enterprise", and that "Free users can schedule a one-time task or a recurring task no more than once per day."',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. Limits change, so check the page.',
      },
      {
        id: 'mcp-security',
        text: 'The [MCP security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) say "Local MCP servers are binaries that are downloaded and executed on the same machine as the MCP client", and that before connecting one a client "MUST" "Show the exact command that will be executed, without truncation" and "Require explicit user approval before proceeding".',
        read: 'page',
        strength: 'Official guidance',
        note: 'Written for people who build MCP apps and servers, not for users. The point for users is that adding a local server runs a program on your computer.',
      },
      {
        id: 'lethal-trifecta',
        text: 'Simon Willison\'s [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (16 June 2025) warns against combining three things in one agent: "Access to your private data", "Exposure to untrusted content" and the ability to communicate externally. Of tools that claim to catch "95% of attacks", he writes that "in web application security 95% is very much a failing grade."',
        read: 'page',
        strength: 'Moderate (widely cited practitioner analysis)',
        note: 'A well-known security writer\'s analysis, not a study. It matches the NCSC view that prompt injection is unsolved.',
      },
      {
        id: 'replit',
        text: '[Fortune reported](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/) (23 July 2025) that Replit\'s AI agent wiped a production database holding data on "more than 1,200 executives", during a "code and action freeze". The agent said "I destroyed months of work in seconds", and told the user a rollback "would not work"; he was then "able to recover the data manually".',
        read: 'page',
        strength: 'Moderate that it happened as described',
        note: 'Press report based mainly on the user\'s own social media posts. Other outlets describe the recovery differently and give different record counts.',
      },
      {
        id: 'metr-horizon',
        text: '[METR\'s time horizons page](https://metr.org/time-horizons/) (last updated 8 September 2026) defines a model\'s time horizon as the length of task, measured by how long it takes a human expert, that the model would complete with 50% confidence. "It\'s a measure of the difficulty of a task, rather than the time an AI spends to complete the task." It says "Measurements above 16 hrs are unreliable with our current task suite".',
        read: 'page',
        strength: 'Moderate',
        note: 'The tasks are mostly software, machine learning and cyber tasks, which are cleaner than most real work. The latest model figures sit in a chart that was not read, so none are given here.',
      },
      {
        id: 'edinburgh',
        text: 'The [University of Edinburgh\'s guidance](https://information-services.ed.ac.uk/computing/comms-and-collab/elm/guidance-for-working-with-generative-ai) (revised 26 October 2026) lists as misconduct "Using an AI agent or AI browser to complete any type of work – assessed or not – within your virtual learning environment."',
        read: 'page',
        strength: 'Strong for that university',
        note: 'One university\'s rules. Other universities\' rules on agents were seen only in search summaries, so none are claimed here.',
      },
    ],
    gap: 'Gap: no independent study of students handing work to agents was found. This guide rests on the toolmakers\' docs, one incident report and one university\'s rules.',
  },
  {
    id: 'build-sites',
    title: 'Build websites with AI',
    intro: 'Show the AI what good looks like with real sites you admire, then judge every version with your own eyes.',
    claims: [
      {
        id: 'refero',
        text: '[Refero Styles](https://styles.refero.design/), marked as a beta, says "Browse 2,000+ AI-readable design systems from leading product websites." Each one, it says, comes with "colors, typography, spacing, components, and a DESIGN.md you can use in Cursor, Claude Code, Codex, v0, or Lovable."',
        read: 'page',
        strength: 'Product description',
        flags: ['vendor'],
        note: 'The site describing its own product. Its pricing and terms were not checked.',
      },
      {
        id: 'claude-vision',
        text: 'Anthropic\'s [vision docs](https://platform.claude.com/docs/en/build-with-claude/vision) say "Claude works best when images come before text." Large images are shrunk to a long edge of 2,576 px on Claude 4.7 and later models, or 1,568 px on others, which "might, for example, make text less legible. Consider pre-resizing your images, cropping them, or both." For GIFs, "Animations are unsupported, and only the first frame is used", and "coordinate and localization outputs are approximate." In Claude Code you can drag in, paste or give the path of an image, and the [common workflows page](https://code.claude.com/docs/en/common-workflows) suggests asking it to "Describe the UI elements in this screenshot".',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation from the company that makes the tool. It describes how the tool works and does not measure results. Details can change, so check the page.',
      },
      {
        id: 'figma-make',
        text: 'Figma\'s [help page on attaching files](https://help.figma.com/hc/en-us/articles/31304529835671) to Figma Make advises: "Specify exact 1:1 build or reference as style. In your prompt, tell the agent if you want an exact 1:1 build of the attachment, or to use it as style inspiration or reference." As a reference, an image guides "the layout, colors, and positioning", but "the result may still differ from the original image." It also says "the agent can\'t analyze video or audio content".',
        read: 'page',
        strength: 'Official guidance',
        flags: ['vendor'],
        note: 'Official documentation for one tool. The advice to say whether you want a copy or a style reference applies to any tool, but only Figma\'s page says it.',
      },
      {
        id: 'design2code',
        text: 'The [Design2Code benchmark](https://arxiv.org/abs/2403.03163) (Si et al., NAACL 2025) asked models to rebuild 484 real web pages from screenshots. Models "mostly lag in recalling visual elements from the input webpages and generating correct layout designs", while text came through almost perfectly (GPT-4o scored 98.2 for text and 84.1 for colour). On a harder set of pages, the [full paper](https://arxiv.org/html/2403.03163v3) says models "fail to generate 30% - 40% of the block elements", and giving the page\'s text along with the screenshot "successfully increases the block-match score and text similarity score on most tested models".',
        read: 'page',
        strength: 'Moderate',
        note: 'The models tested (GPT-4o, GPT-4V, Gemini, Claude 3) are older than today\'s, so use the pattern rather than the numbers: text is copied well, layout and missing pieces are the weak spots. It measures copying accuracy, not design quality.',
      },
      {
        id: 'design-md',
        text: 'Google\'s Stitch team [open-sourced a draft specification for DESIGN.md](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/) on 21 April 2026, a file that lets you "export or import your design rules from project to project", so AI agents "can know exactly what a color is for".',
        read: 'page',
        strength: 'Product description',
        flags: ['vendor'],
        note: 'A company describing its own format. How many other tools read DESIGN.md was not checked.',
      },
      {
        id: 'usco-website',
        text: 'The US Copyright Office\'s [Compendium, chapter 1000](https://www.copyright.gov/comp3/chap1000/ch1000-websites.pdf), says "The copyright law does not protect the overall look and feel of a website. It only protects the specific copyrightable expression found on a website on a given date." It "generally will refuse to register claims based solely on CSS", but "a particular banner, text, and images that are arranged in a creative manner may be eligible for registration".',
        read: 'page',
        strength: 'Strong for US registration practice',
        note: 'This is how the US Copyright Office registers works, not a ruling on every copying case, and not legal advice. UK and EU law differ: in the UK, a web page\'s appearance can be protected as a registered design, according to search summaries only.',
      },
    ],
    gap: 'Gap: no study was found that measures how much reference sites improve AI-built designs. Design2Code measures how closely older models copy a screenshot, not whether the result is good. UK and EU law on copying a site\'s design was seen only in search summaries.',
  },
  {
    id: 'safety',
    title: 'Use AI safely',
    intro:
      'Reference frameworks, official guidance and documented incidents. Frameworks are consensus on risks, not measurements of how often harm happens.',
    claims: [
      {
        id: 'gov-playbook',
        text: 'The [UK Government AI Playbook](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html) (10 February 2025) says AI systems "are also not guaranteed to be accurate", that you should "minimise the risk of privacy intrusion from the outset", and that "humans validate any high-risk decisions influenced by AI". It names prompt injection and hallucinations among threats specific to AI.',
        read: 'page',
        strength: 'Strong as official guidance',
        note: 'Guidance written for UK government work, not a study. The principles were read, not every section. Its acknowledgements list industry contributors including Amazon, Google, IBM and Microsoft.',
      },
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
        text: 'Keep confidential code and data out of tools you have not been cleared to use. The reported Samsung case is the example of what can happen otherwise.',
      },
      {
        text: 'Treat anything an AI agent can read as a way to instruct it. NCSC\'s advice is least privilege, deterministic safeguards that do not depend on the model, and logging ([NCSC](https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection)).',
      },
    ],
  },
  {
    id: 'cyber',
    title: 'AI in cyber security',
    intro:
      'Two directions: AI used by attackers, and AI as a target. Prompt injection is covered in [Use AI safely](#ncsc-injection); the NCSC and OWASP entries are the strongest sources in this guide.',
    claims: [
      {
        id: 'security-copilot',
        text: 'In a [randomised lab trial](https://arxiv.org/abs/2411.01067) (Bono and Xu, Microsoft, October 2024), 181 participants recruited through Upwork completed IT admin tasks in a simulated environment, with half given Security Copilot. "Copilot subjects experienced a 34.53% improvement in overall accuracy and a 29.79% reduction in task completion time." Multiple-choice questions took 25.13% longer with it.',
        read: 'page',
        strength: 'Moderate, vendor-run',
        flags: ['vendor'],
        note: 'Written by Microsoft staff about a Microsoft product, in a simulated lab rather than live work. The discussion section was not read in full.',
      },
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
    gap: 'Gap: no independent evaluation of AI in security operations centre (SOC) work was found. The sources located were vendor-heavy or vendor-sponsored, so this guide gives no SOC effectiveness figures. The one SOC forecast found is [listed on Sources](#f-gartner).',
  },
  {
    id: 'employers',
    title: 'Stand out at work',
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
        note: 'The authors call these "early, descriptive indicators... rather than causal estimates". The effect weakens with education controls and some trends predate generative AI. The paper has been revised, so the number can move between revisions. No rebuttal was retrieved.',
      },
      {
        id: 'humlum',
        text: 'A study linking adoption surveys to Danish labour records ([Humlum and Vestergaard, NBER](https://www.nber.org/papers/w33777), revised March 2026) estimates "precise null effects on earnings and recorded hours", "ruling out effects larger than 2% two years after the launch of ChatGPT". Workers still report productivity benefits, and adopters move into higher-paying occupations, "though still too few to move average earnings."',
        read: 'partial',
        strength: 'Moderate to strong for Denmark',
        note: 'Only the abstract page was read. It covers one country and the early period after ChatGPT launched. It sits awkwardly beside the task-level gains above, which is why it is here.',
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
    id: 'other-fields',
    title: 'AI in your field',
    intro:
      'Healthcare, law, finance and education, each with its limits. Education evidence is in other chapters ([Anthropic trial](#anthropic-rct), [Bastani et al.](#bastani)).',
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
        note: 'It counts court decisions discussing hallucinated content, some only alleged, and "does not track the (necessarily wider) universe of all fake citations". It is curated by one researcher and is not a rate per filing.',
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
  'The widely shared MIT-linked pilot-failure statistic, as fact. It appears in Stand out at work only as a contested claim.',
  'Figures attributed to the Stanford AI Index 2026 by aggregator sites. The official report page was not opened, so none are reproduced.',
  'Job-advert percentages relayed second-hand from analytics firms, and a 2026 SOC survey figure that traced to a single vendor.',
  'Control counts for NIST AI 600-1 from vendor summaries (they conflict), and an unverified claim about fraud in financial services.',
  'The "Your Brain on ChatGPT" preprint (Kosmyna et al.) as evidence of harm. 54 people took part, only 18 did the crossover session, and brain scans are not a measure of learning.',
  'Surveys linking AI use to weaker critical thinking (Lee et al., CHI 2025; Gerlich, 2025). They show correlation from self-reports, and Gerlich\'s page could not be opened.',
  'Numeric message caps for ChatGPT and Gemini plans from press and third-party sites. The official pages give no fixed numbers, and older figures are out of date.',
  'Gems in Gemini as a way to save instructions. On personal accounts they became read-only on 17 November 2026 and are removed on 17 December 2026.',
  'MotionSites as a design source. It sells ready-made prompts, so it is a vendor, and nothing on it was checked as evidence.',
  'A METR doubling time for newer models and a widely shared 14.5-hour figure for one model. Neither was read on METR\'s own pages.',
];

export const notRead: string[] = [
  'World Economic Forum Future of Jobs report, Axios interview and Mata v. Avianca order (access refused).',
  'Lightcast, Indeed and LinkedIn hiring reports; Gartner and SANS originals.',
  'EU Official Journal text on the Digital Omnibus; the National Vulnerability Database entry for EchoLeak.',
  'The NEJM AI papers, the PNAS paper, FINRA Notice 24-09, the Bank of England and FCA survey, and Samsung\'s original memo.',
  'Any company\'s published AI acceptable-use policy. The UK Government AI Playbook and ICO guidance are candidates for a next pass.',
  'Claude Styles, ChatGPT custom GPTs, Gemini\'s memory settings, and git worktrees for running agents side by side (added 22 November 2026).',
  'UK and EU law on website design, font licences, and every university\'s rules on AI agents except Edinburgh\'s.',
];

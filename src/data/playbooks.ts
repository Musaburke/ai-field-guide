// The practical layer of each guide. Prompts and steps are this guide's own advice, not
// study findings. `cite` lists the claims (guide.ts) that a line relies on.
// A simplified terminal or file view. `cmd` lines get a prompt, `note` lines are dimmed.
// Only restate the command or the cited docs; never invent screen output.
export interface Demo { title: string; lines: { cmd?: string; text?: string; note?: string }[] }
export interface Use { title: string; text: string; cite?: string[]; prompt: string; demo?: Demo }
export interface Line { title: string; text: string; cite?: string[] }
export interface Topic { title: string; habit: string; example: string; cite?: string[]; prompt?: string; demo?: Demo }
export interface Field { id: string; label: string; text: string; cite?: string[]; prompt: string; check: string }
export interface Playbook {
  uses?: Use[];
  topics?: Topic[];
  fields?: Field[];
  steps: Line[];
  careful: Line[];
  notes?: Line[];
  notesTitle?: string; // defaults to "What I learned building this site"
  topicsTitle?: string; // defaults to "<count> habits that pay off"
  topicsNote?: string;
  graph?: { title: string; text: string }; // shows the brain graph figure
  proof: string[];
}

export const playbooks: Record<string, Playbook> = {
  'using-ai-well': {
    uses: [
      {
        title: 'Write a first draft',
        text: 'Professionals doing writing tasks in their own field took 40% less time with ChatGPT, and quality rose by 18%.',
        cite: ['noy-zhang'],
        prompt: 'Here are my notes: [paste notes]. Draft a 200-word update for [reader]. Keep my facts as they are and list anything you had to assume.',
      },
      {
        title: 'Learn something hard',
        text: 'A well-designed AI tutor beat an active learning class in one trial. Tutors that make you do the thinking protect what you learn.',
        cite: ['kestin', 'bastani'],
        prompt: 'Be my tutor on [topic]. I am at [level]. Ask me one question at a time and do not give the answer until I have tried.',
      },
      {
        title: 'Get up to speed in a new role',
        text: 'Novice support agents resolved 34% more issues per hour with an AI assistant. Experienced agents saw minimal change.',
        cite: ['brynjolfsson'],
        prompt: 'I am new to [task]. Show me what a good one looks like, then give me the checklist an experienced person would use.',
      },
      {
        title: 'Pressure-test your thinking',
        text: 'On tasks within GPT-4\'s abilities, consultants improved by nearly 40%. Use it to widen your thinking, and keep the decision.',
        cite: ['dellacqua'],
        prompt: 'Here is my plan: [paste plan]. Give me the three strongest reasons it could fail, and what you would ask me before approving it.',
      },
    ],
    steps: [
      { title: 'Give it the context', text: 'Say who it is for, what it is for and what good looks like. Paste the material it needs.' },
      { title: 'Ask for a draft', text: 'Treat the first answer as a starting point, then tell it what to change.' },
      { title: 'Ask why', text: 'In one small trial, people who asked conceptual and follow-up questions scored higher on a later quiz. That pattern is correlational.', cite: ['anthropic-rct'] },
      { title: 'Check what matters', text: 'Open the sources, and confirm names, numbers and quotes before you use them.' },
      { title: 'Practise without it', text: 'If you need the skill, try first and test yourself with the tool closed.', cite: ['bastani'] },
    ],
    careful: [
      { title: 'Your sense of speed can mislead you', text: '16 experienced developers took 19% longer with AI allowed, yet believed they were about 20% faster. Time your work before deciding it helps.', cite: ['metr-2025'] },
      { title: 'It can fail outside its strengths', text: 'On a task beyond GPT-4\'s abilities, consultants using it did worse by an average of 19 points. Be most careful where you cannot judge the answer.', cite: ['dellacqua'] },
      { title: 'Handing everything over costs you the skill', text: 'Students with plain GPT-4 did 17% worse once it was taken away. In another trial, the AI group scored 50% on a quiz against 67% without it.', cite: ['bastani', 'anthropic-rct'] },
    ],
    proof: ['noy-zhang', 'kestin', 'brynjolfsson', 'dellacqua', 'bastani', 'anthropic-rct', 'metr-2025'],
  },
  'set-up-your-tools': {
    topics: [
      {
        title: 'Choose the right model',
        demo: { title: "Claude Code", lines: [{ cmd: "/model" }, { text: "haiku    simple tasks" }, { text: "sonnet   daily coding tasks" }, { text: "opus     complex reasoning tasks" }, { text: "fable    hardest, longest-running tasks" }] },
        habit: 'Use the smallest model that can do the job, and step up when the work is hard. Check your tool\'s own model page, because names and prices change.',
        example: '`/model` switches model. The docs describe Haiku for simple tasks, Sonnet for daily coding, Opus for complex reasoning and Fable for the hardest, longest work.',
        cite: ['cc-models'],
      },
      {
        title: 'Save your usage',
        demo: { title: "Claude Code", lines: [{ cmd: "/clear" }, { note: "fresh start for the next job" }, { cmd: "/usage" }, { note: "what this session and your plan have used" }] },
        habit: 'Long conversations cost more, so start a new one for each new job. Check what you have used before starting something big.',
        example: '`/clear` starts fresh and costs nothing. `/usage` shows what you have used. The next guide, Manage your usage, has the rest.',
        cite: ['cc-costs', 'cc-usage'],
      },
      {
        title: 'Plan before you build',
        demo: { title: "Claude Code", lines: [{ text: "Shift+Tab  cycles to plan mode" }, { note: "reads and explores, does not edit source files" }, { cmd: "Interview me about this project, one question at a time." }] },
        habit: 'Agree the plan first, while changes are cheap. Ask the tool to question you, so gaps show up before anything gets made.',
        example: 'Shift+Tab cycles to plan mode, where it reads and explores but does not edit your source files.',
        cite: ['cc-plan'],
        prompt: 'Interview me about this project until you understand what I want. Ask one question at a time. Then write the plan, and do not build anything yet.',
      },
      {
        title: 'Save what you repeat as a skill',
        demo: { title: "Where skills live", lines: [{ text: ".claude/skills/review/SKILL.md" }, { note: "this project only" }, { text: "~/.claude/skills/review/SKILL.md" }, { note: "every project" }, { cmd: "/review" }] },
        habit: 'If you keep typing the same instructions, save them once and reuse them.',
        example: 'A skill is a `SKILL.md` file in `.claude/skills/<name>/`, which you run with `/name`. Put it in `~/.claude/skills/<name>/` instead to use it in every project. It only loads when used, so long instructions cost almost nothing until then.',
        cite: ['cc-skills'],
      },
      {
        title: 'Tell it how you work, once',
        demo: { title: "Where CLAUDE.md lives", lines: [{ text: "~/.claude/CLAUDE.md" }, { note: "your rules, every project" }, { text: "./CLAUDE.md" }, { note: "this project, shared with your team" }, { text: "See @docs/setup.md for how to run it." }, { note: "an @ line pulls in another file" }] },
        habit: 'Most AI tools have somewhere for standing instructions. Put your rules and project details there, and keep them short.',
        example: 'It reads `CLAUDE.md` at the start of every session, and `/init` creates a first draft. The docs advise under 200 lines, and warn it is context rather than enforced rules. Rules for every project, such as which skill to use for which job, go in `~/.claude/CLAUDE.md`.',
        cite: ['cc-memory', 'cc-imports'],
      },
      {
        title: 'Check your skills actually run',
        demo: { title: "Claude Code", lines: [{ cmd: "/context" }, { note: "what fills the conversation, skills included" }, { text: "disable-model-invocation: true" }, { note: "this skill runs only when you type its name" }] },
        habit: 'Installing a skill does not mean it gets used. Check that each one loads where you need it, and say when to use it.',
        example: 'Skills in one project\'s `.claude/skills` are not visible in another. A skill with `disable-model-invocation: true` only runs when you type its name. `/context` shows what is filling the conversation, skills included.',
        cite: ['cc-skills', 'cc-usage'],
      },
      {
        title: 'Use agents for the right jobs',
        demo: { title: "How agents split work", lines: [{ text: "main conversation" }, { text: "\u251c\u2500 subagent   own context, reviews the diff" }, { text: "\u2514\u2500 subagent   own context, searches the docs" }, { note: "both count toward the same usage limits" }] },
        habit: 'Hand a job to an agent when it is noisy, can run in parallel or needs fresh eyes. Keep simple work in your main conversation, because extra agents cost extra usage.',
        example: 'A subagent has its own context and counts toward the same limits. The docs say that by default you get parallelism or a fresh reviewer, but not a smarter answer.',
        cite: ['cc-subagents'],
      },
      {
        title: 'Give it the least access it needs',
        demo: { title: ".claude/settings.json", lines: [{ text: "{" }, { text: "  \"permissions\": {" }, { text: "    \"deny\":  [\"Read(./.env)\"]," }, { text: "    \"ask\":   [\"Bash(git push:*)\"]," }, { text: "    \"allow\": [\"Bash(npm run test:*)\"]" }, { text: "  }" }, { text: "}" }, { note: "checked in the order deny, ask, allow" }] },
        habit: 'Start with approvals on, and allow more only for things you trust. Anything a tool can reach, a mistake can reach too.',
        example: 'It enforces its permission rules itself, in the order deny, ask, allow. The docs say to use bypass mode only in isolated environments such as containers or VMs.',
        cite: ['cc-permissions'],
      },
      {
        title: 'Connect other tools with care',
        demo: { title: "Terminal", lines: [{ cmd: "claude mcp add --transport http notion https://mcp.notion.com/mcp" }, { note: "connect only servers you trust" }] },
        habit: 'Connecting your calendar, files or database makes an AI tool far more useful, and widens what can go wrong. Connect only what you need, from people you trust.',
        example: 'It uses MCP for this. The docs warn that servers fetching outside content can expose you to prompt injection.',
        cite: ['cc-mcp'],
      },
    ],
    steps: [
      { title: 'Write a clear first prompt', text: 'Read it as a colleague would. Anthropic\'s test is that if they would be confused, the model will be too.', cite: ['prompting'] },
      { title: 'Add your standing instructions', text: 'Write down what you are working on and how you like things done.', cite: ['cc-memory'] },
      { title: 'Plan the next task', text: 'Ask for a plan, correct it, then let the tool start.', cite: ['cc-plan'] },
      { title: 'Give it a way to check itself', text: 'Offer something it can run that passes or fails, and ask for evidence such as the output or a screenshot.', cite: ['cc-best'] },
      { title: 'Start fresh for the next job', text: 'A clean conversation stops the next task paying for the last one\'s history.', cite: ['cc-costs'] },
    ],
    careful: [
      { title: 'Instructions are not guardrails', text: 'A standing instruction is context the model reads, and it can be ignored. Use real permission settings for anything that must never happen.', cite: ['cc-memory', 'cc-permissions'] },
      { title: 'More agents can mean less left', text: 'Each agent sends its own requests, so a big fan-out can use up a weekly limit quickly.', cite: ['cc-subagents'] },
      { title: 'These details change', text: 'Model names, limits and commands move often. Everything here was checked on 1 November 2026, so confirm it on the linked page.' },
    ],
    notes: [
      { title: 'Agents only know what you tell them', text: 'My first two designs came out badly because the agents building them used none of the design skills I had set up. The brief never told them to.' },
      { title: 'Set a budget before you start', text: 'I gave Claude a weekly usage limit and pasted in my `/usage` at checkpoints, because the session could not read it. One research agent alone used about 261,000 tokens.' },
      { title: 'Passing tests does not mean it is good', text: 'I rejected several versions of this site after every automated check had passed. Only looking at it told me it was boring.' },
      { title: 'Let it interview you', text: 'This guide exists because Claude finally asked me questions before building. My answers changed what the site was for.' },
    ],
    proof: [],
  },
  usage: {
    uses: [
      {
        title: 'See how much of your plan is left',
        demo: { title: "Claude Code", lines: [{ cmd: "/usage" }, { note: "Session: tokens used in this session" }, { note: "Plan: five-hour and weekly limits, and what is using them" }] },
        text: 'Plans have a limit that resets every five hours and another that resets weekly. `/usage` shows both, and a breakdown of what is using them up.',
        cite: ['cc-usage', 'cc-statusline'],
        prompt: 'I have [X]% of my weekly limit left. Here is the job: [describe it]. Tell me which parts will use the most, and how to do it in fewer steps.',
      },
      {
        title: 'Keep the numbers on screen',
        demo: { title: "~/.claude/statusline.sh", lines: [{ text: "jq -r '.rate_limits.five_hour.used_percentage'" }, { text: "jq -r '.rate_limits.seven_day.used_percentage'" }, { note: "each is a percentage from 0 to 100" }] },
        text: 'A status line script can show your five-hour and weekly percentages under every prompt, so you never have to go and look.',
        cite: ['cc-statusline'],
        prompt: 'Write me a Claude Code status line script that shows the model name and my five-hour and weekly usage as percentages. Read the rate_limits fields, and show nothing for any that are missing.',
      },
      {
        title: 'Find what fills the conversation',
        demo: { title: "Claude Code", lines: [{ cmd: "/context" }, { note: "a breakdown of the context window, by category" }] },
        text: '`/context` lists what is taking up space, such as your instructions, installed skills and long tool output.',
        cite: ['cc-usage'],
        prompt: 'Here is my /context output: [paste]. What is taking the most space, and what could I remove or load only when needed?',
      },
      {
        title: 'Read the dollar figure right',
        text: 'On a Pro, Max or Ultra plan, the session cost in `/usage` is not what you pay. Your subscription already covers that usage.',
        cite: ['cc-usage'],
        prompt: 'Explain the difference between my plan limits and the session cost figure Claude Code shows me. What happens when I reach a limit?',
      },
    ],
    steps: [
      { title: 'Start a new chat for each job', text: '`/clear` drops the old conversation, so the next request does not pay for it.', cite: ['cc-costs'] },
      { title: 'Compact a long job instead of restarting', text: '`/compact` summarises the history and carries on. On a very large conversation, that summary is a big request too.', cite: ['cc-costs'] },
      { title: 'Match the model to the job', text: '`/model` switches. Use a smaller model for copy edits and small fixes, and save the biggest for planning and hard bugs.', cite: ['cc-models'] },
      { title: 'Say when it does not need to look', text: 'Screenshots are expensive to read. When you only need the build to pass, say "no screenshots, just check the build".' },
      { title: 'Keep your chat history', text: 'Claude Code deletes transcripts after 30 days without telling you. Set `"cleanupPeriodDays": 3650` in `~/.claude/settings.json` to keep them.', cite: ['cc-retention'] },
    ],
    careful: [
      { title: 'Decide on usage credits before you need them', text: 'Usage credits let you keep working past your plan limit. Check in your account settings whether they are on, and whether you want them.', cite: ['cc-usage'] },
      { title: 'Estimates can be far off', text: 'An AI\'s guess at how much a job will use is a guess. Read `/usage` before and after a big job instead.' },
      { title: 'Agents multiply usage', text: 'Each subagent sends its own requests against the same limits. Try one, see what it used, then decide whether to start more.', cite: ['cc-subagents'] },
    ],
    notesTitle: 'What my own usage looked like',
    notes: [
      { title: 'Real numbers from one week', text: 'On my plan, the first full build of my portfolio took about 14% of a weekly limit, and one new section about 2%. Claude had guessed that section would cost far more. A redesign on Opus took about 8% of the week and 60% of one five-hour window.' },
      { title: 'The $100 that was not a bill', text: '`npx ccusage@latest daily` showed $100.94 for 29 October to 1 November. Nearly all of it was cache reads, priced as if I paid per token. My subscription price stayed the same.' },
      { title: 'Where most of it went', text: 'By Claude\'s estimate, my biggest costs were full-page screenshots read several at a time, rewriting whole files instead of editing them, and installed skills adding about 16,000 tokens to every request.' },
      { title: 'Clearing saves the most', text: 'The usage panel put starting a new chat for each task at 82% of the savings it suggested. `CLAUDE.md` loads again by itself, so nothing important is lost.' },
    ],
    proof: [],
  },
  'second-brain': {
    graph: { title: 'See your brain grow', text: 'Open the folder in Obsidian and turn on graph view. Every `[[link]]` between two notes becomes a line, so you can see which ideas connect and which notes stand alone. The more you link, the more it looks like a brain.' },
    uses: [
      {
        title: 'Set it up in one go',
        text: 'One prompt builds the folders, templates, git repo, the link from `CLAUDE.md` and a command to keep it updated. It asks you a few questions first.',
        prompt: "Set up a second brain that you and I will both use. Work in [~/Brain]. First ask me, one question at a time: what I will use it for (study, projects, work), which folders I want, and whether I use Obsidian.\n\nThen build it:\n1. A private git repo with my folders (for example Inbox, Projects, Knowledge, Uni) and a Templates folder.\n2. Home.md, linking every folder, and a short How this works note that explains these rules.\n3. Templates for a project note, a lecture note and a decision. Give each one front matter: tags, updated, source.\n4. Inbox.md, for my own quick thoughts only. Sort it into notes when I ask, but never write in it yourself.\n5. Link related notes with [[note name]], so Obsidian's graph view shows how they connect.\n6. One block in ~/.claude/CLAUDE.md that imports Home.md and says: read my notes before starting work, add source: claude-chats to any note you write, and update the matching project note at the end of a session.\n7. A /brain-update skill that reads what we did since the last update, writes the changes on a git branch and shows me the diff before anything merges.\n\nRules: show me every file before you commit. Keep passwords, keys and other people's personal details out. When a note disagrees with the code, trust the code.",
      },
      {
        title: 'Start each chat already up to speed',
        demo: { title: "Your notes folder", lines: [{ text: "~/Brain/" }, { text: "\u251c\u2500 Inbox.md      your own quick thoughts" }, { text: "\u251c\u2500 Projects/     one note per project" }, { text: "\u2514\u2500 Knowledge/    ideas and fixes worth keeping" }, { note: "in ~/.claude/CLAUDE.md, so every chat can find it:" }, { text: "My notes are in ~/Brain. Start from @~/Brain/Home.md" }] },
        text: 'Keep one short note per project: what it is, where the code lives and what is left. Point the AI at it instead of explaining again.',
        prompt: 'Read my note at [path]. Summarise where this project is up to in five lines, and ask me about anything that looks out of date before we start.',
      },
      {
        title: 'Keep decisions with their reasons',
        text: 'Write down what you chose and why, so neither you nor the AI reopens a settled question three chats later.',
        prompt: 'From this chat, list the decisions we made, each with one line on why. Format them so I can paste them into my decisions note.',
      },
      {
        title: 'Turn lectures into notes you can revise from',
        text: 'Give it your slides and ask for notes that fit your own folders, with diagrams where they help.',
        prompt: 'Turn these slides into revision notes: [paste]. Use short headings and one example per idea, and end with what I should be able to explain afterwards.',
      },
      {
        title: 'Check what is still open',
        text: 'Keep a list of loose ends. Have the AI check each one against the real code and sites, and report without ticking anything off.',
        prompt: 'Here is my open loops list: [paste]. For each item, tell me how to check whether it is really done. Do not mark anything done yourself.',
      },
    ],
    steps: [
      { title: 'Give it its own folder', text: 'Keep the notes apart from your code, as plain Markdown files. Obsidian is one app that opens a folder like this. Put it in a private git repo so every change can be undone.' },
      { title: 'Keep an inbox that is yours', text: 'One note for quick thoughts, links and ideas, written only by you. The AI sorts it into the right notes later.' },
      { title: 'Label what the AI wrote', text: 'Add a line such as `source: claude-chats` to the top of every note the AI wrote, so you never mistake its summary for your own words.' },
      { title: 'Review changes before they land', text: 'Have the AI update the notes on a git branch, then read the diff before you merge it.' },
      { title: 'Tell your tool where the notes are', text: 'Nothing reads them until something points to them. Add a line to `~/.claude/CLAUDE.md`, which loads in every project, or import a note with `@path/to/note`.', cite: ['cc-imports', 'cc-memory'] },
    ],
    careful: [
      { title: 'A brain only the AI fills goes unread', text: 'It grows quickly and nobody reads it. Most of the value comes from what you add yourself.' },
      { title: 'Notes are summaries, not sources', text: 'A note records what someone remembered. When it disagrees with the code or the live site, trust the code.' },
      { title: 'Keep secrets out', text: 'Leave out passwords, keys, other people\'s personal details and raw chat transcripts. A private repo is still one more copy.' },
    ],
    notesTitle: 'How my own second brain works',
    notes: [
      { title: 'Four folders', text: 'Inbox for quick thoughts, Uni for lectures, Knowledge for ideas and fixes worth keeping, and Projects for one note per project. Links work by name, so notes can move freely.' },
      { title: 'Updates on a branch', text: 'A custom skill, `/brain-update`, reads my Claude Code chats since the last run, writes the changes on a branch and shows me the diff before anything merges.' },
      { title: 'Claude warned me early', text: 'It pointed out that a brain agents fill alone gets big and nobody reads it. So the Inbox is mine, and the AI does not write in it.' },
      { title: 'Rules there did nothing at first', text: 'Rules I wrote only in the brain were never used, because nothing loaded them. Moving them into `~/.claude/CLAUDE.md` fixed that.' },
    ],
    proof: [],
  },
  safety: {
    uses: [
      {
        title: 'Clean a document before sharing',
        text: 'Personal details are easiest to protect before they leave your hands. UK government guidance says to minimise privacy risk from the outset.',
        cite: ['gov-playbook'],
        prompt: 'I want help with a [type of document]. Before I paste anything, list the kinds of details I should remove or replace with placeholders.',
      },
      {
        title: 'Read a tool\'s privacy terms',
        text: 'Data rules differ between tools and plans. AI can pull out the parts that matter, and you can then check them yourself.',
        prompt: 'Here is this tool\'s privacy policy: [paste]. Is my input used for training? How long is it kept? Can I opt out? Quote the lines you rely on.',
      },
      {
        title: 'Check what a tool can reach',
        text: 'The UK NCSC advises least privilege, because prompt injection may never be fully fixed. Ask, then confirm in the settings.',
        cite: ['ncsc-injection'],
        prompt: 'List every file, app and action you can access in this session, and which of them need my approval first.',
      },
      {
        title: 'Review your own AI project',
        text: 'OWASP publishes a community list of ten risks for apps built on language models, which makes a useful checklist.',
        cite: ['owasp'],
        prompt: 'Here is how my app uses AI: [describe]. Check it against the OWASP Top 10 for LLM Applications and name the three biggest risks.',
      },
    ],
    steps: [
      { title: 'Check you are allowed', text: 'Look up your university or employer\'s rules before you paste in their work.' },
      { title: 'Remove what is not yours to share', text: 'Swap names, client details and passwords for placeholders.', cite: ['samsung'] },
      { title: 'Limit what the tool can touch', text: 'Give it only the files and permissions the job needs.', cite: ['ncsc-injection'] },
      { title: 'Keep a person on big decisions', text: 'A human should validate anything high-risk that AI influenced.', cite: ['gov-playbook'] },
    ],
    careful: [
      { title: 'Text can carry hidden instructions', text: 'An AI tool that reads a web page or email can be tricked by text inside it. EchoLeak was a reported example in Microsoft 365 Copilot, later patched.', cite: ['ncsc-injection', 'echoleak'] },
      { title: 'Pasted data can travel', text: 'Samsung reportedly restricted generative AI after staff pasted internal code into ChatGPT.', cite: ['samsung'] },
      { title: 'Check the law at its source', text: 'Sources disagree on some EU AI Act dates, so read the Official Journal before relying on them.', cite: ['eu-ai-act'] },
    ],
    proof: ['gov-playbook', 'ncsc-injection', 'owasp', 'samsung', 'echoleak', 'eu-ai-act'],
  },
  employers: {
    uses: [
      {
        title: 'Build a small proof of work',
        text: 'Two reported CEO memos treat AI use as an expectation, so a finished project says more than a line on a CV.',
        cite: ['ceo-memos'],
        prompt: 'I study [course] and want a role in [field]. Suggest three small projects I could finish in a weekend using AI. For each, say what I would show an employer.',
      },
      {
        title: 'Describe your AI use honestly',
        text: 'Hiring has no shared definition of AI literacy, so say exactly what you did and how you checked it.',
        cite: ['job-adverts'],
        prompt: 'Here is how I used AI on this project: [details]. Write two honest CV bullets covering what I did, what AI did and how I checked it. Do not exaggerate.',
      },
      {
        title: 'Practise for interviews',
        text: 'According to summaries of a survey of about 1,000 employers, AI skills and creative thinking are both expected to grow.',
        cite: ['wef'],
        prompt: 'Interview me for [role] at [company type]. Ask one question at a time, including how I use AI, then tell me how to improve each answer.',
      },
      {
        title: 'Get up to speed in your first job',
        text: 'Novice support agents gained the most from an AI assistant in one large study, so use it to climb faster, and check its advice with your team.',
        cite: ['brynjolfsson'],
        prompt: 'I just started as a [role]. Explain [task] to me, list what a senior person would check, and tell me what to ask my manager.',
      },
    ],
    steps: [
      { title: 'Pick one real project', text: 'Choose something small that you can finish and show.' },
      { title: 'Keep notes as you go', text: 'Save your key prompts, your mistakes and what you changed.' },
      { title: 'Show how you checked it', text: 'Explain what you verified yourself. That is the part an interviewer can question you on.' },
      { title: 'Follow the employer\'s rules', text: 'Ask what is allowed before you use AI on their work or in their hiring process.' },
    ],
    careful: [
      { title: 'Entry-level jobs may be shifting', text: 'Employment of 22 to 25-year-olds in AI-exposed jobs is 19% below where it would be had it kept pace with less-exposed peers. The authors say this is descriptive, not causal.', cite: ['canaries'] },
      { title: 'Faster does not yet mean paid more', text: 'Danish records show no measurable effect on earnings or hours so far, though workers report benefits.', cite: ['humlum'] },
      { title: 'Be wary of viral statistics', text: 'A widely shared MIT-linked figure on AI pilot failure has been criticised for thin methods. Look at the source before you repeat one.', cite: ['mit-pilots'] },
    ],
    proof: ['ceo-memos', 'job-adverts', 'wef', 'canaries', 'humlum', 'mit-pilots'],
  },
  coding: {
    topicsTitle: 'Set up before you code',
    topicsNote: 'A workflow that saves rework, with Claude Code as the example',
    topics: [
      {
        title: "Choose the stack before the first prompt",
        demo: { title: "CLAUDE.md", lines: [{ text: "## Stack" }, { text: "Astro 7, strict TypeScript, Tailwind 4." }, { text: "Node 22+. Hosted on Cloudflare Pages." }, { note: "settled once, read every session" }] },
        habit: "Decide the framework, language, versions and where it will be hosted, and write them down. Left open, the AI picks for you and can change its mind halfway.",
        example: "Put the stack at the top of `CLAUDE.md`, so every session starts from the same choices.",
        cite: ['cc-memory'],
      },
      {
        title: "Write CLAUDE.md before you write code",
        demo: { title: "CLAUDE.md", lines: [{ text: "## Commands" }, { text: "npm run dev     local server" }, { text: "npm run check   must pass" }, { text: "## Rules" }, { text: "Never invent facts. Unknown means TODO." }] },
        habit: "List the commands, where things live and the rules that never change. Keep it short and specific.",
        example: "`/init` drafts a first version from your project. Add the commands it must run and what \"done\" means.",
        cite: ['cc-memory'],
      },
      {
        title: "Define everything in plan mode",
        demo: { title: "Claude Code", lines: [{ text: "Shift+Tab  plan mode" }, { cmd: "Interview me, then write the plan." }, { note: "read it, correct it, approve it" }, { note: "only then does it start editing" }] },
        habit: "Agree the goal, the pages or features, the data and what finished looks like before any file changes. Changes are cheap in a plan and expensive in code.",
        example: "Shift+Tab switches to plan mode, where it reads and explores but does not edit source files. Let it question you, correct the plan, then approve it.",
        cite: ['cc-plan'],
        prompt: "Before any code: interview me about this feature one question at a time. Cover the goal, who uses it, the data, edge cases and how we will know it is done. Then write the plan as numbered steps with the files each one touches, and wait for my approval.",
      },
      {
        title: "Turn repeat jobs into workflows",
        demo: { title: "project/", lines: [{ text: "\u251c\u2500 CLAUDE.md          read workflows/ first" }, { text: "\u251c\u2500 workflows/" }, { text: "\u2502  \u251c\u2500 add-page.md" }, { text: "\u2502  \u2514\u2500 pre-ship.md" }, { text: "\u2514\u2500 tools/" }, { text: "   \u251c\u2500 check.sh" }, { text: "   \u2514\u2500 screenshot.mjs" }] },
        habit: "Write each job you repeat as a short step-by-step file, and give the fiddly steps a script. If each step is 90% reliable, five in a row is only about 59%, so scripts beat retyping.",
        example: "Keep the steps in a `workflows/` folder and the scripts in `tools/`, and tell `CLAUDE.md` to read the matching workflow first. A skill does the same job inside Claude Code.",
        cite: ['cc-skills'],
      },
      {
        title: "Give it a check it can run",
        demo: { title: "Terminal", lines: [{ cmd: "npm run check" }, { note: "0 errors before anything is called done" }] },
        habit: "Before the first feature, add one command that fails when something is broken. The AI can then test its own work instead of telling you it is done.",
        example: "Ask for the command it ran and its output as evidence, not a summary.",
        cite: ['cc-best'],
      },
    ],
    uses: [
      {
        title: 'Understand unfamiliar code',
        text: 'Start here in any new project. Ask for the map before you ask for changes.',
        prompt: 'Explain what this code does and how the pieces connect: [paste or point to it]. Then tell me which part to read first.',
      },
      {
        title: 'Write a first pass of a small feature',
        text: 'Programmers with GitHub Copilot finished one server task 55.8% faster in a trial co-written by GitHub staff.',
        cite: ['peng'],
        prompt: 'Add [feature] to this project. Plan it first, keep the change small, follow the existing style, and tell me how to test it.',
      },
      {
        title: 'Write the tests',
        text: 'A test gives you and the tool a clear pass or fail, which the Claude Code docs recommend so it can work and check itself.',
        cite: ['cc-best'],
        prompt: 'Write tests for this function: [paste]. Cover normal input, empty input and bad input. Do not change the function.',
      },
      {
        title: 'Learn while you build',
        text: 'In one small trial, people who asked conceptual and follow-up questions scored higher than those who delegated. That pattern is correlational.',
        cite: ['anthropic-rct'],
        prompt: 'Before you write this, explain the approach and why. Then ask me to write the first part myself, and review what I wrote.',
      },
    ],
    steps: [
      { title: 'Plan the change', text: 'Agree the approach before any code is written.', cite: ['cc-plan'] },
      { title: 'Give it a pass or fail check', text: 'Tests or a build let the tool see its own mistakes.', cite: ['cc-best'] },
      { title: 'Read every change', text: 'Review it like a stranger\'s pull request, especially input handling.', cite: ['veracode'] },
      { title: 'Check you can explain it', text: 'If you could not explain it to someone else, ask until you can.' },
    ],
    careful: [
      { title: 'AI code can be insecure', text: 'Models added a flaw of an OWASP Top 10 class in 45% of cases in a vendor benchmark. That does not mean 45% of real AI code is vulnerable.', cite: ['veracode'] },
      { title: 'Speed gains are not settled', text: 'One trial measured a slowdown, and METR calls its later data "only very weak evidence" for the size of any speedup.', cite: ['metr-2025', 'metr-2026'] },
      { title: 'It magnifies your habits', text: 'DORA calls AI "an amplifier" of existing strengths and weaknesses, so get testing and review in place first.', cite: ['dora-2025'] },
    ],
    proof: ['peng', 'veracode', 'metr-2026', 'dora-2025', 'so-2025'],
  },
  'build-sites': {
    uses: [
      {
        title: 'Show it sites you like',
        text: 'Anthropic calls examples one of the most reliable ways to steer the output. Give it three or four real sites and say what you like about each.',
        cite: ['prompting'],
        prompt: 'Here are sites I like: [link] for its hero, [link] for its navigation and [link] for its colours. Say what each does well, then propose a direction for my site that borrows the ideas, not the look.',
      },
      {
        title: 'Start from a design system',
        demo: { title: "your-site/", lines: [{ text: "\u251c\u2500 DESIGN.md    colours, type, spacing, components" }, { text: "\u251c\u2500 CLAUDE.md    \"Follow @DESIGN.md for every page.\"" }, { text: "\u2514\u2500 src/" }] },
        text: 'Refero Styles collects design systems taken from product websites, each with a `DESIGN.md` file an AI coding tool can read.',
        cite: ['refero'],
        prompt: 'Read this DESIGN.md: [paste]. Build my [section] with its spacing and type scale, using my own colours and content.',
      },
      {
        title: 'Look at one part at a time',
        text: 'Galleries such as `land-book.com` for layouts, `navbar.gallery` for navigation and `pricingpages.design` for pricing show many versions of one part. Some block automated browsers, so send a screenshot instead.',
        prompt: 'Here is a screenshot of a [navigation bar] I like. List what makes it work, including spacing, type, states and motion. Then build mine to the same standard.',
      },
      {
        title: 'Make it look at its own work',
        text: 'Have it screenshot what it built at desktop and phone width, and fix what it sees before it shows you.',
        cite: ['cc-best'],
        prompt: 'Take screenshots of [page] at 1440px and 390px wide. List everything that looks broken, crowded or generic, fix it, and screenshot again.',
      },
    ],
    steps: [
      { title: 'Collect your references', text: 'Three or four sites, each picked for one thing you want.' },
      { title: 'Let it interview you', text: 'Ask it to question you about audience, tone and content before it designs anything.', cite: ['cc-plan'] },
      { title: 'Build one section first', text: 'Agree the look on the first screen before it builds the rest.' },
      { title: 'Look, fix, repeat', text: 'Screenshot it, judge it yourself and fix it, at least two rounds a page. Judge the screenshots, not the code.', cite: ['cc-best'] },
      { title: 'Get a second opinion', text: 'Run a separate reviewer that has not seen how the page was built.', cite: ['cc-subagents'] },
    ],
    careful: [
      { title: 'A passing build is not a good design', text: 'A site can build with no errors and still look generic. Only looking at it tells you.' },
      { title: 'It is a weak judge of its own design', text: 'When it says a page looks great, check for yourself.' },
      { title: 'Borrow ideas, not sites', text: 'Use references for direction. Another site\'s words, images and exact look are not yours to publish.' },
      { title: 'Pages can carry instructions', text: 'A page the AI reads can hide text telling it what to do. Treat what it reads as data.', cite: ['injection-unsolved'] },
    ],
    notes: [
      { title: 'Three designs rejected first', text: 'Warm paper with a serif, a printed annual, and cream with pastel green were all rejected. The one that stuck started from a real landing page I liked.' },
      { title: 'Shrunken screenshots mislead', text: 'A reviewer kept saying text was too small. Its full-page screenshots had been shrunk until detail was lost. Viewport shots of one section work better.' },
      { title: 'Motion needs a real browser', text: 'Screenshots cannot show how an animation feels. Check motion yourself, in a browser and on a phone.' },
    ],
    proof: [],
  },
  cyber: {
    uses: [
      {
        title: 'Make sense of logs and alerts',
        text: 'People doing IT admin tasks in a Microsoft lab trial were 34.53% more accurate with Security Copilot. It was a vendor test of its own product.',
        cite: ['security-copilot'],
        prompt: 'Here is a log with private details removed: [paste]. Explain it in plain English, say what looks unusual, and what I should check next. Mark anything you are guessing.',
      },
      {
        title: 'Draft a detection idea',
        text: 'AI can get you to a first rule quickly. You still need to test it against normal activity on sample data.',
        prompt: 'Write a Sigma rule to detect [behaviour] in [log source]. List likely false positives and how I could test it on sample data.',
      },
      {
        title: 'Learn how attacks work, to defend',
        text: 'Ask how a technique shows up in logs and how to stop it, so you practise thinking like a defender.',
        prompt: 'Explain password spraying to a beginner. How does it appear in logs, how would a defender spot it, and what stops it?',
      },
      {
        title: 'Write up what you found',
        text: 'A clear report is part of the job, and a good first task to hand to AI.',
        prompt: 'Turn these notes into a short incident summary: [notes with private details removed]. Cover what happened, the impact and next steps. List anything I did not confirm.',
      },
    ],
    steps: [
      { title: 'Get permission first', text: 'Only test systems you own or have written permission to test. Use a lab or sample data to practise.' },
      { title: 'Remove private details', text: 'Logs can hold names, addresses and internal hostnames, so strip them before pasting.' },
      { title: 'Treat the answer as a lead', text: 'Confirm every finding in the data yourself.' },
      { title: 'Keep humans on the response', text: 'A person should approve anything that blocks, deletes or changes a system.', cite: ['gov-playbook'] },
    ],
    careful: [
      { title: 'Attackers use these tools too', text: 'Anthropic reports a group it assesses as state-sponsored used Claude Code against roughly thirty targets. This is a vendor self-report, not independently verified.', cite: ['gtg-1002'] },
      { title: 'AI tools are targets as well', text: 'The NCSC and OWASP both treat prompt injection as unsolved, so limit what your security tools can do automatically.', cite: ['injection-unsolved'] },
    ],
    proof: ['security-copilot', 'gtg-1002', 'injection-unsolved'],
  },
  'other-fields': {
    fields: [
      {
        id: 'students', label: 'Students',
        text: 'A well-designed tutor can help you learn more in less time, as long as it makes you do the thinking.',
        cite: ['kestin', 'bastani'],
        prompt: 'Quiz me on [topic] from my notes: [paste]. One question at a time. Explain what I got wrong, and finish with what to revise.',
        check: 'Follow your course\'s AI rules, and test yourself with the tool closed.',
      },
      {
        id: 'developers', label: 'Developers',
        text: 'Use it to explore code, write tests and draft small changes. The [Code with AI guide](/coding) has the full method.',
        cite: ['peng', 'veracode'],
        prompt: 'Review this change as a strict senior engineer: [paste diff]. List bugs and security problems first, then anything that would be hard to maintain.',
        check: 'Run the tests, and read every change before you merge it.',
      },
      {
        id: 'health', label: 'Health',
        text: 'In two small trials, AI scribes cut time on clinical notes for one product and improved burnout measures. Patient outcomes were not measured.',
        cite: ['health'],
        prompt: 'Using this made-up case for practice: [case], draft a clear clinical note and flag anything missing or unclear.',
        check: 'Scribes made occasional significant errors, so a clinician checks every note. Keep real patient data out of unapproved tools.',
      },
      {
        id: 'law', label: 'Law',
        text: 'AI can help you understand and summarise documents, as long as you confirm every authority yourself.',
        cite: ['law-mata', 'law-database'],
        prompt: 'Summarise this judgment for a law student: [paste]. Give the facts, the issue and the reasoning, and quote the paragraph behind each point.',
        check: 'Find every case in an official database. One researcher lists 2,241 court decisions discussing AI fakes.',
      },
      {
        id: 'finance', label: 'Finance',
        text: 'Use it to explain concepts and draft analysis. Firms reportedly use AI widely, and regulators reportedly apply their existing rules.',
        cite: ['finance'],
        prompt: 'Explain [concept] to someone new to finance, with a worked example using simple numbers. Show each calculation so I can check it.',
        check: 'Recalculate every figure yourself. Keep client data out of unapproved tools.',
      },
    ],
    steps: [
      { title: 'Find the rules for your field', text: 'Courses, employers and regulators each set their own.' },
      { title: 'Start with low-stakes work', text: 'Practise on summaries, drafts and made-up cases.' },
      { title: 'Check what your field would check', text: 'Citations in law, figures in finance, notes in health, tests in code.' },
      { title: 'Keep the final call', text: 'Your name is on the work, so the decision stays with you.', cite: ['gov-playbook'] },
    ],
    careful: [
      { title: 'It can invent believable sources', text: 'A lawyer was sanctioned in 2023 over fabricated cases cited after using ChatGPT.', cite: ['law-mata'] },
      { title: 'Good evidence is still thin', text: 'Few studies here measure real outcomes. No finance outcome study was found, and the health trials did not measure patient results.', cite: ['health', 'finance'] },
    ],
    proof: ['health', 'law-mata', 'law-database', 'finance'],
  },
};

// The picker on the home page. `check` can link to a claim.
export const tasks = [
  {
    id: 'learn', label: 'Learn',
    weak: 'Explain photosynthesis.',
    better: 'Be my tutor on photosynthesis. I am in Year 12. Ask me one question at a time and do not give the answer until I have tried.',
    check: 'Test yourself later with the tool closed. Students who leaned on plain GPT-4 [did worse once it was gone](#bastani).',
  },
  {
    id: 'write', label: 'Write',
    weak: 'Write an email to my manager.',
    better: 'Here are my notes: [paste notes]. Draft a 150-word email asking my manager to move the deadline. Friendly and direct. List anything you assumed.',
    check: 'Read it aloud, then fix anything untrue or unlike you.',
  },
  {
    id: 'code', label: 'Code',
    weak: 'Fix my code.',
    better: 'This function fails on empty input: [paste code and error]. Explain the cause, then suggest the smallest fix and a test for it.',
    check: 'Run the test, and review the change like [a stranger\'s pull request](#veracode).',
  },
  {
    id: 'research', label: 'Research',
    weak: 'Tell me about remote work.',
    better: 'Summarise what studies say about remote work and productivity. Separate strong evidence from weak, link every source, and say what you are unsure about.',
    check: 'Open every link. A lawyer was [sanctioned for citing cases](#law-mata) that turned out to be fabricated.',
  },
  {
    id: 'decide', label: 'Decide',
    weak: 'Is this a good plan?',
    better: 'Here is my plan: [paste plan]. Give me the three strongest reasons it could fail, and what you would ask me before approving it.',
    check: 'Make the call yourself, because you know things the tool does not.',
  },
];

export const wins = [
  { value: '40% less time', text: 'on writing tasks for 453 professionals, with quality up 18%.', limit: 'Set tasks in an experiment.', claim: 'noy-zhang' },
  { value: '34% more resolved', text: 'per hour by novice support agents using an AI assistant.', limit: 'Experienced agents saw minimal change.', claim: 'brynjolfsson' },
  { value: '55.8% faster', text: 'on one coding task for programmers using GitHub Copilot.', limit: 'GitHub staff co-wrote it, and code quality was not studied.', claim: 'peng' },
  { value: 'More in less time', text: 'learned by college students with a custom AI tutor than in an active class.', limit: 'A purpose-built tutor, not a general chatbot.', claim: 'kestin' },
];

export const rules = [
  { title: 'Stay in charge', text: 'You own the result, so check names, numbers and sources before you use them.' },
  { title: 'Keep your skills', text: 'Try first and practise alone. Students who leaned on plain GPT-4 [did 17% worse](#bastani) once it was gone.' },
  { title: 'Protect what is not yours', text: 'Keep confidential data out of tools you have not been cleared to use. [Samsung reportedly restricted AI](#samsung) after staff pasted in code.' },
];

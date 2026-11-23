// Plain definitions for words a newcomer may not know. Shown as a dotted underline in guide
// text: hover or tap the word to see its meaning. General definitions written for this guide,
// not findings, so they carry no citation.
// `match` lists the exact forms to underline (case-insensitive, whole words only).
// `skip` lists guides where the word means something else (a person who is a "support agent").
export interface Entry { term: string; meaning: string; match: string[]; skip?: string[] }

export const glossary: Entry[] = [
  { term: 'Agent', meaning: 'An AI tool that does a job step by step on its own, such as reading files, running commands and checking the result, instead of only replying in a chat.', match: ['agent', 'agents', 'coding agent', 'coding agents', 'AI agent', 'AI agents'], skip: ['using-ai-well', 'employers', 'cyber'] },
  { term: 'Subagent', meaning: 'A helper agent your main agent starts for one part of a job. It works with a clean slate and reports back a short summary.', match: ['subagent', 'subagents'] },
  { term: 'Skill', meaning: 'A saved set of instructions for one kind of job, such as reviewing code. The AI loads it only when that job comes up.', match: ['skill', 'skills', 'custom skill'], skip: ['using-ai-well', 'employers', 'other-fields', 'cyber'] },
  { term: 'Plugin', meaning: 'A package you install into a tool such as Claude Code. It can bring several skills, agents and connectors at once.', match: ['plugin', 'plugins'] },
  { term: 'MCP', meaning: 'Model Context Protocol: a standard way to plug an AI tool into another app or data source, such as GitHub, Notion or a database.', match: ['MCP', 'MCP server', 'MCP servers'] },
  { term: 'Connector', meaning: 'A link that lets an AI tool read or act in another app, such as your email, calendar or GitHub. Many connectors use MCP.', match: ['connector', 'connectors'] },
  { term: 'Git', meaning: 'A tool that saves snapshots of your project, so you can see every change and go back to any earlier version.', match: ['git'] },
  { term: 'Commit', meaning: 'One saved snapshot of your project in git, with a short note about what changed.', match: ['commit', 'commits', 'committed'] },
  { term: 'Branch', meaning: 'A separate copy of your project\'s history in git, where changes can wait until you review and merge them.', match: ['branch', 'branches'] },
  { term: 'Diff', meaning: 'A view of exactly what changed in a file: lines added, removed or edited.', match: ['diff', 'diffs'] },
  { term: 'Pull request', meaning: 'A request to merge one branch into another, where the changes can be read and discussed first. Often shortened to PR.', match: ['pull request', 'pull requests'] },
  { term: 'Repository', meaning: 'A project folder tracked by git, often stored on GitHub. Often shortened to repo.', match: ['repository', 'repositories', 'repo', 'repos'] },
  { term: 'Worktree', meaning: 'A second working copy of the same git project, on its own branch, so two agents can work at once without touching each other\'s files.', match: ['worktree', 'worktrees'] },
  { term: 'Terminal', meaning: 'The text window where you type commands to your computer instead of clicking.', match: ['terminal'] },
  { term: 'Shell command', meaning: 'A line typed into the terminal that tells the computer to do something, such as run tests or delete a file.', match: ['shell command', 'shell commands', 'Bash command', 'Bash commands'] },
  { term: 'Hook', meaning: 'A command the tool runs by itself at a set moment, such as before every edit. The AI cannot skip it.', match: ['hook', 'hooks'] },
  { term: 'Permission rule', meaning: 'A setting that says what the tool may do on its own, what it must ask about first and what it must never do.', match: ['deny rule', 'deny rules', 'permission rules'] },
  { term: 'Plan mode', meaning: 'A mode where the AI reads and plans but does not change your files, so you can agree the approach first.', match: ['plan mode'] },
  { term: 'CLAUDE.md', meaning: 'A plain text file of standing instructions that Claude Code reads at the start of every session.', match: ['CLAUDE.md'] },
  { term: 'Token', meaning: 'A small chunk of text, often part of a word. AI tools count and limit use in tokens.', match: ['token', 'tokens'] },
  { term: 'Context', meaning: 'Everything the AI can see at once right now: your messages, its replies, files it has read and its instructions.', match: ['context window'] },
  { term: 'Prompt injection', meaning: 'Hidden text, for example in a web page or email, that tricks an AI tool into following instructions it should ignore.', match: ['prompt injection'] },
  { term: 'Deploy', meaning: 'Putting a new version of a site or app live, where real people can use it.', match: ['deploy', 'deploys', 'production deploys'] },
  { term: 'Markdown', meaning: 'Plain text with a few simple marks, such as # for a heading and - for a list.', match: ['Markdown'] },
  { term: 'Checkpoint', meaning: 'A copy of your files saved automatically before the AI changes them, so its edits can be undone.', match: ['checkpoint', 'checkpoints'] },
  { term: 'Auto mode', meaning: 'A Claude Code mode that runs most actions without asking you, and blocks ones it judges risky.', match: ['auto mode'] },
  { term: 'Benchmark', meaning: 'A standard test used to compare AI models. It is built for measuring, not real work.', match: ['benchmark', 'benchmarks'] },
  { term: 'API', meaning: 'A way for one program to talk to another. Developers use the AI company\'s API to build it into their own apps.', match: ['API'] },
];

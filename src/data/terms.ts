// Plain explanations of research terms. These are general definitions written for
// this guide, not findings, so they carry no citation.
export const terms: Record<string, { term: string; meaning: string }[]> = {
  'using-ai-well': [
    { term: 'Randomized trial', meaning: 'A test where chance decides who or what gets the tool, so the groups can be compared fairly.' },
    { term: 'Confidence interval', meaning: 'A range of results the data fits. If it includes zero, the data cannot rule out no effect.' },
    { term: 'Self-selected survey', meaning: 'People chose to answer, so they may not represent everyone.' },
    { term: 'Vendor', meaning: 'A company that sells the product being discussed, so it has an interest in the result.' },
  ],
  'set-up-your-tools': [
    { term: 'Token', meaning: 'A small chunk of text. AI tools measure and often charge by tokens.' },
    { term: 'Context', meaning: 'Everything the model can see right now, including your conversation so far.' },
    { term: 'Agent', meaning: 'An AI tool that takes steps on its own, such as reading files or running commands.' },
    { term: 'MCP', meaning: 'Model Context Protocol, a standard way to connect AI tools to other apps and data.' },
  ],
  usage: [
    { term: 'Rate limit', meaning: 'A cap on how much you can use in a set time. Claude plans have one that resets every five hours and one that resets weekly.' },
    { term: 'Cache read', meaning: 'Text the tool has already sent once and sends again from a stored copy, priced lower than new text.' },
    { term: 'Transcript', meaning: 'The saved record of a chat, kept on your computer.' },
  ],
  'second-brain': [
    { term: 'Second brain', meaning: 'Notes kept outside your head, here in files an AI can also read.' },
    { term: 'Markdown', meaning: 'Plain text with a few simple marks, such as # for a heading.' },
    { term: 'Vault', meaning: 'Obsidian\'s name for a folder of Markdown notes.' },
    { term: 'Branch', meaning: 'A separate line of changes in git that you can review before merging.' },
  ],
  safety: [
    { term: 'Prompt injection', meaning: 'Hidden or malicious text that tricks an AI tool into following instructions it should ignore.' },
    { term: 'Framework', meaning: 'An agreed list of risks and good practice. It guides work but does not measure how often harm happens.' },
    { term: 'Data leakage', meaning: 'Private information reaching someone it should not, for example by being pasted into an outside tool.' },
  ],
  employers: [
    { term: 'Descriptive, not causal', meaning: 'The study shows a pattern, but does not prove what caused it.' },
    { term: 'Acceptable-use policy', meaning: 'A company rule setting out how staff may and may not use a tool.' },
    { term: 'Representative sample', meaning: 'A group chosen to reflect the wider population. Selected examples are not one.' },
  ],
  coding: [
    { term: 'Synthetic benchmark', meaning: 'A standard test built for measuring, not real work.' },
    { term: 'OWASP Top 10', meaning: 'A well-known list of common web security risks. It is separate from OWASP\'s list for AI apps.' },
    { term: 'Mature repository', meaning: 'A long-running code project the developer already knows well.' },
  ],
  'build-sites': [
    { term: 'Reference site', meaning: 'A real site you show the AI as an example of what you want.' },
    { term: 'Design system', meaning: 'The agreed colours, type, spacing and parts a site is built from.' },
    { term: 'Viewport', meaning: 'The part of a page visible on screen at once.' },
  ],
  cyber: [
    { term: 'Prompt injection', meaning: 'Hidden or malicious text that tricks an AI tool into following instructions it should ignore.' },
    { term: 'SOC', meaning: 'A security operations centre: the team that watches for and responds to attacks.' },
    { term: 'Self-report', meaning: 'A company describing its own findings, without an outside check.' },
  ],
  'other-fields': [
    { term: 'Ambient AI scribe', meaning: 'A tool that listens to a medical appointment and drafts the notes.' },
    { term: 'Hallucination', meaning: 'When an AI tool states something false as if it were true, such as a court case that does not exist.' },
    { term: 'Outcome study', meaning: 'Research measuring real end results, such as patient health, rather than time saved.' },
  ],
};

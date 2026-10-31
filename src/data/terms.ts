// Plain explanations of research terms. These are general definitions written for
// this guide, not findings, so they carry no citation.
export const terms: Record<string, { term: string; meaning: string }[]> = {
  'using-ai-well': [
    { term: 'Randomized trial', meaning: 'A test where chance decides who or what gets the tool, so the groups can be compared fairly.' },
    { term: 'Confidence interval', meaning: 'The range the true result probably falls in. If it includes zero, there may be no real effect.' },
    { term: 'Self-selected survey', meaning: 'People chose to answer, so they may not represent everyone.' },
    { term: 'Vendor', meaning: 'A company that sells the product being discussed, so it has an interest in the result.' },
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
    { term: 'Synthetic benchmark', meaning: 'A set test made for measuring, rather than real work.' },
    { term: 'OWASP Top 10', meaning: 'A well-known list of common security risks in software.' },
    { term: 'Mature repository', meaning: 'A long-running code project the developer already knows well.' },
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

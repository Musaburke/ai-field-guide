// Short visual forms of claims already in guide.ts and display.ts. No new facts.
export interface Bar { label: string; value: number; show: string; strong?: boolean }
export interface Panel { big?: string; label?: string; caption?: string; bars?: Bar[] }

export const panels: Record<string, Panel> = {
  'metr-2025': { bars: [
    { label: 'Without AI', value: 100, show: 'Baseline' },
    { label: 'With AI', value: 119, show: '19% longer', strong: true },
  ] },
  'anthropic-rct': { bars: [
    { label: 'No AI', value: 67, show: '67%', strong: true },
    { label: 'With AI', value: 50, show: '50%' },
  ] },
  'metr-2026': { label: '"Only very weak evidence" for the size of the increase' },
  bastani: { big: '17% worse', caption: 'On later unassisted exams, as reported' },
  canaries: { big: '19% below', caption: 'Employment of 22-to-25-year-olds in AI-exposed jobs, against peers. Descriptive, not causal.' },
  finance: { big: '75%', caption: 'Of firms using AI, as reportedly surveyed in 2024' },
  'gtg-1002': { big: '~30 targets', caption: 'A vendor self-report, not independently verified' },
  'injection-unsolved': { big: 'Unsolved', caption: 'Prompt injection, according to the NCSC and OWASP' },
  health: { label: 'Measured: time and burnout. Not measured: patient outcomes.' },
  'mit-pilots': { label: 'Criticised, so not used as evidence here' },
  'eu-ai-act': { label: 'Check the EU Official Journal' },
  wef: { label: 'AI and big data among the fastest-growing skills, according to summaries' },
  'ceo-memos': { label: '"Reflexive AI usage" and "AI-first"' },
};

export const blurbs: Record<string, string> = {
  'using-ai-well': 'Does it make people faster? The results are mixed.',
  safety: 'The risks, and what official guidance says.',
  employers: 'What employers say they want from you.',
  coding: 'Speed, learning and the security of AI code.',
  cyber: 'AI used by attackers, and AI as a target.',
  'other-fields': 'Healthcare, law, finance and education.',
};

export const sourceNames = ['METR', 'NIST', 'OWASP', 'UK NCSC', 'DORA', 'Stack Overflow', 'EU AI Act'];

// Line icons for the chapter cards (24 x 24, stroked).
export const icons: Record<string, string> = {
  'using-ai-well': 'M4 18l5-6 4 3 7-9M15 6h5v5',
  safety: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3zM9 12l2 2 4-4',
  employers: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  coding: 'M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14',
  cyber: 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14v9H5zM12 15v2',
  'other-fields': 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
};

// Shorter chapter openings where the full intro repeats the short answer below it.
export const leads: Record<string, string> = {
  coding: 'What the studies show about speed, learning and the security of AI-written code. The fuller trials are in [Using AI well](/using-ai-well).',
};

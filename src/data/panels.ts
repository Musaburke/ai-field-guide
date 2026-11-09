// Short home page text and icons. No new facts.

// The three groups on the home page and in the Guides menu. Order matches `sections`.
export const groups = [
  { id: 'start', title: 'Start here', line: 'The habits and setup that make every other guide work.', guides: ['using-ai-well', 'set-up-your-tools', 'usage', 'second-brain'] },
  { id: 'build', title: 'Build with AI', line: 'Code and websites, with a way to check the result.', guides: ['coding', 'build-sites'] },
  { id: 'care', title: 'Use it responsibly', line: 'Data, security, work and the rules of your field.', guides: ['safety', 'cyber', 'employers', 'other-fields'] },
];
export const groupOf = (id: string) => groups.find((g) => g.guides.includes(id))!;

export const blurbs: Record<string, string> = {
  'using-ai-well': 'Draft, learn and think faster, and keep your own skills.',
  'set-up-your-tools': 'Models, usage, plan mode, skills, agents and more.',
  usage: 'See your limits, make them last and read the numbers right.',
  'second-brain': 'Notes the AI can read, so each chat starts where you left off.',
  safety: 'Protect your data and limit what AI tools can reach.',
  employers: 'What employers say they want, and how to show it.',
  coding: 'Build faster, and review AI code like a stranger\'s.',
  'build-sites': 'Reference sites, design systems and a screenshot review loop.',
  cyber: 'How attackers use AI, and how AI tools get attacked.',
  'other-fields': 'Students, developers, health, law and finance.',
};

// Line icons for the chapter cards (24 x 24, stroked).
export const icons: Record<string, string> = {
  'using-ai-well': 'M4 18l5-6 4 3 7-9M15 6h5v5',
  'set-up-your-tools': 'M4 7h10M18 7h2M4 17h2M10 17h10M14 5v4h4V5zM6 15v4h4v-4z',
  usage: 'M4 16a8 8 0 0 1 16 0M12 16l4-5M3 20h18',
  'second-brain': 'M6 3h12v18H6zM9 3v18M12 8h3M12 12h3',
  safety: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3zM9 12l2 2 4-4',
  employers: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  coding: 'M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14',
  'build-sites': 'M3 5h18v14H3zM3 9h18M7 13h6M7 16h4',
  cyber: 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14v9H5zM12 15v2',
  'other-fields': 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
};


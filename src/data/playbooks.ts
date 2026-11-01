// The practical layer of each guide. Prompts and steps are this guide's own advice, not
// study findings. `cite` lists the claims (guide.ts) that a line relies on.
export interface Use { title: string; text: string; cite?: string[]; prompt: string }
export interface Line { title: string; text: string; cite?: string[] }
export interface Playbook { uses: Use[]; steps: Line[]; careful: Line[]; proof: string[] }

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

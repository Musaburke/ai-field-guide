import { useMemo, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import type { Cite } from '../lib/content';
import type { Flag, Read } from '../data/guide';
import Citation from './Citation';
import { Flags, ReadLine } from './Evidence';
import Rich from './Rich';

export interface Row {
  id: string;
  text: string;
  read: Read;
  strength: string;
  flags: Flag[];
  note?: string;
  chapter: string;
  chapterTitle: string;
  cite: Cite;
}

type Mode = 'most' | 'least' | 'contested' | 'vendor' | 'unresolved';

const modes: { id: Mode; label: string }[] = [
  { id: 'most', label: 'Most read first' },
  { id: 'least', label: 'Least read first' },
  { id: 'contested', label: 'Contested first' },
  { id: 'vendor', label: 'Vendor first' },
  { id: 'unresolved', label: 'Unresolved first' },
];

const rank: Record<Read, number> = { page: 0, partial: 1, snippet: 2 };

function score(r: Row, mode: Mode): number {
  if (mode === 'most') return rank[r.read];
  if (mode === 'least') return -rank[r.read];
  return r.flags.includes(mode) ? 0 : 1;
}

function matches(r: Row, mode: Mode): boolean {
  if (mode === 'most') return r.read === 'page';
  if (mode === 'least') return r.read === 'snippet';
  return r.flags.includes(mode);
}

const summary: Record<Mode, (n: number, total: number) => string> = {
  most: (n, t) => `${n} of ${t} claims were checked on the source page. They come first.`,
  least: (n, t) => `${n} of ${t} claims rest on a search summary only. They come first.`,
  contested: (n, t) => `${n} of ${t} claims are contested. They come first.`,
  vendor: (n, t) => `${n} of ${t} claims rest on a vendor or interested party. They come first.`,
  unresolved: (n, t) => `${n} of ${t} claims ${n === 1 ? 'is' : 'are'} unresolved. ${n === 1 ? 'It comes' : 'They come'} first.`,
};

const spring = { type: 'spring', bounce: 0, duration: 0.5 } as const;

export default function EvidenceFilter({ rows }: { rows: Row[] }) {
  const [mode, setMode] = useState<Mode>('most');
  const ordered = useMemo(
    () => rows.map((r, i) => ({ r, i })).sort((a, b) => score(a.r, mode) - score(b.r, mode) || a.i - b.i).map((x) => x.r),
    [rows, mode],
  );
  const count = rows.filter((r) => matches(r, mode)).length;

  return (
    <MotionConfig reducedMotion="user">
      <div className="filter">
        <fieldset className="axis-hang">
          <legend>Put these first</legend>
          <div className="filter-options">
            {modes.map((m) => (
              <label key={m.id} className="filter-option" data-on={mode === m.id || undefined}>
                <input type="radio" name="rank" value={m.id} checked={mode === m.id} onChange={() => setMode(m.id)} />
                <span>{m.label}</span>
              </label>
            ))}
          </div>
          <p className="filter-count" role="status">{summary[mode](count, rows.length)}</p>
        </fieldset>
      </div>
      <ol className="ranked">
        {ordered.map((r) => (
          <motion.li key={r.id} id={r.id} layout="position" transition={spring} className="ranked-row" data-match={matches(r, mode) || undefined}>
            <div className="ranked-side">
              <ReadLine read={r.read} />
              <Flags flags={r.flags} />
              <p>Strength: {r.strength}</p>
            </div>
            <div className="ranked-main">
              <p><Rich text={r.text} current="/evidence" /> <Citation cite={r.cite} current="/evidence" /></p>
              {r.note && <p className="ranked-note"><Rich text={r.note} current="/evidence" /></p>}
              <p><a href={`/${r.chapter}#${r.id}`}>In {r.chapterTitle}</a></p>
            </div>
          </motion.li>
        ))}
      </ol>
    </MotionConfig>
  );
}

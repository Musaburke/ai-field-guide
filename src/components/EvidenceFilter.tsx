import { useMemo, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import type { Cite } from '../lib/content';
import type { Flag, Read } from '../data/guide';
import Citation from './Citation';
import { Flags, Meter, ReadLine } from './Evidence';
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

interface Tier { key: string; title: string; read?: Read; rows: Row[] }

const readTitle: Record<Read, string> = {
  page: 'Source page read',
  partial: 'Partly read',
  snippet: 'Search summary only',
};
const flagTitle: Record<Flag, string> = {
  contested: 'Contested',
  vendor: 'Vendor or interested party',
  unresolved: 'Unresolved',
};

function tiersFor(rows: Row[], mode: Mode): Tier[] {
  if (mode === 'most' || mode === 'least') {
    const order: Read[] = mode === 'most' ? ['page', 'partial', 'snippet'] : ['snippet', 'partial', 'page'];
    return order.map((r) => ({ key: r, title: readTitle[r], read: r, rows: rows.filter((x) => x.read === r) }));
  }
  return [
    { key: mode, title: flagTitle[mode], rows: rows.filter((x) => x.flags.includes(mode)) },
    { key: 'rest', title: 'Everything else', rows: rows.filter((x) => !x.flags.includes(mode)) },
  ];
}

const tones = ['accent', 'ink', 'second'];
const spring = { type: 'spring', bounce: 0, duration: 0.5 } as const;

export default function EvidenceFilter({ rows }: { rows: Row[] }) {
  const [mode, setMode] = useState<Mode>('most');
  const [open, setOpen] = useState<Set<string>>(new Set());
  const changed = useRef(false);
  const tiers = useMemo(() => tiersFor(rows, mode), [rows, mode]);
  const showRead = mode !== 'most' && mode !== 'least';

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <MotionConfig reducedMotion="user">
      <div className="filter">
        <div className="filter-grid" role="radiogroup" aria-labelledby="filter-label">
          <span id="filter-label" className="filter-legend">Put these first</span>
          <div className="filter-options">
            {modes.map((m) => (
              <label key={m.id} className="filter-option" data-on={mode === m.id || undefined}>
                <input
                  type="radio"
                  name="rank"
                  value={m.id}
                  checked={mode === m.id}
                  onChange={() => {
                    changed.current = true;
                    setMode(m.id);
                  }}
                />
                <span>{m.label}</span>
              </label>
            ))}
          </div>
        </div>
        <p className="visually-hidden" role="status">
          {tiers.map((t) => `${t.title}: ${t.rows.length}`).join('. ')}
        </p>
      </div>

      {/* Re-rank is a soft cross-fade of the list. Transform and opacity only. */}
      <motion.div
        key={mode}
        initial={changed.current ? { opacity: 0, transform: 'translateY(12px)' } : false}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={spring}
      >
        {tiers.map((t, i) => (
          <section key={t.key} className="tier" data-tone={tones[i]} aria-labelledby={`tier-${t.key}`}>
            <div className="tier-side">
              <div className="tier-head">
                <p className="tier-count">{t.rows.length}</p>
                <h2 id={`tier-${t.key}`} className="tier-title">{t.title}</h2>
                {t.read && <Meter read={t.read} />}
              </div>
            </div>
            <ol className="tier-rows">
              {t.rows.map((r) => {
                const isOpen = open.has(r.id);
                return (
                  <li key={r.id} id={r.id} className="ranked-row" data-open={isOpen || undefined}>
                    <p><Rich text={r.text} current="/evidence" /> <Citation cite={r.cite} current="/evidence" /></p>
                    <div className="ranked-meta">
                      {showRead && <ReadLine read={r.read} />}
                      <Flags flags={r.flags} />
                      <button
                        type="button"
                        className="ranked-more"
                        aria-expanded={isOpen}
                        aria-controls={`more-${r.id}`}
                        onClick={() => toggle(r.id)}
                      >
                        Strength and limits
                        <svg className="claim-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="3" y="10.5" width="18" height="3" />
                          <rect className="claim-icon-v" x="10.5" y="3" width="3" height="18" />
                        </svg>
                      </button>
                    </div>
                    <div className="ranked-body" id={`more-${r.id}`}>
                      <p>Strength: {r.strength}</p>
                      {r.note && <p><Rich text={r.note} current="/evidence" /></p>}
                      <p><a href={`/${r.chapter}#${r.id}`}>In {r.chapterTitle}</a></p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </motion.div>
    </MotionConfig>
  );
}

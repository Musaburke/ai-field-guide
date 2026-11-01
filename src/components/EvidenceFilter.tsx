import { useMemo, useState } from 'react';
import type { Flag, Read } from '../data/guide';
import { Meter } from './Evidence';
import Rich from './Rich';

export interface Row {
  id: string;
  title: string;
  source: string;
  date?: string;
  read: Read;
  flags: Flag[];
  chapter: string;
  chapterTitle: string;
  text: string;
  note?: string;
  strength: string;
}

const readShort: Record<Read, string> = { page: 'Read', partial: 'Partly read', snippet: 'Summary only' };
const flagShort: Record<Flag, string> = { contested: 'Contested', vendor: 'Vendor', unresolved: 'Unresolved' };

type Test = (r: Row) => boolean;
const filters: { id: string; label: string; test: Test }[] = [
  { id: 'all', label: 'All', test: () => true },
  { id: 'page', label: 'Source read', test: (r) => r.read === 'page' },
  { id: 'partial', label: 'Partly read', test: (r) => r.read === 'partial' },
  { id: 'snippet', label: 'Summary only', test: (r) => r.read === 'snippet' },
  { id: 'contested', label: 'Contested', test: (r) => r.flags.includes('contested') },
  { id: 'vendor', label: 'Vendor', test: (r) => r.flags.includes('vendor') },
];

export default function EvidenceFilter({ rows }: { rows: Row[] }) {
  const [active, setActive] = useState('all');
  const shown = useMemo(() => rows.filter(filters.find((f) => f.id === active)!.test), [rows, active]);
  const chapters = [...new Set(shown.map((r) => r.chapter))];
  return (
    <>
      <div className="tabs" role="group" aria-label="Filter the sources">
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={active === f.id} onClick={() => setActive(f.id)}>
            {f.label}<b>{rows.filter(f.test).length}</b>
          </button>
        ))}
      </div>
      <p className="vh" role="status">{shown.length} sources shown</p>
      <div key={active}>
        {chapters.map((ch) => {
          const group = shown.filter((r) => r.chapter === ch);
          return (
            <section className="index-group" key={ch}>
              <h3><a href={`/${ch}`}>{group[0]!.chapterTitle}</a></h3>
              <ul className="index-rows">
                {group.map((r) => (
                  <li key={r.id}>
                    <details className="index-row" id={r.id}>
                      <summary>
                        <span className="index-title">{r.title}</span>
                        <span className="index-source">{r.source}</span>
                        <span className="index-flags">
                          {r.flags.map((f) => <span className="index-flag" key={f}>{flagShort[f]}</span>)}
                          <span className="index-read"><Meter read={r.read} />{readShort[r.read]}</span>
                        </span>
                      </summary>
                      <div className="index-detail">
                        <p><Rich text={r.text} current="/sources" /></p>
                        {r.note && <p className="soft"><Rich text={r.note} current="/sources" /></p>}
                        <p className="soft">Strength: {r.strength}{r.date ? ` · ${r.date}` : ''}</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}

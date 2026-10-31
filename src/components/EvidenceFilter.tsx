import { useMemo, useState } from 'react';
import type { Cite } from '../lib/content';
import type { Flag, Read } from '../data/guide';
import Citation from './Citation';
import { Flags, ReadLine } from './Evidence';
import Rich from './Rich';

export interface Row {
  id: string;
  label: string;
  text: string;
  read: Read;
  strength: string;
  flags: Flag[];
  note?: string;
  chapter: string;
  chapterTitle: string;
  cite: Cite;
}

type Test = (r: Row) => boolean;
const filters: { id: string; label: string; test: Test }[] = [
  { id: 'page', label: 'Source read', test: (r) => r.read === 'page' },
  { id: 'partial', label: 'Partly read', test: (r) => r.read === 'partial' },
  { id: 'snippet', label: 'Summary only', test: (r) => r.read === 'snippet' },
  { id: 'contested', label: 'Contested', test: (r) => r.flags.includes('contested') },
  { id: 'vendor', label: 'Vendor', test: (r) => r.flags.includes('vendor') },
  { id: 'unresolved', label: 'Unresolved', test: (r) => r.flags.includes('unresolved') },
];

export default function EvidenceFilter({ rows }: { rows: Row[] }) {
  const [active, setActive] = useState('page');
  const shown = useMemo(() => rows.filter(filters.find((f) => f.id === active)!.test), [rows, active]);
  return (
    <>
      <div className="tabs" role="group" aria-label="Filter claims">
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={active === f.id} onClick={() => setActive(f.id)}>
            {f.label}<b>{rows.filter(f.test).length}</b>
          </button>
        ))}
      </div>
      <p className="vh" role="status">{shown.length} claims shown</p>
      <div className="claims" key={active}>
        {shown.map((r) => (
          <article className="claim-card" key={r.id} id={r.id}>
            <h3>{r.label}</h3>
            <p><Rich text={r.text} current="/evidence" /> <Citation cite={r.cite} current="/evidence" /></p>
            {r.note && <p className="row-note"><Rich text={r.note} current="/evidence" /></p>}
            <div className="claim-foot">
              <ReadLine read={r.read} />
              <Flags flags={r.flags} />
              <a href={`/${r.chapter}#${r.id}`}>{r.chapterTitle}</a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

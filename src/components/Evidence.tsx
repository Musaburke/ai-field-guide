import { flagLabel, readLabel, type Flag, type Read } from '../data/guide';

const filled: Record<Read, number> = { page: 3, partial: 2, snippet: 1 };

/** Three rising bars. Form, not colour, says how far the source was read. */
export function Meter({ read }: { read: Read }) {
  return (
    <span className="meter" aria-hidden="true">
      {[1, 2, 3].map((i) => (
        <span key={i} className={i <= filled[read] ? 'meter-on' : 'meter-off'} />
      ))}
    </span>
  );
}

const marks: Record<Flag, React.ReactNode> = {
  contested: <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 2v10A5 5 0 0 1 8 3Z" fillRule="evenodd" />,
  vendor: <path d="M8 1l7 7-7 7-7-7 7-7Z" />,
  unresolved: <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" fillRule="evenodd" />,
};

export function Flags({ flags }: { flags?: Flag[] }) {
  if (!flags?.length) return null;
  return (
    <ul className="flags">
      {flags.map((f) => (
        <li key={f}>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">{marks[f]}</svg>
          {flagLabel[f]}
        </li>
      ))}
    </ul>
  );
}

export function ReadLine({ read }: { read: Read }) {
  return (
    <span className="read-line">
      <Meter read={read} />
      <span>{readLabel[read]}</span>
    </span>
  );
}

/** One bar per claim. A chapter's reading profile at a glance. */
export function Profile({ reads }: { reads: Read[] }) {
  return (
    <span className="profile" aria-hidden="true">
      {reads.map((r, i) => (
        <span key={i} className={`profile-${r}`} />
      ))}
    </span>
  );
}

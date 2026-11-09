import { useEffect, useRef, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import type { Cite } from '../lib/content';
import { Flags, ReadLine } from './Evidence';
import Rich from './Rich';

/**
 * Server and no-JS: a link to the sources list at the foot of the page.
 * After hydration: a real button that opens a popover from the chip.
 */
export default function Citation({ cite, current }: { cite: Cite; current?: string }) {
  const [ready, setReady] = useState(false);
  const link = useRef<HTMLAnchorElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const hadFocus = useRef(false);

  useEffect(() => {
    hadFocus.current = document.activeElement === link.current;
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready && hadFocus.current) trigger.current?.focus();
  }, [ready]);

  const name = `Source ${cite.n}: ${cite.label}`;
  if (!ready) {
    return <a ref={link} className="chip" href={`#src-${cite.n}`} aria-label={name}>{cite.n}</a>;
  }
  return (
    <Popover.Root>
      <Popover.Trigger ref={trigger} className="chip" aria-label={name}>{cite.n}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="pop" side="bottom" align="center" sideOffset={8} collisionPadding={16}>
          <p className="pop-title">{cite.label}</p>
          <ul className="pop-links">
            {cite.links.map((l) => (
              <li key={l.url}><a href={l.url} rel="noopener noreferrer">{l.label}</a></li>
            ))}
          </ul>
          {cite.date && <p>{cite.date}</p>}
          <ReadLine read={cite.read} />
          {cite.strength && <p>Strength: {cite.strength}</p>}
          <Flags flags={cite.flags} />
          {cite.note && <p className="pop-note"><Rich text={cite.note} current={current} /></p>}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

import { useEffect, useRef, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';

/**
 * A word with a plain definition. Server and no-JS: the word with its meaning as a tooltip.
 * After hydration: a button that opens the meaning on hover (mouse) or tap and keyboard.
 */
export default function Term({ text, term, meaning }: { text: string; term: string; meaning: string }) {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const mouse = useRef(false);

  useEffect(() => setReady(true), []);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (!ready) return <span className="gloss" title={`${term}: ${meaning}`}>{text}</span>;

  const enter = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    window.clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    timer.current = window.setTimeout(() => setOpen(false), 160);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        className="gloss"
        aria-label={`${text}: what this means`}
        onPointerEnter={enter}
        onPointerLeave={leave}
        onPointerDown={(e) => { mouse.current = e.pointerType === 'mouse'; }}
        // Hover already opened it; a mouse click should not close it again.
        onClick={(e) => { if (mouse.current && open) e.preventDefault(); }}
      >
        {text}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="pop pop-gloss"
          side="top"
          align="center"
          sideOffset={6}
          collisionPadding={16}
          onPointerEnter={enter}
          onPointerLeave={leave}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <p className="pop-title">{term}</p>
          <p>{meaning}</p>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

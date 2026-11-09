import { parseLinks, resolveHref } from '../lib/content';

/** Renders [label](url) text. Plain strings only: no raw HTML is ever injected. */
export default function Rich({ text, current }: { text: string; current?: string }) {
  return (
    <>
      {parseLinks(text).map((p, i) =>
        p.href ? (
          <a key={i} href={resolveHref(p.href, current)} {...(p.href.startsWith('http') ? { rel: 'noopener noreferrer' } : {})}>
            {p.t}
          </a>
        ) : (
          p.t
        ),
      )}
    </>
  );
}

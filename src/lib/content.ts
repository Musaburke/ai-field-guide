import { sections, forecasts, readLabel, type Claim, type Flag, type Forecast, type Read } from '../data/guide';
import { claimDate, claimLabel } from '../data/display';

export interface Part { t: string; href?: string }

export function parseLinks(text: string): Part[] {
  const parts: Part[] = [];
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    const i = m.index ?? 0;
    if (i > last) parts.push({ t: text.slice(last, i) });
    parts.push({ t: m[1], href: m[2] });
    last = i + m[0].length;
  }
  if (last < text.length) parts.push({ t: text.slice(last) });
  return parts;
}

export const allClaims: (Claim & { chapter: string; chapterTitle: string })[] = sections.flatMap((s) =>
  s.claims.map((c) => ({ ...c, chapter: s.id, chapterTitle: s.title })),
);

const home = new Map<string, string>(allClaims.map((c) => [c.id, `/${c.chapter}`]));
forecasts.forEach((f) => home.set(f.id, '/forecasts'));

/** The one helper for in-text anchors: `#metr-2025` becomes the route that holds it. */
export function resolveHref(href: string, current?: string): string {
  if (!href.startsWith('#')) return href;
  const id = href.slice(1);
  const route = home.get(id);
  if (!route) throw new Error(`Anchor ${href} matches no claim or forecast`);
  return route === current ? href : `${route}${href}`;
}

export const claimHref = (id: string, current?: string) => resolveHref(`#${id}`, current);

export interface Cite {
  n: number;
  id: string;
  label: string;
  links: { label: string; url: string }[];
  date?: string;
  read: Read;
  readText: string;
  strength?: string;
  flags: Flag[];
  note?: string;
}

function findItem(id: string): Claim | Forecast {
  const item = allClaims.find((c) => c.id === id) ?? forecasts.find((f) => f.id === id);
  if (!item) throw new Error(`Unknown claim ${id}`);
  return item;
}

/** Numbering is per page, generated from the order items appear on that page. */
export function numberCites(ids: string[]): Map<string, Cite> {
  const out = new Map<string, Cite>();
  for (const id of ids) {
    if (out.has(id)) continue;
    const item = findItem(id);
    const isForecast = 'caveat' in item;
    out.set(id, {
      n: out.size + 1,
      id,
      label: claimLabel[id] ?? id,
      links: parseLinks(item.text)
        .filter((p) => p.href?.startsWith('http'))
        .map((p) => ({ label: p.t, url: p.href! })),
      date: claimDate[id],
      read: item.read,
      readText: readLabel[item.read],
      strength: isForecast ? undefined : item.strength,
      flags: item.flags ?? [],
      note: isForecast ? item.caveat : item.note,
    });
  }
  return out;
}

export const readRank: Record<Read, number> = { page: 0, partial: 1, snippet: 2 };

export function readCounts(items: { read: Read }[]) {
  return {
    page: items.filter((i) => i.read === 'page').length,
    partial: items.filter((i) => i.read === 'partial').length,
    snippet: items.filter((i) => i.read === 'snippet').length,
  };
}

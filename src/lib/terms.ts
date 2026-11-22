import { glossary, type Entry } from '../data/glossary';

/** A run of guide text: plain, a `code` span, or a word from the glossary. */
export interface Seg { t: string; code?: boolean; term?: { term: string; meaning: string } }

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Returns a marker for one block of a guide. It splits text into segments and underlines the
 * first use of each glossary word in that block, so each section explains its own words.
 */
export function marker(page: string) {
  const entries = glossary.filter((e) => !e.skip?.includes(page));
  const forms = entries
    .flatMap((e) => e.match.map((m) => ({ m, e })))
    .sort((a, b) => b.m.length - a.m.length);
  const byForm = new Map<string, Entry>(forms.map((f) => [f.m.toLowerCase(), f.e]));
  // Whole words only; "." inside CLAUDE.md is part of the word.
  const re = new RegExp(`(?<![\\w./-])(${forms.map((f) => escape(f.m)).join('|')})(?![\\w-]|\\.\\w)`, 'gi');
  const seen = new Set<string>();

  return (text: string): Seg[] => {
    const out: Seg[] = [];
    text.split(/`([^`]+)`/).forEach((part, n) => {
      if (n % 2) return out.push({ t: part, code: true });
      let last = 0;
      for (const m of part.matchAll(re)) {
        const e = byForm.get(m[0].toLowerCase());
        if (!e || seen.has(e.term)) continue;
        seen.add(e.term);
        const i = m.index ?? 0;
        if (i > last) out.push({ t: part.slice(last, i) });
        out.push({ t: m[0], term: { term: e.term, meaning: e.meaning } });
        last = i + m[0].length;
      }
      if (last < part.length) out.push({ t: part.slice(last) });
    });
    return out;
  };
}

/** Glossary entries by name, for a guide's "Before you start" list. */
export const define = (names: string[]) =>
  names.map((n) => {
    const e = glossary.find((g) => g.term === n);
    if (!e) throw new Error(`No glossary entry for ${n}`);
    return e;
  });

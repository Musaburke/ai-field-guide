// Word rise, reveals and the typed rotator, adapted from the portfolio's motion.ts.
// Content stays in the DOM and visible without JS; this only adds the travel.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  let i = 0;
  const walk = (node: Node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        for (const part of (child.textContent ?? '').split(/(\s+)/)) {
          if (!part) continue;
          if (/^\s+$/.test(part)) { frag.append(part); continue; }
          const w = document.createElement('span');
          w.className = 'w';
          const inner = document.createElement('span');
          inner.style.setProperty('--i', String(i++));
          inner.textContent = part;
          w.append(inner);
          frag.append(w);
        }
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && !(child as HTMLElement).matches('[data-rotate]')) {
        walk(child);
      }
    }
  };
  walk(el);
});

const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-split]');
if (reduce) {
  targets.forEach((t) => t.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach((t) => io.observe(t));
}

const rot = document.querySelector<HTMLElement>('[data-rotate]');
if (rot && !reduce) {
  const words = (rot.dataset.rotate ?? '').split('|');
  let word = 0, n = words[0]!.length, deleting = true;
  const step = () => {
    if (document.hidden) { setTimeout(step, 600); return; }
    const cur = words[word]!;
    n += deleting ? -1 : 1;
    rot.textContent = cur.slice(0, Math.max(n, 0));
    if (deleting && n <= 0) { deleting = false; word = (word + 1) % words.length; n = 0; setTimeout(step, 220); return; }
    if (!deleting && n >= words[word]!.length) { deleting = true; setTimeout(step, 2400); return; }
    setTimeout(step, deleting ? 45 : 85);
  };
  setTimeout(step, 2400);
}

// Reading progress in the navbar, and stacked evidence cards that settle back as the next arrives.
const bar = document.querySelector<HTMLElement>('[data-progress]');
const stack = [...document.querySelectorAll<HTMLElement>('[data-stack]')];
let queued = false;
const frame = () => {
  queued = false;
  if (bar) {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  }
  if (!matchMedia('(min-width: 900px) and (min-height: 700px)').matches) {
    stack.forEach((c) => { (c.firstElementChild as HTMLElement).style.transform = ''; });
    return;
  }
  stack.forEach((card, i) => {
    const next = stack[i + 1];
    const inner = card.firstElementChild as HTMLElement;
    if (!next) return;
    const r = card.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (r.bottom - next.getBoundingClientRect().top) / r.height));
    inner.style.transform = `scale(${1 - p * 0.04})`;
    inner.style.opacity = String(1 - p * 0.35);
  });
};
if (!reduce && (bar || stack.length)) {
  const ask = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', ask, { passive: true });
  addEventListener('resize', ask);
  ask();
}

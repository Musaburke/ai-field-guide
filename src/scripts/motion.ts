// Word rise, reveals, the prompt picker and copy buttons, adapted from the portfolio's motion.ts.
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

// Home picker: tabs share one grid cell, so the card never changes height.
document.querySelectorAll<HTMLElement>('[data-picker]').forEach((picker) => {
  const tabs = [...picker.querySelectorAll<HTMLElement>('[role="tab"]')];
  const choose = (tab: HTMLElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      picker.querySelector<HTMLElement>(`#${t.getAttribute('aria-controls')}`)!.dataset.active = String(on);
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => choose(tab));
    tab.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (step) { e.preventDefault(); choose(tabs[(i + step + tabs.length) % tabs.length]!, true); }
    });
  });
});

// Copy buttons. If the clipboard is refused, select the text so it can be copied by hand.
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.parentElement!.querySelector<HTMLElement>('[data-prompt]')!;
    try {
      await navigator.clipboard.writeText(text.textContent ?? '');
      btn.textContent = 'Copied';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
    } catch {
      getSelection()?.selectAllChildren(text);
    }
  });
});

// A link to a Sources row opens that row, including any collapsed section around it.
const openTarget = () => {
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (!target) return;
  let node: HTMLElement | null = target;
  while (node) { if (node instanceof HTMLDetailsElement) node.open = true; node = node.parentElement; }
  target.scrollIntoView();
};
addEventListener('hashchange', openTarget);
openTarget();

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

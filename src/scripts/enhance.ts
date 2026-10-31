// Progressive enhancement. Without this file every piece of content is visible.

// Entrances: once, as each part enters.
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// Claim disclosures. The heading becomes a button only when script runs.
const claims = [...document.querySelectorAll<HTMLElement>('.claim')];
function setOpen(claim: HTMLElement, open: boolean) {
  claim.classList.toggle('is-open', open);
  claim.querySelector('.claim-toggle')?.setAttribute('aria-expanded', String(open));
}
for (const claim of claims) {
  const heading = claim.querySelector<HTMLElement>('.claim-label');
  const body = claim.querySelector<HTMLElement>('.claim-body');
  if (!heading || !body) continue;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'claim-toggle';
  button.setAttribute('aria-controls', body.id);
  button.setAttribute('aria-expanded', 'false');
  button.append(...heading.childNodes);
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('aria-hidden', 'true');
  icon.classList.add('claim-icon');
  icon.innerHTML = '<rect x="3" y="10.5" width="18" height="3"/><rect class="claim-icon-v" x="10.5" y="3" width="3" height="18"/>';
  button.append(icon);
  heading.append(button);
  button.addEventListener('click', () => setOpen(claim, !claim.classList.contains('is-open')));
}

const openAll = document.querySelector<HTMLButtonElement>('[data-open-all]');
if (openAll) {
  openAll.addEventListener('click', () => {
    const next = !claims.every((c) => c.classList.contains('is-open'));
    claims.forEach((c) => setOpen(c, next));
    openAll.textContent = next ? 'Close every claim' : 'Open every claim';
  });
}

// Deep links open their claim; source links always land on visible content.
function openFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  if (target.classList.contains('claim')) setOpen(target, true);
  target.classList.add('in');
  target.scrollIntoView();
}
window.addEventListener('hashchange', openFromHash);
openFromHash();

// On /evidence every row already shows its source details, so the repeat folds away.
document.querySelectorAll<HTMLDetailsElement>('[data-fold]').forEach((d) => {
  if (!location.hash.startsWith('#src-')) d.open = false;
});

// Reading progress on chapters. Transform only.
const bar = document.querySelector<HTMLElement>('[data-progress]');
if (bar) {
  let queued = false;
  const update = () => {
    queued = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  };
  addEventListener('scroll', () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  addEventListener('resize', update, { passive: true });
  update();
}

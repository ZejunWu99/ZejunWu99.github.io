const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('is-open', expanded);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); menu.focus();
  }
});
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  let count = 0;
  document.querySelectorAll('[data-type]').forEach(row => {
    row.hidden = button.dataset.filter !== 'all' && row.dataset.type !== button.dataset.filter;
    if (!row.hidden) count++;
  });
  document.querySelector('#result-count').textContent = `${count} ${count===1?'publication':'publications'}`;
}));
const motion = document.querySelector('[data-motion]');
motion?.addEventListener('click',()=>{
  const paused = document.body.classList.toggle('motion-paused');
  motion.textContent = paused ? 'Play animation' : 'Pause animation';
  motion.setAttribute('aria-pressed',String(paused));
});

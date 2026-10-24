const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const checks = [...document.querySelectorAll('[data-filter]')];
const posts = [...document.querySelectorAll('[data-type][data-topic]')];
checks.forEach(check => check.addEventListener('change', () => {
  const active = checks.filter(c => c.checked).map(c => c.value);
  posts.forEach(post => {
    const values = [post.dataset.type, post.dataset.topic];
    post.hidden = active.length > 0 && !active.some(v => values.includes(v));
  });
}));

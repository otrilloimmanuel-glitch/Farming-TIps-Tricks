// Fade-in when scrolling
const fadeElems = document.querySelectorAll('.fade-in');

function checkVisibility() {
  const trigger = window.innerHeight * 0.85;
  fadeElems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

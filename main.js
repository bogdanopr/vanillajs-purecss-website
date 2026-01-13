import Lenis from 'lenis'

// 1. Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true,
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. Velocity & Skew Logic (Pure CSS)
lenis.on('scroll', (e) => {
  const velocity = e.velocity;
  const skew = Math.max(Math.min(velocity * 0.1, 10), -10);
  document.documentElement.style.setProperty('--skew', `${skew}deg`);
});

// 3. Scroll to Top
const scrollTopBtn = document.querySelector('.scroll-top-btn');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    lenis.scrollTo(0);
  });
}

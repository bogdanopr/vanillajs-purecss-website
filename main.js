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
  // Update Skew for CSS
  // Limit skew preventing visual glitching
  const velocity = e.velocity;
  const skew = Math.max(Math.min(velocity * 0.1, 10), -10); // Cap at 10deg

  document.documentElement.style.setProperty('--skew', `${skew}deg`);

  document.documentElement.style.setProperty('--skew', `${skew}deg`);
});

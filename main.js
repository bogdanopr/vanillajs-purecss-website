import Lenis from 'lenis'

// 1. Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard exponential easing
  direction: 'vertical',
  smooth: true,
  smoothTouch: false, // Touch devices usually have native inertia
})

// 2. The Animation Loop
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 3. Elements to animate
const parallaxElements = document.querySelectorAll('[data-speed]');
const content = document.getElementById('smooth-content');

// 4. Listen to scroll event to get velocity
lenis.on('scroll', (e) => {
  // e.velocity is the scroll velocity
  
  // Calculate Skew: Limits skew to +/- 10deg for sanity
  const velocity = e.velocity;
  const skew = velocity * 0.25; // Sensitivity
  
  // Calculate Scale: Stretch slightly when moving fast
  // velocity is +/-. We want absolute value.
  // 1 + abs(velocity) * 0.001
  const scale = 1 - Math.min(Math.abs(velocity) * 0.005, 0.2); // Squish effect or stretch? SKEW is usually enough, but let's just use Skew.
  // Actually, stretch: skewY makes it look "fast".
  
  // Apply to CSS Variables
  // Use toFixed to avoid layout thrashing with too many decimals, though CSS vars are performant.
  document.documentElement.style.setProperty('--skew', `${skew}deg`);
  
  // Parallax Logic
  // We can do this in the loop or here. 
  // For best performance, do it in the loop or use the scroll event. 
  // Since we are in the scroll callback, we have the latest `scroll`.
  
  parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed'));
      const yPos = -(e.scroll * speed - e.scroll); 
      // This is simple parallax: (scroll * speed - scroll) is the offset difference.
      // Or just transform based on scroll position * (speed - 1).
      
      // Let's keep it simple:
      // If speed is 1, it moves with scroll (normal).
      // If speed is 0.5, it moves half as fast (lag).
      // If speed is 1.5, it moves faster.
      
      // We need the element's offset relative to viewport to do it properly, 
      // but for global scroll parallax on fixed flow, we usually translate Y.
      
      const offset = e.scroll * (1 - speed);
      el.style.transform = `translateY(${offset}px)`;
  });
});

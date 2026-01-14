# Pure CSS & Vanilla JS Portfolio

A high-performance, lightweight web experience built with core web technologies. This project demonstrates how modern web development can achieve premium animation and interaction standards without the overhead of heavy JavaScript frameworks.

## Tech Stack

- **CSS3** (Pure CSS): Advanced animations, variables, and layouts without pre-processors or CSS-in-JS runtime costs.
- **Vanilla JavaScript**: Lightweight logic for interactivity, utilizing modern ES6+ features.
- **Lenis**: Lightweight library for smooth scrolling that doesn't hijack the native scroll but refines it.
- **Vite**: Frontend tooling for ultra-fast development and optimized production builds.

## Why This Approach?

In an era of heavy Single Page Applications (SPAs) and complex frameworks, returning to the "bare metal" of the web offers distinct advantages, especially for performance and accessibility.

### 1. Superior Performance on All Devices
By avoiding the overhead of a Virtual DOM (React, Vue, etc.), this application places minimal strain on the device's CPU.
- **Old Hardware Friendly**: Older phones and laptops with limited RAM and processing power can render this site smoothly because it relies on the browser's native rendering engine rather than JavaScript calculation cycles.
- **Hardware Acceleration**: Animations are primarily CSS-driven (using `transform` and `opacity`), which leverages the GPU rather than the CPU, ensuring 60fps animations even on low-end devices.

### 2. Instant Load Times
- **Micro-Bundle Size**: Without strictly necessary vendor code, the final JavaScript bundle is tiny. Users on slow 3G/4G connections can load the site almost instantly.
- **Faster Time-to-Interactive**: There is no "hydration" phase. The moment the HTML and CSS load, the site is interactive.

### 3. Battery Efficient
Less JavaScript execution means less CPU usage, which directly translates to significantly reduced battery drain for battery-based devices such as mobile phones and laptops.

### Summary
This stack proves that you don't need a 500kb JavaScript bundle to create a modern, "wow" factor website. It prioritizes the user's resources, delivering a premium experience that is inclusive of all devices and connection speeds which is why i decided to use it for my portfolio in a web-era filled with hundreds of frameworks and libraries.

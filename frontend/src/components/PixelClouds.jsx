import React, { useEffect, useRef } from 'react';

export default function PixelClouds() {
  const containerRef = useRef(null);
  const cloudsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const generateClouds = () => {
      const clouds = [];
      const cloudCount = 8;

      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          id: i,
          y: Math.random() * 60 + 10,
          size: Math.random() * 40 + 30,
          duration: Math.random() * 60 + 40,
          delay: Math.random() * -50,
        });
      }
      return clouds;
    };

    cloudsRef.current = generateClouds();

    const container = containerRef.current;
    container.innerHTML = '';

    cloudsRef.current.forEach((cloud) => {
      const cloudEl = document.createElement('div');
      cloudEl.className = 'cloud';
      cloudEl.style.top = `${cloud.y}%`;
      cloudEl.style.width = `${cloud.size}px`;
      cloudEl.style.height = `${cloud.size / 2}px`;
      cloudEl.style.animation = `float-cloud ${cloud.duration}s linear ${cloud.delay}s infinite`;

      const svg = `
        <svg width="${cloud.size}" height="${cloud.size / 2}" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="12" y="8" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="16" y="8" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="20" y="8" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="12" y="4" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="16" y="4" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="20" y="4" width="4" height="4" fill="white" opacity="0.4"/>
          <rect x="16" y="0" width="4" height="4" fill="white" opacity="0.4"/>
        </svg>
      `;

      cloudEl.innerHTML = svg;
      container.appendChild(cloudEl);
    });
  }, []);

  return <div ref={containerRef} className="pixel-clouds" />;
}

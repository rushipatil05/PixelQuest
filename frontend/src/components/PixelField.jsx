import React, { useEffect, useRef } from 'react';

export default function PixelField() {
  const containerRef = useRef(null);
  const pixelsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const generatePixels = () => {
      const pixels = [];
      const pixelCount = 30;
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];

      for (let i = 0; i < pixelCount; i++) {
        pixels.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() > 0.5 ? 8 : 12,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      return pixels;
    };

    pixelsRef.current = generatePixels();

    const container = containerRef.current;
    container.innerHTML = '';

    pixelsRef.current.forEach((pixel) => {
      const pixelEl = document.createElement('div');
      pixelEl.className = 'pixel';
      pixelEl.style.left = `${pixel.x}%`;
      pixelEl.style.bottom = '0';
      pixelEl.style.width = `${pixel.size}px`;
      pixelEl.style.height = `${pixel.size}px`;
      pixelEl.style.color = pixel.color;
      pixelEl.style.animation = `pixelFloat ${pixel.duration}s linear ${pixel.delay}s infinite`;

      container.appendChild(pixelEl);
    });
  }, []);

  return <div ref={containerRef} className="floating-pixels" />;
}

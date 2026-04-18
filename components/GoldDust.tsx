'use client';

import { useMemo } from 'react';

export function GoldDust() {
  const particles = useMemo(
    () =>
      Array.from({ length: 45 }, (_, idx) => ({
        id: idx,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 4
      })),
    []
  );

  return (
    <div className="gold-dust" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
}

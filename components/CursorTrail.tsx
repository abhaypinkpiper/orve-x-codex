'use client';

import { useEffect, useState } from 'react';

type Point = { x: number; y: number; id: number };

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    let id = 0;
    const onMove = (event: MouseEvent) => {
      id += 1;
      setPoints((prev) => [...prev.slice(-12), { x: event.clientX, y: event.clientY, id }]);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="cursor-trail" aria-hidden="true">
      {points.map((point, index) => (
        <span
          key={point.id}
          className="trail-dot"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / points.length,
            transform: `translate(-50%, -50%) scale(${0.4 + index / points.length})`
          }}
        />
      ))}
    </div>
  );
}

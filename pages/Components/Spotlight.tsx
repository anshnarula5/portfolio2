// Spotlight.js
import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e : any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className='spotlight-container'>
      <div
        className="spotlight"
        style={{ left: position.x - 300, top: position.y - 300 }}
      />
    </div>
  );
};

export default Spotlight;

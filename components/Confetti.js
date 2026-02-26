"use client";

import { useEffect, useRef } from "react";

export default function Confetti({ trigger }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const c = ref.current;
    const x = c.getContext("2d");
    c.width = innerWidth;
    c.height = innerHeight;

    const pieces = [...Array(150)].map(() => ({
      x: c.width/2,
      y: c.height/2,
      vx: (Math.random()-0.5)*10,
      vy: Math.random()*-10,
      size: Math.random()*6+4,
      color: `hsl(${Math.random()*360},100%,60%)`
    }));

    const loop = () => {
      x.clearRect(0,0,c.width,c.height);
      pieces.forEach(p=>{
        p.vy+=0.3;
        p.x+=p.vx;
        p.y+=p.vy;
        x.fillStyle=p.color;
        x.fillRect(p.x,p.y,p.size,p.size);
      });
      requestAnimationFrame(loop);
    };
    loop();
  }, [trigger]);

  return <canvas ref={ref} className="fixed inset-0 z-50 pointer-events-none" />;
}
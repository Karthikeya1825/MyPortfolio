import React, { useEffect, useRef } from 'react';

// Solid palette colors:
// Indigo: #1F06AC, Cobalt: #0F42C0, Cornflower: #5882E8, Chartreuse: #E3EF4F
export const VisionGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Vision Feature Nodes (representing CV keypoints / tensor feature maps)
    const NODE_COUNT = Math.min(36, Math.floor((width * height) / 38000));
    const nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() > 0.85 ? 3 : 2,
        isAccent: Math.random() > 0.8, // Chartreuse accent point
        isBox: i < 3, // Bounding box tracker point
        boxWidth: 70 + Math.random() * 50,
        boxHeight: 45 + Math.random() * 35,
        boxLabel: i === 0 ? 'tensor: 3d_depth' : i === 1 ? 'yolo: bbox' : 'sam: mask',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting neural edges between close nodes (Solid colors, no gradient)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.lineWidth = 1;
            ctx.strokeStyle = `rgba(88, 130, 232, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // 2. Draw nodes and computer vision reticles
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0) n.x = width;
          if (n.x > width) n.x = 0;
          if (n.y < 0) n.y = height;
          if (n.y > height) n.y = 0;
        }

        // Draw node point (solid fill)
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isAccent ? '#E3EF4F' : '#5882E8';
        ctx.fill();

        // 3. For select nodes, draw Computer Vision Bounding Box Reticles
        if (n.isBox) {
          const bw = n.boxWidth;
          const bh = n.boxHeight;
          const bx = n.x - bw / 2;
          const by = n.y - bh / 2;

          // Corner bracket reticles (4 corners)
          const cornerLen = 8;
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(88, 130, 232, 0.28)';

          // Top-Left
          ctx.beginPath();
          ctx.moveTo(bx, by + cornerLen);
          ctx.lineTo(bx, by);
          ctx.lineTo(bx + cornerLen, by);
          ctx.stroke();

          // Top-Right
          ctx.beginPath();
          ctx.moveTo(bx + bw - cornerLen, by);
          ctx.lineTo(bx + bw, by);
          ctx.lineTo(bx + bw, by + cornerLen);
          ctx.stroke();

          // Bottom-Left
          ctx.beginPath();
          ctx.moveTo(bx, by + bh - cornerLen);
          ctx.lineTo(bx, by + bh);
          ctx.lineTo(bx + cornerLen, by + bh);
          ctx.stroke();

          // Bottom-Right
          ctx.beginPath();
          ctx.moveTo(bx + bw - cornerLen, by + bh);
          ctx.lineTo(bx + bw, by + bh);
          ctx.lineTo(bx + bw, by + bh - cornerLen);
          ctx.stroke();

          // Bounding Box Label
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(227, 239, 79, 0.45)';
          ctx.fillText(n.boxLabel, bx, by - 4);
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static Precision Schematic Grid (Solid lines, no gradients) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045] stroke-[#5882E8]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main 64x64 grid */}
          <pattern id="schematic-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" strokeWidth="1" />
            {/* Precision Crosshair (+) at grid intersections */}
            <path d="M 0 3 L 0 -3 M -3 0 L 3 0" stroke="#E3EF4F" strokeWidth="1" strokeOpacity="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#schematic-grid)" />
      </svg>

      {/* Dynamic Vision & Neural Nodes Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

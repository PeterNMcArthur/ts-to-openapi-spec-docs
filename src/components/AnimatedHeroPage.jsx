import React, { useState, useEffect } from 'react';

const AnimatedHeroPage = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  
  // Initialize nodes with random positions
  useEffect(() => {
    const newNodes = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2
    }));
    setNodes(newNodes);
  }, []);

  // Animation loop for moving nodes
  useEffect(() => {
    const moveNodes = () => {
      setNodes(prevNodes => 
        prevNodes.map(node => {
          let newX = node.x + node.dx;
          let newY = node.y + node.dy;
          
          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth) node.dx *= -1;
          if (newY <= 0 || newY >= window.innerHeight) node.dy *= -1;
          
          return {
            ...node,
            x: newX,
            y: newY
          };
        })
      );
    };

    const updateConnections = () => {
      const newConnections = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.hypot(
            nodes[i].x - nodes[j].x,
            nodes[i].y - nodes[j].y
          );
          if (distance < 200) {
            newConnections.push({
              id1: nodes[i].id,
              id2: nodes[j].id,
              opacity: 1 - (distance / 200)
            });
          }
        }
      }
      setConnections(newConnections);
    };

    const animationFrame = requestAnimationFrame(() => {
      moveNodes();
      updateConnections();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [nodes]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {/* Connections */}
        {connections.map((conn, i) => (
          <line
            key={`${conn.id1}-${conn.id2}`}
            x1={nodes[conn.id1]?.x}
            y1={nodes[conn.id1]?.y}
            x2={nodes[conn.id2]?.x}
            y2={nodes[conn.id2]?.y}
            stroke="rgb(59 130 246 / 0.5)"
            strokeWidth="2"
            opacity={conn.opacity}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map(node => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              className="fill-blue-500 animate-pulse"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              className="fill-transparent stroke-blue-500"
              strokeWidth="2"
              opacity="0.3"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedHeroPage;

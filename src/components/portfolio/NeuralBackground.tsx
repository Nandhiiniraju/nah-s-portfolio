import { motion } from "framer-motion";

export function NeuralBackground({ className = "" }: { className?: string }) {
  // generate deterministic nodes
  const nodes = Array.from({ length: 22 }).map((_, i) => ({
    id: i,
    x: (i * 137.5) % 100,
    y: (i * 73.3) % 100,
    r: 1.5 + ((i * 7) % 4),
  }));

  return (
    <svg
      aria-hidden
      className={`absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor="#47131C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#47131C" stopOpacity="0" />
        </radialGradient>
      </defs>
      {nodes.map((n, i) =>
        nodes
          .slice(i + 1, i + 4)
          .map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="#47131C"
              strokeOpacity="0.08"
              strokeWidth="0.1"
            />
          ))
      )}
      {nodes.map((n) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.3}
          fill="url(#nodeGrad)"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3 + (n.id % 4), repeat: Infinity, delay: n.id * 0.15 }}
        />
      ))}
    </svg>
  );
}

export function FloatingParticles() {
  const particles = Array.from({ length: 30 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute block rounded-full bg-cherry/30"
          style={{
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

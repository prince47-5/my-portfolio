"use client";
import { useRef, useState } from "react";

interface MagicCardProps {
  title: string;
  description: string;
  tags: string[];
  size?: "small" | "large"; // Allows us to make bento grid sizes
}

export default function MagicCard({ title, description, tags, size = "small" }: MagicCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      // Uses 'bg-gray-900' in dark mode, but 'bg-white' in light mode
        className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 px-8 py-10 shadow-2xl ${
        size === "large" ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* The "Spotlight" Gradient Layer */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
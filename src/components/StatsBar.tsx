'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 5000, suffix: '+', label: 'Members Transformed' },
  { value: 50, suffix: '+', label: 'Expert Trainers' },
  { value: 30, suffix: '+', label: 'Fitness Programs' },
  { value: 10, suffix: 'yr', label: 'Years of Excellence' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#0d0d0d] overflow-hidden">
      {/* Marquee text strip */}
      <div className="overflow-hidden mb-12 py-3 border-y border-[#e8ff3a]/20 bg-[#e8ff3a]/5">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 mx-4 text-sm font-bold tracking-widest text-[#e8ff3a]/70 uppercase">
              {['Strength Training', 'Cardio', 'HIIT', 'Yoga', 'CrossFit', 'Boxing', 'Pilates', 'Nutrition', 'Cycling', 'Swimming'].map(t => (
                <span key={t} className="flex items-center gap-6">
                  {t}
                  <span className="text-[#e8ff3a] opacity-50">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center md:items-start px-0 md:px-10 first:pl-0 last:pr-0 text-center md:text-left"
          >
            <span className="text-4xl md:text-5xl font-black text-white mb-1 gradient-text">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-white/40 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

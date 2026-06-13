'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const words = ['STRONGER', 'FASTER', 'UNSTOPPABLE', 'LIMITLESS', 'FEARLESS'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [wordIndex, setWordIndex] = useState(0);

  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      springX.set(x);
      springY.set(y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [springX, springY]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imgY, x: springX, rotateY: springX }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop')`,
          }}
        />
      </motion.div>

      {/* Overlay */}
      <motion.div className="absolute inset-0 hero-overlay" style={{ opacity: overlayOpacity }} />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,255,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,58,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Animated circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#e8ff3a]/10 animate-[spin-slow_20s_linear_infinite]" />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-[#e8ff3a]/20 animate-[spin-slow_12s_linear_infinite_reverse]" />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
        className="absolute top-28 right-8 md:right-24 w-24 h-24 md:w-32 md:h-32 rounded-full glass border border-[#e8ff3a]/30 flex flex-col items-center justify-center text-center animate-[float_4s_ease-in-out_infinite]"
      >
        <span className="text-[#e8ff3a] font-black text-lg md:text-2xl leading-none">10+</span>
        <span className="text-white/70 text-[10px] md:text-xs font-medium mt-1">Years of<br/>Excellence</span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#e8ff3a] animate-pulse" />
          <span className="text-[#e8ff3a] text-sm font-semibold tracking-widest uppercase">
            Ahmedabad&apos;s Premier Fitness Club
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] md:text-[10vw] lg:text-[9vw] font-black leading-none tracking-tighter text-white"
            style={{ textShadow: '0 4px 32px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)' }}
          >
            BECOME
          </motion.h1>
        </div>

        {/* Rotating word */}
        <div className="overflow-hidden mb-6 h-[14vw] md:h-[11vw] lg:h-[10vw]">
          <motion.div
            key={wordIndex}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] md:text-[10vw] lg:text-[9vw] font-black leading-none tracking-tighter gradient-text"
            style={{ filter: 'drop-shadow(0 4px 24px rgba(232,255,58,0.4)) drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}
          >
            {words[wordIndex]}
          </motion.div>
        </div>

        {/* Sub text + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end gap-8 mt-4"
        >
          <div className="max-w-sm">
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-light" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}>
              State-of-the-art facility on Ambli Bopal Road, Ahmedabad.
              Transform your body, elevate your mind.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cursor-none relative overflow-hidden bg-[#e8ff3a] text-black font-bold px-7 py-3.5 rounded-full text-sm tracking-wide group animate-[pulse-glow_3s_ease-in-out_infinite]"
              >
                <span className="relative z-10">Start Today — Free Trial</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="cursor-none text-white/70 hover:text-white text-sm font-medium flex items-center gap-2 group transition-colors"
              >
                <span className="w-10 h-px bg-white/40 group-hover:bg-[#e8ff3a] group-hover:w-14 transition-all duration-300" />
                Explore
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#e8ff3a]/60 to-transparent animate-[fade-up_1.5s_ease-in-out_infinite]" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#e8ff3a]/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#e8ff3a]/20" />
    </section>
  );
}

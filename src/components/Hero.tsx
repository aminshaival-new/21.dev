'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SLIDE_MS = 5500;

const slides = [
  {
    id: 0,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90&auto=format&fit=crop',
    word: 'STRONGER',
    label: 'Elite Strength Training',
    pos: 'center',
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1920&q=90&auto=format&fit=crop',
    word: 'FASTER',
    label: 'High-Intensity Cardio',
    pos: 'center top',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=90&auto=format&fit=crop',
    word: 'FEARLESS',
    label: 'Combat & Boxing',
    pos: 'center',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1920&q=90&auto=format&fit=crop',
    word: 'BALANCED',
    label: 'Yoga & Mindfulness',
    pos: 'center',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=90&auto=format&fit=crop',
    word: 'UNSTOPPABLE',
    label: 'Power & Performance',
    pos: 'center',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const springX = useSpring(0, { stiffness: 45, damping: 22 });

  const [current, setCurrent] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgKey((k) => k + 1);
  }, []);

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setProgKey((k) => k + 1);
    }, SLIDE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      springX.set((e.clientX / window.innerWidth - 0.5) * 14);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [springX]);

  /* Preload the next image */
  useEffect(() => {
    const nextSrc = slides[(current + 1) % slides.length].img;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = nextSrc;
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch { /* gone already */ } };
  }, [current]);

  const slide = slides[current];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* ── Slide images ─────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0 scale-[1.18]"
            style={{ y: imgY, x: springX }}
          >
            {/* Ken Burns: slow zoom-out over slide duration */}
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: SLIDE_MS / 1000, ease: 'easeOut' }}
            >
              <Image
                src={slide.img}
                alt={slide.label}
                fill
                priority={current === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.pos }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ─────────────────────────────────── */}
      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,255,58,0.25) 1px,transparent 1px),linear-gradient(90deg,rgba(232,255,58,0.25) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.07,
        }}
      />

      {/* Corner accents */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#e8ff3a]/25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#e8ff3a]/25 pointer-events-none" />

      {/* Spinning rings (top-right) */}
      <div className="absolute top-20 right-20 w-56 h-56 rounded-full border border-[#e8ff3a]/10 animate-[spin-slow_22s_linear_infinite] pointer-events-none" />
      <div className="absolute top-32 right-32 w-36 h-36 rounded-full border border-[#e8ff3a]/15 animate-[spin-slow_14s_linear_infinite_reverse] pointer-events-none" />

      {/* ── Slide category label (top-left) ─────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${current}`}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.45 }}
          className="absolute top-28 left-6 md:left-10 flex items-center gap-2 z-20"
        >
          <span className="w-2 h-2 rounded-full bg-[#e8ff3a] animate-pulse" />
          <span className="text-[#e8ff3a] text-xs font-bold tracking-widest uppercase">
            {slide.label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Floating badge (top-right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
        className="absolute top-28 right-6 md:right-24 w-24 h-24 md:w-[120px] md:h-[120px] rounded-full glass border border-[#e8ff3a]/30 flex flex-col items-center justify-center text-center z-20 animate-[float_4s_ease-in-out_infinite]"
      >
        <span className="text-[#e8ff3a] font-black text-lg md:text-2xl leading-none">10+</span>
        <span className="text-white/80 text-[10px] md:text-xs font-medium mt-1 leading-tight">
          Years of<br />Excellence
        </span>
      </motion.div>

      {/* ── Main content ─────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20"
      >
        {/* Premier badge */}
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

        {/* BECOME */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] md:text-[10vw] lg:text-[9vw] font-black leading-none tracking-tighter text-white"
            style={{ textShadow: '0 4px 32px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.9)' }}
          >
            BECOME
          </motion.h1>
        </div>

        {/* Slide-synced animated word */}
        <div className="overflow-hidden mb-6 h-[14vw] md:h-[11vw] lg:h-[10vw]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`word-${current}`}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-[13vw] md:text-[10vw] lg:text-[9vw] font-black leading-none tracking-tighter gradient-text"
              style={{
                filter:
                  'drop-shadow(0 4px 28px rgba(232,255,58,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.95))',
              }}
            >
              {slide.word}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sub-copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="max-w-sm"
        >
          <p
            className="text-white/90 text-base md:text-lg leading-relaxed font-light"
            style={{ textShadow: '0 1px 14px rgba(0,0,0,0.9)' }}
          >
            State-of-the-art facility on Ambli Bopal Road, Ahmedabad. Transform
            your body, elevate your mind.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="cursor-none relative overflow-hidden bg-[#e8ff3a] text-black font-bold px-7 py-3.5 rounded-full text-sm tracking-wide group"
              style={{ boxShadow: '0 0 32px rgba(232,255,58,0.45)' }}
            >
              <span className="relative z-10">Start Today — Free Trial</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
            <button
              onClick={() =>
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="cursor-none text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 group transition-colors"
            >
              <span className="w-10 h-px bg-white/50 group-hover:bg-[#e8ff3a] group-hover:w-14 transition-all duration-300" />
              Explore
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom bar: progress dots + nav ─────────── */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              className="cursor-none relative overflow-hidden rounded-full bg-white/20 transition-all duration-300"
              style={{ height: 3, width: i === current ? 44 : 14 }}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <motion.div
                  key={progKey}
                  className="absolute inset-y-0 left-0 bg-[#e8ff3a] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Counter + arrows */}
        <div className="flex items-center gap-3">
          <span className="text-white/55 text-xs font-mono tabular-nums">
            {String(current + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(slides.length).padStart(2, '0')}
          </span>
          <button
            onClick={() => { goPrev(); resetTimer(); }}
            className="cursor-none w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-[#e8ff3a]/60 hover:text-[#e8ff3a] transition-all text-sm"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={() => { goNext(); resetTimer(); }}
            className="cursor-none w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-[#e8ff3a]/60 hover:text-[#e8ff3a] transition-all text-sm"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-[52px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10"
      >
        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-[#e8ff3a]/60 to-transparent" />
      </motion.div>
    </section>
  );
}

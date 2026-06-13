'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const classes = [
  {
    time: '06:00 AM', name: 'Morning HIIT Blast', trainer: 'Coach Rahul', spots: 4, level: 'Advanced',
    color: '#e8ff3a', img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80'
  },
  {
    time: '07:30 AM', name: 'Power Yoga Flow', trainer: 'Coach Priya', spots: 8, level: 'All Levels',
    color: '#a8ff78', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80'
  },
  {
    time: '09:00 AM', name: 'Strength Foundations', trainer: 'Coach Arjun', spots: 12, level: 'Beginner',
    color: '#78ffd6', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80'
  },
  {
    time: '05:30 PM', name: 'Boxing Conditioning', trainer: 'Coach Dev', spots: 2, level: 'Intermediate',
    color: '#ff6b6b', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80'
  },
  {
    time: '07:00 PM', name: 'CrossFit Thunder', trainer: 'Coach Nisha', spots: 6, level: 'Advanced',
    color: '#ffd700', img: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80'
  },
  {
    time: '08:30 PM', name: 'Night Stretch & Recovery', trainer: 'Coach Mehul', spots: 15, level: 'All Levels',
    color: '#c77dff', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80'
  },
];

export default function Classes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="classes" ref={ref} className="py-28 md:py-40 relative overflow-hidden bg-[#080808]">
      {/* Animated BG */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 opacity-5"
        aria-hidden
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#e8ff3a] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#ff6b1a] blur-[100px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#e8ff3a] text-sm font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#e8ff3a]" />
            Today&apos;s Schedule
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Classes That <span className="gradient-text">Ignite</span>
            </motion.h2>
            <p className="text-white/40 text-sm max-w-xs">Secure your spot before they fill up — classes run 6 days a week.</p>
          </div>
        </div>

        {/* Classes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 cursor-none"
              data-cursor="book"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cls.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full min-h-[220px] justify-between">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                    style={{ background: cls.color + '22', color: cls.color, border: `1px solid ${cls.color}44` }}
                  >
                    {cls.level}
                  </span>
                  <span className={`text-xs font-bold ${cls.spots <= 4 ? 'text-[#ff6b6b]' : 'text-white/40'}`}>
                    {cls.spots <= 4 ? `⚡ ${cls.spots} spots left` : `${cls.spots} spots`}
                  </span>
                </div>

                {/* Bottom */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/50 text-sm font-mono">{cls.time}</span>
                  </div>
                  <h3 className="text-white font-black text-xl mb-1 group-hover:text-[#e8ff3a] transition-colors">{cls.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{cls.trainer}</p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cursor-none w-full py-2.5 rounded-full text-sm font-bold border border-white/20 text-white hover:bg-[#e8ff3a] hover:text-black hover:border-transparent transition-all duration-300"
                  >
                    Book Class
                  </motion.button>
                </div>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                style={{ background: cls.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Want to see the full weekly timetable?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-none text-[#e8ff3a] font-bold text-sm border border-[#e8ff3a]/30 px-6 py-2.5 rounded-full hover:bg-[#e8ff3a] hover:text-black transition-all duration-300"
          >
            Get Full Schedule →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

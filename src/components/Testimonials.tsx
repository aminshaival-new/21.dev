'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Ankit Vora', role: 'Lost 18 kg in 5 months', avatar: 'AV',
    text: 'Heeo Fitness completely changed my life. The trainers genuinely care about your progress. I came in unable to run 500m — I just finished my first 10K. Best investment I have ever made.',
    rating: 5,
  },
  {
    name: 'Sneha Joshi', role: 'Marathon Runner & Member since 2022', avatar: 'SJ',
    text: 'The facilities are unmatched in Ahmedabad. The yoga studio alone is worth the membership. But what keeps me here is the community — everyone pushes each other to be better.',
    rating: 5,
  },
  {
    name: 'Rohan Kapoor', role: 'Competitive Powerlifter', avatar: 'RK',
    text: 'Coach Arjun took my squat from 80 kg to 165 kg in under a year. The programming here is at a level I have only seen at national-level facilities. Absolutely world class.',
    rating: 5,
  },
  {
    name: 'Meera Shah', role: 'Lost 12 kg • Working Mum of 2', avatar: 'MS',
    text: 'I was terrified to join a gym. The team at Heeo made me feel welcome from day one. The morning classes fit perfectly into my schedule and the results speak for themselves.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-28 md:py-40 relative overflow-hidden bg-[#080808]">
      {/* Giant quote bg */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[30vw] font-black text-[#e8ff3a]">&ldquo;</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#e8ff3a] text-sm font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#e8ff3a]" />
            Real Stories
            <span className="w-8 h-px bg-[#e8ff3a]" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Results That <span className="gradient-text">Speak</span>
          </motion.h2>
        </div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass border border-white/8 rounded-3xl p-8 md:p-14 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-[#e8ff3a] text-xl">★</span>
              ))}
            </div>

            <blockquote className="text-white/80 text-xl md:text-2xl leading-relaxed font-light mb-8 max-w-3xl mx-auto">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e8ff3a] flex items-center justify-center font-black text-black text-sm">
                {t.avatar}
              </div>
              <div className="text-left">
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-[#e8ff3a] text-sm">{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-none w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-[#e8ff3a] w-8' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

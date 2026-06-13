'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Strength & Power Training',
    emoji: '💪',
    tag: 'MOST POPULAR',
    desc: 'Build raw power with our Olympic lifting platforms, free weights, and machine zones. Tailored programmes from beginner to advanced, guided by certified strength coaches who design periodised plans for maximal gains.',
    features: ['Olympic Weightlifting Platforms', 'Dedicated Free Weight Zone', 'Powerlifting Equipment', 'Personalised Strength Plans', 'Video Form Analysis'],
    duration: '45–90 min sessions',
    level: 'All levels',
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
  },
  {
    id: 2,
    number: '02',
    title: 'High-Intensity Interval Training',
    emoji: '🔥',
    tag: 'FAT BURNER',
    desc: 'Torch calories and boost metabolism with scientifically-designed HIIT sessions. Our certified coaches push you through circuit-based workouts that deliver maximum results in minimum time.',
    features: ['Metabolic Conditioning', 'Heart Rate Zone Tracking', 'Battle Ropes & Sleds', 'Functional Movement Screens', 'Recovery Protocols'],
    duration: '30–45 min sessions',
    level: 'Intermediate–Advanced',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    id: 3,
    number: '03',
    title: 'Yoga & Mindful Movement',
    emoji: '🧘',
    tag: 'BODY & MIND',
    desc: 'Find your flow in our dedicated yoga studio. From power vinyasa to restorative yin, our expert instructors guide sessions that improve flexibility, reduce stress, and reconnect you to your body.',
    features: ['Dedicated Yoga Studio', 'Infrared Heated Sessions', 'Aerial Yoga (select classes)', 'Breathwork & Meditation', 'Private Sessions Available'],
    duration: '60–90 min sessions',
    level: 'All levels',
    img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
  },
  {
    id: 4,
    number: '04',
    title: 'Combat & Boxing',
    emoji: '🥊',
    tag: 'BUILD DISCIPLINE',
    desc: 'Channel your inner fighter in our professional boxing ring. Whether you are looking to compete or just want the most intense full-body workout of your life, our boxing coaches have you covered.',
    features: ['Full-Size Boxing Ring', '1-on-1 Sparring Sessions', 'Bag Work & Pad Work', 'Shadow Boxing Zones', 'Muay Thai & Kickboxing'],
    duration: '60 min sessions',
    level: 'Beginner–Pro',
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
  },
  {
    id: 5,
    number: '05',
    title: 'Personal Training & Coaching',
    emoji: '🎯',
    tag: 'FASTEST RESULTS',
    desc: 'Accelerate your transformation with a dedicated personal trainer. Get a fully customised programme, nutritional guidance, and the undivided attention that ensures every session counts.',
    features: ['Dedicated Trainer', 'Custom Meal Planning', 'Weekly Progress Reviews', 'Biometric Tracking', 'Priority Booking'],
    duration: 'Flexible scheduling',
    level: 'All levels',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  },
  {
    id: 6,
    number: '06',
    title: 'Aqua & Recovery Centre',
    emoji: '🏊',
    tag: 'RESTORE & RECOVER',
    desc: 'Our recovery suite includes a heated swimming pool, ice bath, steam room, and physiotherapy services — everything you need to recover faster, prevent injury, and perform at your peak.',
    features: ['Heated Swimming Pool', 'Ice Bath & Cryo', 'Steam & Sauna Room', 'Physiotherapy Services', 'Foam Roll & Stretch Zone'],
    duration: 'Open access',
    level: 'Members only',
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&q=80',
  },
];

function AccordionItem({ service, isOpen, onToggle }: {
  service: typeof services[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className={`border-b border-white/10 group ${isOpen ? 'border-[#e8ff3a]/30' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center gap-4 text-left cursor-none"
        data-cursor="expand"
      >
        <span className="text-[#e8ff3a]/40 font-mono text-sm font-bold w-8 shrink-0">{service.number}</span>
        <span className="text-2xl">{service.emoji}</span>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#e8ff3a]' : 'text-white group-hover:text-[#e8ff3a]'}`}>
              {service.title}
            </span>
            {service.tag && (
              <span className="text-[10px] font-bold tracking-widest text-black bg-[#e8ff3a] px-2 py-0.5 rounded-full">
                {service.tag}
              </span>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 transition-colors duration-300 ${
            isOpen ? 'border-[#e8ff3a] bg-[#e8ff3a] text-black' : 'border-white/20 text-white'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 grid md:grid-cols-5 gap-8">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 h-52 md:h-64 rounded-xl overflow-hidden"
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="md:col-span-3"
              >
                <p className="text-white/75 text-base leading-relaxed mb-6">{service.desc}</p>
                <div className="flex gap-6 mb-6 flex-wrap">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#e8ff3a]">⏱</span>
                    <span className="text-white/60">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#e8ff3a]">📊</span>
                    <span className="text-white/60">{service.level}</span>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-4 h-4 rounded-full bg-[#e8ff3a]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#e8ff3a] text-[10px]">✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="cursor-none mt-6 bg-[#e8ff3a] text-black font-bold text-sm px-6 py-2.5 rounded-full hover:bg-white transition-colors"
                >
                  Book a Free Session →
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="services" className="py-28 md:py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#e8ff3a] text-sm font-bold tracking-widest uppercase mb-4"
            >
              <span className="w-8 h-px bg-[#e8ff3a]" />
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Everything You<br />Need to <span className="gradient-text">Win</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm text-white/60 text-sm leading-relaxed"
          >
            Six world-class service pillars, designed to take you from where you are
            to where you want to be — no compromises.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-white/10"
        >
          {services.map((service) => (
            <AccordionItem
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

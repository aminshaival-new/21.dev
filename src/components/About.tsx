'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const x2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 overflow-hidden bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Images */}
          <div className="relative h-[500px] md:h-[620px]">
            <motion.div
              style={{ x: x1 }}
              className="absolute top-0 left-0 w-[68%] h-[75%] overflow-hidden rounded-2xl"
            >
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80')` }}
              />
            </motion.div>
            <motion.div
              style={{ x: x2 }}
              className="absolute bottom-0 right-0 w-[55%] h-[60%] overflow-hidden rounded-2xl border-4 border-[#080808]"
            >
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80')` }}
              />
            </motion.div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 glass border border-[#e8ff3a]/30 rounded-2xl p-4 text-center min-w-[120px] z-10"
            >
              <div className="text-3xl font-black text-[#e8ff3a]">#1</div>
              <div className="text-white/80 text-xs mt-1 font-medium">Fitness Center<br/>in Ahmedabad</div>
            </motion.div>
          </div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-[#e8ff3a] text-sm font-bold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-[#e8ff3a]" />
                About Heeo Fitness
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Where Limits Are<br />
                <span className="gradient-text">Made to Break</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Nestled on Ambli Bopal Road, Ahmedabad, Heeo Fitness is more than a gym —
                it&apos;s a movement. We combine cutting-edge equipment, world-class trainers,
                and a community-first culture to push you beyond what you thought possible.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                From elite athletes to first-timers, every body that walks through our doors
                is met with personalised programming and relentless support.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: '⚡', title: 'Elite Equipment', desc: '15,000 sq ft of premium machines' },
                  { icon: '🏆', title: 'Expert Coaches', desc: 'Certified & competition-proven' },
                  { icon: '🔥', title: '24/7 Access', desc: 'Train on your schedule' },
                  { icon: '💚', title: 'Nutrition Hub', desc: 'Diet plans & protein bar on-site' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-white/60 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#080808] bg-cover bg-center"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">5,000+ active members</div>
                  <div className="flex text-[#e8ff3a] text-xs">★★★★★ <span className="text-white/60 ml-1">4.9 rating</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

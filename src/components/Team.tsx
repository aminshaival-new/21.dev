'use client';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Rahul Sharma', role: 'Head of Strength & Conditioning', exp: '12 yrs',
    certs: ['NSCA-CSCS', 'CrossFit L3'],
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    specialty: 'Powerlifting & Olympic Lifting',
  },
  {
    name: 'Priya Patel', role: 'Lead Yoga & Wellness Coach', exp: '9 yrs',
    certs: ['RYT-500', 'Ayurveda Cert.'],
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    specialty: 'Vinyasa, Yin & Aerial Yoga',
  },
  {
    name: 'Arjun Mehta', role: 'Boxing & Combat Specialist', exp: '15 yrs',
    certs: ['BFI Certified', 'WBC Coach'],
    img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=400&q=80',
    specialty: 'Boxing, Muay Thai & MMA',
  },
  {
    name: 'Nisha Desai', role: 'HIIT & Functional Fitness', exp: '7 yrs',
    certs: ['ACE-CPT', 'TRX Certified'],
    img: 'https://images.unsplash.com/photo-1609899537878-38f6038c2b43?w=400&q=80',
    specialty: 'MetCon & Bootcamp',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 md:py-40 bg-[#0a0a0a] overflow-hidden">
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
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Coached by <span className="gradient-text">Champions</span>
            </motion.h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Every trainer at Heeo is handpicked for their credentials, passion, and ability to bring out the best in you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden cursor-none border border-white/5 hover:border-[#e8ff3a]/30 transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-top transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Experience badge */}
                <div className="absolute top-4 right-4 glass border border-white/10 px-3 py-1.5 rounded-full">
                  <span className="text-[#e8ff3a] text-xs font-bold">{member.exp}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-[#111111]">
                <h3 className="text-white font-black text-lg group-hover:text-[#e8ff3a] transition-colors">{member.name}</h3>
                <p className="text-white/50 text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-[#e8ff3a]/70 text-xs font-medium mb-3">{member.specialty}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.certs.map((cert) => (
                    <span key={cert} className="text-[10px] font-bold text-white/50 border border-white/10 px-2 py-0.5 rounded">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e8ff3a] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

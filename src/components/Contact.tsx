'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#e8ff3a]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#e8ff3a] text-sm font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#e8ff3a]" />
            Get In Touch
            <span className="w-8 h-px bg-[#e8ff3a]" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Start Your <span className="gradient-text">Journey</span>
          </motion.h2>
          <p className="text-white/65 text-base mt-4 max-w-md mx-auto">
            Book a free trial session or ask us anything. Our team responds within 2 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass border border-[#e8ff3a]/30 rounded-3xl p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#e8ff3a] flex items-center justify-center text-4xl mx-auto mb-6">
                  💪
                </div>
                <h3 className="text-3xl font-black text-white mb-3">You&apos;re In!</h3>
                <p className="text-white/50 text-base">
                  Welcome to the Heeo family! Our team will reach out within 2 hours to book your free trial.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass border border-white/8 rounded-3xl p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com' },
                    { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                  ].map((field) => (
                    <div key={field.key} className={field.key === 'email' ? 'sm:col-span-1' : ''}>
                      <label className="block text-white/60 text-sm font-medium mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#e8ff3a]/50 transition-colors"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Fitness Goal</label>
                    <select
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e8ff3a]/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#111]">Select your goal</option>
                      <option value="lose-weight" className="bg-[#111]">Lose Weight</option>
                      <option value="build-muscle" className="bg-[#111]">Build Muscle</option>
                      <option value="improve-fitness" className="bg-[#111]">Improve Overall Fitness</option>
                      <option value="sport-performance" className="bg-[#111]">Sport Performance</option>
                      <option value="stress-relief" className="bg-[#111]">Stress Relief & Wellness</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a bit about yourself or ask us anything..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#e8ff3a]/50 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="cursor-none w-full bg-[#e8ff3a] text-black font-black py-4 rounded-xl text-base hover:bg-white transition-colors duration-300 animate-[pulse-glow_3s_ease-in-out_infinite]"
                >
                  Book My Free Trial Session →
                </motion.button>
                <p className="text-white/50 text-xs text-center">No commitment. No credit card. Just results.</p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: '📍',
                title: 'Find Us',
                lines: ['Ambli Bopal Road', 'Ahmedabad, Gujarat 380058'],
              },
              {
                icon: '🕐',
                title: 'Opening Hours',
                lines: ['Mon – Sat: 5:00 AM – 11:00 PM', 'Sunday: 6:00 AM – 9:00 PM'],
              },
              {
                icon: '📞',
                title: 'Call & WhatsApp',
                lines: ['+91 98765 43210', '+91 87654 32109'],
              },
              {
                icon: '✉️',
                title: 'Email Us',
                lines: ['hello@heeofitness.com', 'membership@heeofitness.com'],
              },
            ].map((info) => (
              <div
                key={info.title}
                className="glass border border-white/8 rounded-2xl p-5 flex gap-4 hover:border-[#e8ff3a]/20 transition-colors"
              >
                <span className="text-2xl mt-1">{info.icon}</span>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{info.title}</h4>
                  {info.lines.map((l) => (
                    <p key={l} className="text-white/50 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="glass border border-white/8 rounded-2xl overflow-hidden h-52 relative">
              <div
                className="w-full h-full bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80')` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass border border-[#e8ff3a]/40 px-4 py-2 rounded-full text-[#e8ff3a] text-sm font-bold">
                  📍 Ambli Bopal Road, Ahmedabad
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

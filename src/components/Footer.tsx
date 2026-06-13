'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Big name display */}
      <div className="relative overflow-hidden mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center select-none"
        >
          <span className="text-[18vw] font-black text-white/5 leading-none tracking-tighter block">
            HEEO
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-[#e8ff3a] rounded-sm rotate-6" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-black text-sm z-10">H</div>
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                HEEO<span className="text-[#e8ff3a]">.</span> FITNESS
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Ahmedabad&apos;s most motivated fitness community. Located on Ambli Bopal Road,
              we exist to make you unstoppable.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map((social) => (
                <button
                  key={social}
                  className="cursor-none w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:text-[#e8ff3a] hover:border-[#e8ff3a]/30 transition-all duration-300 text-xs font-bold"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">Navigate</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Classes', 'Our Team', 'Membership', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = '#' + link.toLowerCase().replace(' us', '').replace('ship', '').replace(' ', '-');
                      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-none text-white/60 hover:text-[#e8ff3a] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#e8ff3a] group-hover:w-4 transition-all duration-300" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li>
                <span className="text-[#e8ff3a]">📍</span>
                <span className="ml-2">Ambli Bopal Road,<br className="hidden" />Ahmedabad 380058</span>
              </li>
              <li>
                <span className="text-[#e8ff3a]">📞</span>
                <span className="ml-2">+91 98765 43210</span>
              </li>
              <li>
                <span className="text-[#e8ff3a]">✉️</span>
                <span className="ml-2">hello@heeofitness.com</span>
              </li>
              <li>
                <span className="text-[#e8ff3a]">⏰</span>
                <span className="ml-2">Mon–Sat 5AM–11PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Heeo Fitness. All rights reserved. Ambli Bopal Road, Ahmedabad.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Refund Policy'].map((item) => (
              <button key={item} className="cursor-none text-white/50 hover:text-white/80 text-xs transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

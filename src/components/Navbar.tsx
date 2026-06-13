'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Classes', href: '#classes' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/5 py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-none"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-[#e8ff3a] rounded-sm rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center font-black text-black text-sm z-10">H</div>
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              HEEO<span className="text-[#e8ff3a]">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 cursor-none group
                    ${activeLink === link.href ? 'text-[#e8ff3a]' : 'text-white/60 hover:text-white'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e8ff3a] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNav('#contact')}
              className="cursor-none bg-[#e8ff3a] text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300"
            >
              Join Now
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                onClick={() => handleNav(link.href)}
                className="text-4xl font-black text-white hover:text-[#e8ff3a] transition-colors cursor-none"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => handleNav('#contact')}
              className="mt-4 bg-[#e8ff3a] text-black font-bold text-lg px-8 py-3 rounded-full cursor-none"
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 1499, yearly: 999 },
    desc: 'Perfect for beginners taking their first steps.',
    features: [
      'Access to gym floor',
      '2 group classes/week',
      'Locker & shower access',
      'Basic fitness assessment',
      'App access & workout logs',
    ],
    notIncluded: ['Personal training sessions', 'Pool & recovery suite', 'Nutrition coaching'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Performance',
    price: { monthly: 2999, yearly: 2199 },
    desc: 'Our most popular plan for serious results.',
    features: [
      'Unlimited gym & classes',
      '4 PT sessions/month',
      'Pool & recovery suite',
      'Nutrition consultation',
      'Body composition tracking',
      'Priority class booking',
      'Guest passes (2/month)',
    ],
    notIncluded: [],
    cta: 'Join Now — Most Popular',
    popular: true,
  },
  {
    name: 'Elite',
    price: { monthly: 5499, yearly: 3999 },
    desc: 'The full Heeo experience, no limits.',
    features: [
      'Everything in Performance',
      'Unlimited PT sessions',
      'Dedicated locker',
      'Monthly health blood panel',
      'VIP event access',
      'Meal plan service',
      'Priority support 24/7',
    ],
    notIncluded: [],
    cta: 'Go Elite',
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-28 md:py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#e8ff3a] text-sm font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#e8ff3a]" />
            Membership Plans
            <span className="w-8 h-px bg-[#e8ff3a]" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Invest in Your <span className="gradient-text">Best Self</span>
          </motion.h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`cursor-none relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-[#e8ff3a]' : 'bg-white/20'}`}
            >
              <motion.div
                animate={{ x: annual ? 28 : 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-black"
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-white' : 'text-white/40'}`}>
              Annual
              <span className="text-xs text-black bg-[#e8ff3a] px-2 py-0.5 rounded-full font-bold">Save 30%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 flex flex-col cursor-none transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#e8ff3a] text-black'
                  : 'glass border border-white/8 hover:border-[#e8ff3a]/20 text-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#e8ff3a] text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase whitespace-nowrap">
                  ⚡ Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-black mb-1 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-black/70' : 'text-white/65'}`}>{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-black' : 'text-white'}`}>
                    ₹{(annual ? plan.price.yearly : plan.price.monthly).toLocaleString()}
                  </span>
                  <span className={`text-sm mb-2 ${plan.popular ? 'text-black/70' : 'text-white/65'}`}>/mo</span>
                </div>
                {annual && (
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-black/60' : 'text-white/55'}`}>
                    Billed annually — save ₹{((plan.price.monthly - plan.price.yearly) * 12).toLocaleString()}/yr
                  </p>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-black/80' : 'text-white/60'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-black ${plan.popular ? 'bg-black text-[#e8ff3a]' : 'bg-[#e8ff3a]/20 text-[#e8ff3a]'}`}>✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-black/30' : 'text-white/20'}`}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-black bg-white/5">✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`cursor-none w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-black text-[#e8ff3a] hover:bg-[#111]'
                    : 'bg-[#e8ff3a] text-black hover:bg-white'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/55 text-sm mt-8">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}

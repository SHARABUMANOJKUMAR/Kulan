import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$999',
      period: '/mo',
      desc: 'Perfect for small businesses starting their digital journey.',
      features: ['Basic SEO Optimization', 'Social Media Management (1 platform)', 'Monthly Analysis Report', 'Email Support'],
      popular: false,
    },
    {
      name: 'Business Plan',
      price: '$2,499',
      period: '/mo',
      desc: 'Advanced strategies for scaling companies requiring aggressive growth.',
      features: ['Advanced SEO & Content Strategy', 'Multi-channel Social Management', 'Paid Ad Campaigns Setup', 'Bi-weekly Strategy Calls', 'Priority Support'],
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: '$4,999',
      period: '/mo',
      desc: 'Enterprise-grade AI marketing systems and constant optimization.',
      features: ['AI Predictive Market Analysis', 'Full-stack Performance Marketing', 'Custom Web Applications', 'Dedicated Account Manager', '24/7 Premium Support'],
      popular: false,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">
            View Our Pricing Plan
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Transparent pricing for transformative results. Choose the plan that aligns with your growth targets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-[1px] group ${plan.popular ? 'lg:-translate-y-4' : ''}`}
            >
              {/* Border glow wrapper */}
              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${plan.popular ? 'bg-gradient-to-br from-gold/50 via-neon-green/20 to-transparent opacity-100 gold-glow' : 'bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100'}`} />
              
              <div className={`relative h-full bg-secondary-bg/95 rounded-3xl p-8 lg:p-10 border transition-all duration-300 ${plan.popular ? 'border-transparent' : 'border-white/5 group-hover:border-white/10'} flex flex-col`}>
                
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-gold to-yellow-500 text-primary-bg text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(231,200,115,0.5)]">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-text-gray text-sm mb-6 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold font-heading text-white">{plan.price}</span>
                  <span className="text-text-gray">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex flex-start gap-3">
                      <div className={`mt-1 p-1 rounded-full shrink-0 ${plan.popular ? 'bg-gold/20 text-gold' : 'bg-white/5 text-white/50'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-text-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-gold to-yellow-600 text-primary-bg shadow-[0_0_20px_rgba(231,200,115,0.3)]' 
                      : 'glass border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

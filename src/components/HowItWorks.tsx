import { motion } from 'motion/react';
import { Target, Search, Rocket, Headphones } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Strategy', icon: Target, desc: 'We analyze your market, competitors, and current positioning to find the fastest path to ROI.' },
    { num: '02', title: 'Planning', icon: Search, desc: 'Our AI tools map out the specific channels, content types, and funnels needed for the campaign.' },
    { num: '03', title: 'Implementation', icon: Rocket, desc: 'Execution of the strategy with pixel-perfect design, robust code, and high-converting copy.' },
    { num: '04', title: 'Customer Support', icon: Headphones, desc: 'Continuous monitoring, A/B testing, optimization, and monthly strategic alignment calls.' }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">
            How It Works
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            A battle-tested methodology designed to eliminate guesswork and reliably scale businesses through digital channels.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Animated Line Fill */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-gold via-neon-green to-gold/20 -translate-x-1/2" 
          />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Step Card */}
                  <div className={`md:w-1/2 flex ${isEven ? 'justify-start' : 'justify-end'} z-10 w-full`}>
                    <div className={`glass p-8 rounded-2xl w-full md:w-[90%] lg:w-[80%] hover:scale-105 transition-transform duration-300 relative group
                                    border border-white/5 hover:border-gold/30 hover:gold-glow`}>
                      <div className="absolute top-4 right-4 text-6xl font-black font-heading text-white/5 group-hover:text-gold/10 transition-colors">
                        {step.num}
                      </div>
                      
                      <div className="w-14 h-14 rounded-full bg-secondary-bg border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-primary-bg transition-colors">
                        <step.icon size={24} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                      <p className="text-text-gray loading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border border-white/10 items-center justify-center z-20 top-1/2 -translate-y-1/2 group-hover:border-gold transition-colors">
                    <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(231,200,115,0.6)]" />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="md:w-1/2"></div>
                  
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

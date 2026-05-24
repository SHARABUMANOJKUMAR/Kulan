import { motion } from 'motion/react';
import { Award, CreditCard, Headphones, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'World Marketing Awards',
      desc: 'Multiple industry awards for innovative digital campaigns that redefined boundaries.'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Solutions',
      desc: 'Proprietary machine learning models that predict consumer behavior accurately.'
    },
    {
      icon: Headphones,
      title: 'Premium Support 24/7',
      desc: 'Dedicated account managers providing real-time strategic assistance globally.'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      desc: 'Scalable pricing models tailored to your cash flow and growth stage.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-green/5 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              
              <div className="space-y-12">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-24 group"
                  >
                    {/* Glowing Dot */}
                    <div className="absolute left-[30px] top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gold bg-primary-bg group-hover:bg-gold transition-colors duration-300" />
                    
                    <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-white/10 group-hover:bg-white/[0.03]">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-secondary-bg rounded-xl border border-white/5 text-neon-green">
                          <feature.icon size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-wide">{feature.title}</h4>
                      </div>
                      <p className="text-text-gray pl-16 loading-relaxed text-sm lg:text-base">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-gold/50"></span>
              <span className="w-2 h-2 rounded-full bg-gold/20"></span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-[1.1] text-center lg:text-left">
              We Help Your <br />
              Business Grow <span className="text-gold italic font-light">Stronger</span>
            </h2>
            <p className="text-text-gray text-lg mb-8 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              Stop guessing with your marketing budget. We provide mathematical certainty through data and creativity combined.
            </p>

            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 lg:ml-auto">
               <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
               <div className="absolute inset-4 border border-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
               <div className="absolute inset-8 bg-gradient-to-tr from-secondary-bg to-white/5 rounded-full flex items-center justify-center shadow-2xl overflow-hidden glass-dark">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute z-10 text-center">
                    <span className="block text-4xl font-bold text-white">10x</span>
                    <span className="text-xs text-gold uppercase tracking-widest font-bold">Growth Rate</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

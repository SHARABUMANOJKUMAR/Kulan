import { motion } from 'motion/react';
import { LineChart, Layout, Briefcase, Mail, AppWindow, PieChart, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const services = [
    { num: '01', title: 'Marketing Strategy', icon: LineChart, desc: 'Data-driven blueprints designed to maximize ROI and dominate your specific market niche through intelligent positioning.' },
    { num: '02', title: 'Web Development', icon: Layout, desc: 'High-performance, cinematically designed web experiences that convert visitors into loyal customers.' },
    { num: '03', title: 'Business Strategy', icon: Briefcase, desc: 'Comprehensive alignment of your business objectives with cutting-edge digital capabilities for sustainable scaling.' },
    { num: '04', title: 'Email Marketing', icon: Mail, desc: 'AI-personalized email sequences that nurture leads and drive revenue on autopilot with high deliverability.' },
    { num: '05', title: 'App Development', icon: AppWindow, desc: 'Intuitive, scalable mobile applications built with modern frameworks to engage users on any device.' },
    { num: '06', title: 'Marketing Analysis', icon: PieChart, desc: 'Deep-dive analytics and predictive modeling to uncover hidden opportunities and optimize marketing spend.' }
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-gold"></div>
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              What Services We Provide<br className="hidden md:block"/> For Your Business
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative group rounded-[2rem] p-[1px] overflow-hidden"
              >
                {/* Animated Border Gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                />
                
                {/* Moving Border logic - simulated with a generic CSS class or absolute element */}
                <div className="absolute inset-0 group-hover:gold-glow transition-all duration-700" />
                
                {/* Content Card */}
                <div className="relative h-full bg-secondary-bg/95 rounded-[2rem] p-8 lg:p-10 border border-white/5 group-hover:border-white/10 transition-colors z-10 flex flex-col justify-between overflow-hidden">
                  
                  {/* Floating abstract shape */}
                  <motion.div 
                    animate={isHovered ? { scale: 1.2, rotate: 90, opacity: 0.1 } : { scale: 1, rotate: 0, opacity: 0.03 }}
                    transition={{ duration: 0.8 }}
                    className="absolute -top-10 -right-10 text-white"
                  >
                    <service.icon size={150} strokeWidth={0.5} />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start mb-8 text-white relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300">
                        <service.icon size={28} />
                      </div>
                      <span className="text-2xl font-bold font-heading text-white/20 group-hover:text-gold/50 transition-colors">{service.num}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-heading mb-4 text-white relative z-10">{service.title}</h3>
                    <p className="text-text-gray leading-relaxed mb-8 relative z-10">
                      {service.desc}
                    </p>
                  </div>

                  <motion.div 
                    animate={isHovered ? { x: 5 } : { x: 0 }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-primary-bg transition-colors cursor-pointer relative z-10 text-white"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

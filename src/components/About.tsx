import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    { icon: Target, title: 'Experience & Expertise' },
    { icon: Lightbulb, title: 'Customized Solutions' },
    { icon: Zap, title: 'AI Marketing Strategy' },
    { icon: TrendingUp, title: 'Business Growth Support' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Visuals */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-3/4 h-[80%] rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-bg/20 mix-blend-overlay" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 right-0 w-[60%] h-[50%] rounded-3xl overflow-hidden border-4 border-primary-bg glass-dark z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Analytics dashboard" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Data-Driven Growth</h4>
                  <p className="text-text-gray text-sm">Powered by AI Insights</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Save Your Time And <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                Grow Faster With TEKZIO
              </span>
            </h2>
            
            <p className="text-text-gray text-lg mb-10 leading-relaxed">
              We blend creative marketing strategies with cutting-edge artificial intelligence to deliver unprecedented growth for our clients. Experience the future of digital marketing today.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-5 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-gold/30 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-white/5 text-gold group-hover:bg-gold/10 transition-colors">
                    <feature.icon size={24} />
                  </div>
                  <h4 className="text-white font-semibold mt-1 group-hover:text-gold transition-colors">{feature.title}</h4>
                </motion.div>
              ))}
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Data-backed performance marketing",
                "Advanced AI predictive audience targeting",
                "Full-stack digital brand transformation"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-text-gray">
                  <CheckCircle2 size={20} className="text-neon-green flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/10 hover:border-white/30"
              >
                Discover Our Story
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

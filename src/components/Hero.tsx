import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-green/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full pointer-events-none" />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/30 gold-glow"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50],
            x: [null, (Math.random() - 0.5) * 100],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/20 mb-6">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium tracking-wide">Digital Marketing Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 text-glow">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-white">
                Business With
              </span><br />
              Intelligent Marketing
            </h1>
            
            <p className="text-lg md:text-xl text-text-gray mb-10 max-w-lg leading-relaxed">
              We craft AI-powered digital experiences, growth strategies, branding, and high-converting marketing systems for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-primary-bg font-bold flex items-center justify-center gap-3 overflow-hidden gold-glow"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </motion.button>
              </Link>
              
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full glass border-white/20 font-bold text-white flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center pl-1">
                    <Play size={14} className="text-white" />
                  </div>
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract UI Elements floating over image */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 z-20 glass-dark p-4 rounded-2xl flex items-center gap-4 gold-glow"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-neon-green green-glow" />
              </div>
              <div>
                <p className="text-xs text-text-gray font-medium">Conversion Rate</p>
                <p className="text-xl font-bold text-white">+84.5%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -right-10 z-20 glass-dark p-5 rounded-2xl gold-glow"
            >
              <p className="text-xs text-text-gray font-medium mb-2">AI Optimization AI</p>
              <div className="flex gap-1 h-12 items-end">
                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 bg-gold rounded-t-sm" 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[550px] rounded-[2rem] overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent z-10" />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Marketing AI" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

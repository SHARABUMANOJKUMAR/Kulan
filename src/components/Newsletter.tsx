import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 relative px-6 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[3rem] overflow-hidden bg-secondary-bg border border-white/10"
      >
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 mix-blend-screen rounded-full animate-blob pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 mix-blend-screen rounded-full animate-blob animation-delay-2000 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-20 md:py-28 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
            <span className="text-white text-sm font-medium tracking-wide">Stay Updated</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white text-glow">
            Subscribe To Our <br className="hidden md:block"/> Newsletter
          </h2>
          
          <p className="text-text-gray mb-10 max-w-xl text-lg">
            Get exclusive marketing insights, AI growth strategies, and agency news delivered straight to your inbox weekly.
          </p>

          <form className="w-full max-w-lg relative" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              {/* Outer glow on focus-within */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-neon-green rounded-full blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
              
              <div className="relative flex items-center glass-dark rounded-full p-2 border border-white/10 group-focus-within:border-gold/50 transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent w-full px-6 py-3 text-white focus:outline-none placeholder:text-text-gray/50 font-medium"
                  required
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-gradient-to-r from-gold to-yellow-600 text-primary-bg font-bold px-8 py-3.5 rounded-full flex items-center gap-2 m-1 shrink-0 group/btn shadow-[0_0_15px_rgba(231,200,115,0.3)] hover:shadow-[0_0_25px_rgba(231,200,115,0.5)] transition-shadow"
                >
                  Subscribe
                  <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </form>
          
          <p className="text-xs text-text-gray/50 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

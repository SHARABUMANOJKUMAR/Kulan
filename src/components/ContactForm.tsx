import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-white/5 border border-white/10 mb-6 text-gold font-medium"
          >
            Contact Me
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            Send Your Message
          </motion.h2>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-secondary-bg/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-gray/50"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-secondary-bg/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-gray/50"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Your Subject" 
                className="w-full bg-secondary-bg/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-gray/50"
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Your Phone" 
                className="w-full bg-secondary-bg/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-gray/50"
              />
            </div>
          </div>
          <div>
            <textarea 
              placeholder="Your Message" 
              rows={6}
              className="w-full bg-secondary-bg/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-gray/50 resize-y"
            ></textarea>
          </div>
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#21615B] to-[#1A4D48] hover:from-[#2A7A72] hover:to-[#21615B] text-white font-medium px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Send Your Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

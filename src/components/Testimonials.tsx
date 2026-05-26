import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "TEKZIO didn't just redesign our website; they re-engineered our entire digital acquisition funnel. Our lead volume increased by 300% in the first quarter alone.",
      name: "Eleanor Vance",
      role: "CMO, Nexus Tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
    },
    {
      text: "Their AI-driven approach to market analysis uncovered customer segments we completely ignored. The resulting campaign was our most profitable ever.",
      name: "Marcus Chen",
      role: "CEO, Vertex Retail",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
    },
    {
      text: "The sheer cinematic quality of the assets they produced elevated our brand perception overnight. It’s rare to find an agency that nails both art and math.",
      name: "Sophia Rossi",
      role: "Founder, Lumina",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary-bg/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the visionary leaders who trusted us with their growth.
          </p>
        </div>

        {/* Auto Slider Container */}
        <div className="relative w-full overflow-hidden flex py-8">
          
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-4 shrink-0"
          >
            {reviews.concat(reviews).map((review, idx) => (
              <div 
                key={idx} 
                className="w-[350px] md:w-[450px] shrink-0 glass p-8 rounded-3xl relative border border-white/5 hover:border-gold/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-8 right-8 text-white/5">
                  <Quote size={60} />
                </div>
                
                <div className="flex gap-1 text-gold mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                
                <p className="text-white text-lg mb-8 relative z-10 font-medium leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-gold text-sm font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

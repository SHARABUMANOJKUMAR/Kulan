import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "The Future of AI in Digital Marketing Strategies",
      category: "Marketing",
      date: "Oct 24, 2026",
      author: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "How to Optimize Your Conversion Funnel in 2027",
      category: "Optimization",
      date: "Oct 18, 2026",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Design Principles for High-Converting Landing Pages",
      category: "Web Design",
      date: "Oct 12, 2026",
      author: "David Ross",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 relative bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">
              Latest Marketing Insights
            </h2>
            <p className="text-text-gray max-w-xl">
              Stay ahead of the curve with our expert analyses, strategic breakdowns, and industry predictions.
            </p>
          </motion.div>
          <button className="text-gold font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            View All Posts <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer rounded-2xl glass-dark border border-white/5 hover:border-white/20 transition-all overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-primary-bg/20 group-hover:bg-transparent transition-colors duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-bg/95 border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-text-gray text-xs mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-gold" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-gold transition-colors">
                    Read More 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

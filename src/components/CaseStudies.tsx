import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: "Global FinTech Reskin",
      client: "Vertex Capital",
      category: "Web & Branding",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AI Growth Engine",
      client: "Nexus AI",
      category: "Marketing Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "E-Commerce Dominance",
      client: "Aero Style",
      category: "Conversion Rate",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964&auto=format&fit=crop"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-secondary-bg/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-green/20 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green"></span>
            <span className="text-neon-green text-sm font-medium tracking-wide">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Project <span className="text-gold">Summary</span>
          </h2>
          <p className="text-text-gray mt-4 max-w-2xl mx-auto">
            Explore a detailed summary of our most impactful digital projects. We craft unique solutions tailored to advance our partners' growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <div>
                  <p className="text-neon-green font-medium text-sm tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-gray/70 text-sm">
                    Client: <span className="text-white/90">{project.client}</span>
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-gold group-hover:text-primary-bg group-hover:border-gold transition-all duration-300 delay-75">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-white/20 hover:border-white text-white font-bold transition-all hover:bg-white hover:text-primary-bg"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}

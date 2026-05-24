import { motion } from 'motion/react';
import { Aperture, Triangle, Hexagon, Circle, SquareActivity, Codepen, Feather } from 'lucide-react';

export default function PartnerLogos() {
  const logos = [
    { icon: Aperture, name: 'Lumina' },
    { icon: Triangle, name: 'Vertex' },
    { icon: Hexagon, name: 'Nexus' },
    { icon: Circle, name: 'Orbit' },
    { icon: SquareActivity, name: 'Pulse' },
    { icon: Codepen, name: 'Cube' },
    { icon: Feather, name: 'Aero' },
  ];

  return (
    <div className="py-16 border-y border-white/5 bg-primary-bg/50 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary-bg to-transparent z-10" />
      
      <p className="text-text-gray/60 text-sm font-medium tracking-widest uppercase mb-8 text-center">Trusted by innovative companies worldwide</p>

      <div className="w-full flex space-x-16 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex space-x-16 md:space-x-24 shrink-0 px-8"
        >
          {logos.concat(logos).map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-2 group cursor-pointer">
              <logo.icon 
                size={48} 
                className="text-white/20 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                strokeWidth={1.5} 
              />
              <span className="text-white/20 font-bold tracking-wider text-xl group-hover:text-white transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

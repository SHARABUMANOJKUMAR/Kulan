import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // Assuming 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Statistics() {
  const stats = [
    { value: 450, suffix: "+", label: "Completed Projects" },
    { value: 99, suffix: "%", label: "Customer Satisfaction" },
    { value: 125, suffix: "%", label: "Global Conversion" },
    { value: 42, suffix: "", label: "Awards Winning" },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-secondary-bg"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gold/5 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-y border-white/5 py-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`text-center ${idx !== stats.length - 1 ? 'md:border-r border-white/5' : ''}`}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-text-gray">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-text-gray font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

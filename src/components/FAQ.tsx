import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What rendering or delivery timeline can I expect?",
    answer: "We typically deliver initial concepts within 5-7 business days, with complete project turnaround depending on the scope and complexity. We prioritize both speed and premium quality."
  },
  {
    question: "Do you offer custom digital marketing packages?",
    answer: "Absolutely. We understand that every business is unique. We tailor our SEO, marketing, and ad campaigns specifically to your target audience and growth objectives."
  },
  {
    question: "How does the Pay Per Lead service work?",
    answer: "Our Pay Per Lead model ensures you only pay for verified, high-intent prospects that match your target criteria. We handle the campaign generation, and you receive direct inquiries."
  },
  {
    question: "What is your approach to website development?",
    answer: "We focus on a mobile-first, conversion-optimized design philosophy. Every site we build is natively responsive, lightning-fast, and structured for optimal search engine visibility."
  },
  {
    question: "Can I upgrade my services later on?",
    answer: "Yes, our solutions are highly scalable. You can start with fundamental core services like Web Development and later integrate SEO or Telecalling as your business expands."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative z-10 bg-primary-bg overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold tracking-widest text-sm font-semibold uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-text-gray text-lg">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="space-y-4 relative z-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-secondary-bg/80 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-heading text-lg font-semibold text-white pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-gold text-primary-bg' : 'bg-white/5 text-white'}`}>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-text-gray leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

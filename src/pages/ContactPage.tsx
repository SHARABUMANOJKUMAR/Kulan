import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
      
      {/* Map Section */}
      <section className="py-20 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our <span className="text-gold">Location</span></h2>
            <p className="text-text-gray max-w-2xl mx-auto">Visit us at our office in Bangalore to discuss your next big project over a cup of coffee.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass border border-white/10"
          >
            <iframe 
               src="https://maps.google.com/maps?q=Tekzio%20166,%203th%20cross%20Amco%20Layout%20sahakar%20Nagar%20Bangalore%20560092&t=&z=14&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Office Location Map"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
             <p className="text-white text-lg font-medium"><span className="text-gold">Address:</span> Tekzio 166, 3th cross Amco Layout sahakar Nagar Bangalore 560092</p>
          </motion.div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}

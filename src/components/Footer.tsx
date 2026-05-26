import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-primary-bg pt-32 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[200px] bg-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 pr-4">
            <a href="#" className="font-heading font-bold text-3xl tracking-wide flex items-center mb-6 group">
              <span className="text-gold">TEK</span><span className="text-white">ZIO</span>
            </a>
            <p className="text-text-gray mb-8 max-w-sm">
              A premium digital marketing agency driven by artificial intelligence and designed for modern visionaries.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  href="#"
                  key={idx}
                  whileHover={{ y: -5, rotate: 5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-gold hover:text-primary-bg hover:border-gold transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold font-heading mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {['Marketing Strategy', 'Web Development', 'Email Marketing', 'SEO Optimization'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-text-gray hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold font-heading mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Case Studies', 'Pricing'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-text-gray hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-8">
            <h4 className="text-white font-bold font-heading mb-6 text-lg">Contact Information</h4>
            <div className="space-y-4 text-text-gray">
              <a href="mailto:info@tekzio.in" className="hover:text-white transition-colors flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" className="w-6 h-6 object-contain" />
                </div>
                info@tekzio.in
              </a>
              <a href="tel:9483004142" className="hover:text-white transition-colors flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <img src="https://img.icons8.com/color/48/phone.png" alt="Phone" className="w-6 h-6 object-contain" />
                </div>
                +91 9483004142
              </a>
              <div className="flex items-start gap-3 mt-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <img src="https://img.icons8.com/color/48/map-pin.png" alt="Location" className="w-6 h-6 object-contain" />
                </div>
                <p className="leading-relaxed">
                  Tekzio 166, 3rd cross,<br/>
                  Amco Layout, Sahakar Nagar<br/>
                  Bangalore 560092
                </p>
              </div>
            </div>
            
            <Link to="/contact" className="mt-8 inline-block relative group overflow-hidden pl-6 pr-12 py-3 rounded-full border border-white/20 text-white font-medium">
              <span className="relative z-10">Start a Project</span>
              <div className="absolute right-2 top-2 bottom-2 w-8 bg-gold rounded-full flex items-center justify-center text-primary-bg group-hover:w-[calc(100%-16px)] transition-all duration-300 ease-out z-0">
                <ArrowUpRight size={16} className="relative z-10 group-hover:text-primary-bg ml-auto mr-2 group-hover:m-auto transition-all" />
              </div>
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-gray">
          <p>© 2026 TEKZIO Digital Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

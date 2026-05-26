import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed w-full z-50 top-0 transition-all duration-300">
      {/* Topbar inside header to handle scrolling together cleanly */}
      <div className={`hidden md:flex justify-between items-center px-8 bg-secondary-bg border-b border-white/5 text-xs font-medium transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 py-0 opacity-0' : 'h-10 py-2 opacity-100'}`}>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
            <span>Monday - Friday, 10am - 05pm</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <span>Info@tekzio.in</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <span>+91 9483004142</span>
          </div>
        </div>
      </div>
      
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-primary-bg/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-3xl tracking-wide flex items-center">
            <span className="text-gold">TEK</span><span className="text-white">ZIO</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link to={link.href} key={link.name} className="relative group cursor-pointer block py-2">
                  <span className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-text-gray group-hover:text-white'}`}>
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                  </span>
                  <span className={`absolute bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-primary-bg font-semibold text-sm hover:shadow-[0_0_15px_rgba(231,200,115,0.4)] transition-all"
              >
                Get Started Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 mt-4 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className={`font-medium py-2 border-b border-white/5 opacity-80 hover:opacity-100 hover:text-gold ${location.pathname === link.href ? 'text-gold opacity-100' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-3 rounded-full bg-gold text-primary-bg font-semibold text-sm">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

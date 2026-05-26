import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/919483004142"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1ebd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 object-contain" />
      </motion.a>
    </AnimatePresence>
  );
}

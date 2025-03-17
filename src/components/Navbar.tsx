
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'py-3 glassmorphism' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          DeepSee
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'Process', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.button
            className="bg-primary px-6 py-2 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 100, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            Get Started
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative">
              <span 
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span 
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={cn(
          'fixed inset-0 glassmorphism z-40 md:hidden',
          menuOpen ? 'flex' : 'hidden'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center space-y-8">
          {['Features', 'Process', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-medium nav-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.button
            className="mt-4 bg-primary px-8 py-3 rounded-full text-white shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

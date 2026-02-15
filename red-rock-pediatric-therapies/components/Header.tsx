import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Scheduling & Billing', href: '#insurance' },
  { label: 'Locations', href: '#locations' },
  { label: 'Our Therapists', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Representation */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 bg-brand-orange rounded-lg overflow-hidden flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
             <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-300 rounded-full translate-x-1/3 -translate-y-1/3"></div>
             <div className="absolute bottom-0 left-0 w-8 h-4 bg-brand-teal skew-y-12 translate-y-1"></div>
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-brand-dark lg:text-white lg:drop-shadow-md'}`}>
            Red Rock <span className="text-brand-orange">Pediatric Therapies</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-brand-teal' : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-brand-orange text-white text-sm font-bold rounded-full shadow-lg hover:bg-orange-600 transition-colors transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-slate-700 hover:text-brand-orange"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-6 py-3 bg-brand-orange text-white text-center font-bold rounded-lg shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
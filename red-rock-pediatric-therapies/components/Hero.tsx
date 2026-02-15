import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/therapykids/1920/1080"
          alt="Child in therapy session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/90 via-brand-teal/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-orange/20 border border-brand-orange/40 backdrop-blur-sm rounded-full mb-6">
             <span className="text-white font-medium text-sm tracking-wider uppercase">Approved Utah Fits All Provider</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Empowering Every Child's <span className="text-yellow-300 italic">Potential</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-lg">
            We provide personalized, evidence-based Speech, Occupational, and Feeding therapy services. 
            Believing that every child deserves the tools to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
              Explore Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full shadow-lg hover:bg-white/20 transition-all flex items-center justify-center">
              Book an Evaluation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};
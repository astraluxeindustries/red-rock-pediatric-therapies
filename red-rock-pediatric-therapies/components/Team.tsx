import React, { useState } from 'react';
import { THERAPISTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Therapist } from '../types';

export const Team: React.FC = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);

  return (
    <section id="team" className="py-24 bg-brand-blue/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-3">Our Therapists</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark">Meet Our Dedicated Team</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {THERAPISTS.map((therapist) => (
            <motion.div
              key={therapist.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedTherapist(therapist)}
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                <img 
                  src={therapist.image} 
                  alt={therapist.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-brand-dark">{therapist.name}</h4>
                <p className="text-sm text-brand-orange font-medium mt-1 uppercase tracking-wide">{therapist.title}</p>
                <button className="mt-4 text-sm text-slate-500 underline decoration-brand-teal/50 hover:text-brand-teal">
                  Read Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Bio */}
      <AnimatePresence>
        {selectedTherapist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedTherapist(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTherapist(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 aspect-square md:aspect-auto">
                    <img src={selectedTherapist.image} alt={selectedTherapist.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:w-2/3">
                    <h3 className="text-3xl font-serif font-bold text-brand-dark mb-1">{selectedTherapist.name}</h3>
                    <p className="text-brand-orange font-bold text-sm uppercase mb-6">{selectedTherapist.title}</p>
                    <p className="text-slate-600 leading-relaxed text-lg">{selectedTherapist.bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
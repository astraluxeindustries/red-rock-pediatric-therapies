import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-3">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Comprehensive Care for Your Child</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our multidisciplinary team partners with families to create cohesive and focused services designed to meet specific developmental goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-brand-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand-teal/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-brand-dark mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
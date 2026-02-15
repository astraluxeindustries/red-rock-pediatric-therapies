import React from 'react';
import { INSURANCES, LOCATIONS, TESTIMONIALS } from '../constants';
import { MapPin, CreditCard, Award, Quote } from 'lucide-react';

export const InfoSections: React.FC = () => {
  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Quote size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl font-serif text-white">Words From Our Families</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-colors">
                <p className="text-lg text-slate-300 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white">
                        {t.author.charAt(0)}
                    </div>
                    <span className="font-bold text-brand-blue font-serif">— {t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Billing */}
      <section id="insurance" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-3">Scheduling & Billing</h2>
              <h3 className="text-4xl font-serif text-brand-dark mb-6">Insurance & Payment Options</h3>
              <p className="text-slate-600 mb-8 text-lg">
                We are excited to announce that we accept major insurances and are now approved providers with the <strong>Utah Fits All Scholarship Program</strong>. We also offer affordable private pay options and no waitlist.
              </p>
              
              <div className="bg-brand-blue/30 p-8 rounded-2xl mb-8">
                <h4 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <Award className="text-brand-orange" /> Accepted Insurances
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {INSURANCES.map((ins, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-brand-teal rounded-full" />
                      {ins.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-brand-teal/10">
                    <p className="text-sm text-slate-500 font-medium">Coming soon: More provider options.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-200 rounded-xl text-center">
                      <p className="text-slate-500 text-sm uppercase tracking-wide mb-1">Evaluation (45 min)</p>
                      <p className="text-3xl font-bold text-brand-teal">$250</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-xl text-center">
                      <p className="text-slate-500 text-sm uppercase tracking-wide mb-1">Treatment (30 min)</p>
                      <p className="text-3xl font-bold text-brand-teal">$85</p>
                  </div>
              </div>
            </div>
            
            <div className="relative">
                <div className="aspect-square rounded-full bg-brand-orange/10 absolute -top-10 -right-10 w-64 h-64 -z-10" />
                <img 
                    src="https://picsum.photos/seed/insurance/800/800" 
                    alt="Administrative support" 
                    className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                    <h5 className="font-bold text-brand-dark mb-2">Children's First Education Fund</h5>
                    <p className="text-sm text-slate-600 mb-4">We are an approved vendor for CFEF providing scholarships to students K-12 with disabilities.</p>
                    <a href="#" className="text-brand-orange font-bold text-sm hover:underline">Visit CFEF Website &rarr;</a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Contact */}
      <section id="locations" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-3">Our Locations</h2>
                <h3 className="text-4xl font-serif text-brand-dark">Conveniently Located in Southern Utah</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {LOCATIONS.map((loc, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-teal">
                        <MapPin className="text-brand-orange mb-4" size={32} />
                        <h4 className="text-xl font-bold text-brand-dark mb-2">{loc.name}</h4>
                        <p className="text-slate-600 text-lg">{loc.address}</p>
                        <p className="text-slate-500">{loc.cityStateZip}</p>
                    </div>
                ))}
            </div>

            <div id="contact" className="mt-24 bg-brand-teal rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to get started?</h3>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
                        Contact us today to schedule an evaluation or learn more about our services. 
                        We also offer Flex Spending/Health Savings Account payments.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-8 py-4 bg-white text-brand-teal font-bold rounded-full shadow-lg hover:bg-slate-100 transition-colors">
                            Call Now: (555) 123-4567
                        </button>
                        <button className="px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                            Send us a Message
                        </button>
                    </div>
                </div>
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            </div>
        </div>
      </section>
    </>
  );
};
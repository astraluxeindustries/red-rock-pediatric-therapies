import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-serif font-bold text-white tracking-tight mb-4 block">
            Red Rock <span className="text-brand-orange">Pediatric Therapies</span>
          </span>
          <p className="mb-6 max-w-sm">
            Providing comprehensive speech, occupational, and feeding therapy services to help children reach their full potential.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
            <li><a href="#team" className="hover:text-brand-orange transition-colors">Our Therapists</a></li>
            <li><a href="#locations" className="hover:text-brand-orange transition-colors">Locations</a></li>
            <li><a href="#insurance" className="hover:text-brand-orange transition-colors">Billing</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Accessibility</li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Red Rock Pediatric Therapies. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with care.</p>
      </div>
    </footer>
  );
};
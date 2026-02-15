import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { InfoSections } from './components/InfoSections';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <InfoSections />
      </main>
      <Footer />
    </div>
  );
};

export default App;
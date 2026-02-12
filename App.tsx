import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBento } from './components/FeatureBento';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureBento />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
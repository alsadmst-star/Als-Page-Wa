import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FooterCTA from './components/FooterCTA';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Comparison />
        <Features />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <FooterCTA />
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© 2025 IA Humanizada. All rights reserved.</p>
      </footer>
    </div>
  );
}
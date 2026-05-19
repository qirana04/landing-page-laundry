import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LaundrySection from './components/LaundrySection';
import HomeServiceSection from './components/HomeServiceSection';
import PriceCalculator from './components/PriceCalculator';
import TermsSection from './components/TermsSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhyUsSection from './components/WhyUsSection';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <div className="relative">
      {/* Cinematic Intro */}
      <IntroAnimation onComplete={handleIntroComplete} />

      {/* Main Site */}
      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Navbar />
          <main>
            <HeroSection />
            <WhyUsSection />
            <LaundrySection />
            <HomeServiceSection />
            <PriceCalculator />
            <TermsSection />
          </main>
          <Footer />
          <Chatbot />
        </motion.div>
      )}
    </div>
  );
}

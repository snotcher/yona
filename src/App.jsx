import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import DayWithYou from './components/DayWithYou';
import Closing from './components/Closing';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div id="scroll-container" className="app-container">
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Hero />
          <LoveLetter />
          <DayWithYou />
          <Closing />
        </>
      )}
    </div>
  );
}

export default App;

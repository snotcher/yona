import React from 'react';
import { motion } from 'framer-motion';
import { Lily, Seashell } from './Icons';
import '../styles/Loader.css';

const CoffeeBean = ({ color = "currentColor", width, height }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4C11.5 4 8 7.5 8 12C8 16.5 11.5 20 16 20C20.5 20 24 16.5 24 12C24 7.5 20.5 4 16 4Z" />
    <path d="M12 4C7.5 4 4 7.5 4 12C4 16.5 7.5 20 12 20C16.5 20 20 16.5 20 12C20 7.5 16.5 4 12 4Z" />
    <path d="M8 12S11.5 10.5 16 12" fill="none" />
  </svg>
);

const Loader = () => {
  const textWords = ["made", "with", "love,", "just", "for", "you"];

  return (
    <motion.div 
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="loader-svg-container">
        <motion.div 
          className="glow-backend"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 1], opacity: [0, 0.8, 0.5] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Tiny floating elements */}
        <motion.div style={{ position: 'absolute', top: '10%', left: '-10%', zIndex: 10 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <CoffeeBean width="24" height="24" color="#c9957a" />
        </motion.div>
        <motion.div style={{ position: 'absolute', top: '70%', right: '-5%', zIndex: 10 }} animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }} transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
          <Lily width="32" height="32" color="#c9957a" />
        </motion.div>
        <motion.div style={{ position: 'absolute', bottom: '-5%', left: '10%', zIndex: 10 }} animate={{ y: [0, -8, 0], rotate: [-10, 0, -10] }} transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}>
          <Seashell width="28" height="28" color="#d4a574" />
        </motion.div>

        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible', zIndex: 5 }}>
          <defs>
            <clipPath id="coffee-clip">
              <motion.rect 
                x="20" 
                y="130" 
                width="120" 
                height="0" 
                animate={{ y: 55, height: 75 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </clipPath>
          </defs>

          {/* Steam Lines */}
          <motion.path 
            d="M 60 45 C 50 35, 75 25, 60 5" 
            fill="none" stroke="#e8d5b7" strokeWidth="3" strokeLinecap="round" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0], y: -5 }}
            transition={{ duration: 2.5, delay: 2.0, ease: "easeOut", repeat: Infinity }}
          />
          <motion.path 
            d="M 80 45 C 95 35, 65 25, 80 5" 
            fill="none" stroke="#e8d5b7" strokeWidth="3.5" strokeLinecap="round" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0], y: -5 }}
            transition={{ duration: 2.5, delay: 2.3, ease: "easeOut", repeat: Infinity }}
          />
          <motion.path 
            d="M 100 45 C 90 35, 115 25, 100 5" 
            fill="none" stroke="#e8d5b7" strokeWidth="3" strokeLinecap="round" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0], y: -5 }}
            transition={{ duration: 2.5, delay: 2.6, ease: "easeOut", repeat: Infinity }}
          />

          {/* Saucer */}
          <path d="M 25 125 Q 80 145 135 125 Q 80 135 25 125 Z" fill="#fae8dc" stroke="#c9957a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Cup Handle */}
          <path d="M 115 75 C 160 70, 155 115, 110 115" fill="none" stroke="#c9957a" strokeWidth="8" strokeLinecap="round" />

          {/* Cup Body Background */}
          <path d="M 35 60 C 35 135, 125 135, 125 60 Z" fill="#fff" stroke="#c9957a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Coffee fill with clipPath */}
          <path d="M 38 60 C 38 130, 122 130, 122 60 Z" fill="#c8956c" opacity="0.85" clipPath="url(#coffee-clip)" />

          {/* Cup Rim */}
          <ellipse cx="80" cy="60" rx="45" ry="12" fill="none" stroke="#c9957a" strokeWidth="5" />
        </svg>
      </div>

      <div className="loader-text-container">
        <div className="loader-text">
          {textWords.map((word, i) => (
            <motion.span 
              key={i} 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 2.5 + i * 0.1, duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.div 
          className="loader-subtext"
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          for Yona <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9957a" style={{ marginTop: '2px' }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;

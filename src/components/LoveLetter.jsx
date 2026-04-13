import React from 'react';
import { motion } from 'framer-motion';
import { Seashell, Lily, WaxSeal } from './Icons';
import '../styles/LoveLetter.css';

const letterLines = [
  "My dearest Yona,",
  "I know things feel heavy right now, and I just wanted to remind you of something important.",
  "You are so deeply loved, exactly as you are.",
  "On your bright days, you shine like a sunflower, opening up to the world.",
  "And on the quiet, grey days... I am still right here beside you.",
  "You don't have to carry it all alone. Lean on me whenever you need to.",
  "Your smile is my favorite thing, but your heart is what I treasure most.",
  "I'm always here for you. Yesterday, today, and tomorrow.",
  "Take a deep breath. You are doing wonderfully.",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)', color: 'var(--color-muted)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    color: 'var(--color-text)',
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const LoveLetter = () => {
  return (
    <section className="section-container letter-section">
      <div className="letter-overlay"></div>
      
      {/* Absolute stickers for the letter section */}
      <motion.img 
        src="/download__5_-removebg-preview.png" 
        alt="sticker" 
        style={{ position: 'absolute', top: '15%', left: 'clamp(2%, 8%, 8%)', width: 'clamp(70px, 18vw, 130px)', zIndex: 15, opacity: 0.9, pointerEvents: 'none' }}
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src="/download__6_-removebg-preview.png" 
        alt="sticker" 
        style={{ position: 'absolute', bottom: '20%', left: '10%', width: '110px', zIndex: 5, opacity: 0.85, pointerEvents: 'none' }}
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src="/download__8_-removebg-preview.png" 
        alt="sticker" 
        style={{ position: 'absolute', top: '25%', right: 'clamp(2%, 5%, 5%)', width: 'clamp(75px, 20vw, 140px)', zIndex: 15, opacity: 0.9, pointerEvents: 'none' }}
        animate={{ y: [0, -12, 0], rotate: [10, 0, 10] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="letter-paper-wrapper">
        <motion.div 
          className="letter-paper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="letter-decoration decor-tl">
            <Lily width="60" height="60" color="var(--color-gold)" />
          </div>
          
          <div className="letter-decoration decor-br">
            <Seashell width="70" height="70" color="var(--color-gold)" />
          </div>

          <motion.div 
            className="letter-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {letterLines.map((line, index) => (
              <motion.p key={index} className="letter-line" variants={itemVariants}>
                {line}
              </motion.p>
            ))}
            
            <motion.div className="signature letter-line" variants={itemVariants}>
              With all my love <br />
              Snotcher
            </motion.div>
          </motion.div>

          <motion.div 
            className="wax-seal"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 4.5, type: "spring" }}
          >
            <WaxSeal width="60" height="60" color="#a64b4b" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;

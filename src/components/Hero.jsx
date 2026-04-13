import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { Lily, Sunflower } from './Icons';
import '../styles/Hero.css';

const FloatingSVG = ({ Icon, top, left, config, color }) => {
  return (
    <motion.div 
      className="floating-floral"
      style={{ position: 'absolute', top, left }}
      animate={{ y: [0, -20, 0] }}
      transition={{ 
        duration: config.duration / 1000, 
        delay: config.delay / 1000, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <Icon width="45" height="45" color={color} />
    </motion.div>
  );
};

const FloatingImage = ({ src, top, left, config, width = 100, rotate = 0 }) => {
  return (
    <motion.img 
      src={src} 
      className="floating-floral" 
      alt="sticker"
      style={{ position: 'absolute', top, left, width: `${width}px`, zIndex: 1, opacity: 0.9, pointerEvents: 'none' }} 
      initial={{ rotate }}
      animate={{ y: [0, -15, 0], rotate: [rotate, rotate + 5, rotate] }}
      transition={{ 
        duration: config.duration / 1000, 
        delay: config.delay / 1000, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />
  );
};

const Hero = () => {
  const floaters = useMemo(() => [
    { id: 1, Icon: Lily, top: '20%', left: '15%', color: '#d4a574', config: { duration: 4000, delay: 0 } },
    { id: 2, Icon: Sunflower, top: '60%', left: '80%', color: '#c9956c', config: { duration: 5000, delay: 1000 } },
    { id: 3, Icon: Lily, top: '75%', left: '25%', color: '#c9956c', config: { duration: 4500, delay: 500 } },
    { id: 4, Icon: Sunflower, top: '15%', left: '70%', color: '#d4a574', config: { duration: 6000, delay: 200 } }
  ], []);

  return (
    <section className="section-container hero-container">
      {floaters.map(node => (
        <FloatingSVG key={node.id} Icon={node.Icon} top={node.top} left={node.left} config={node.config} color={node.color} />
      ))}

      <FloatingImage src="/Download_Pink_Lily_Flower_with_White_Spots_Isolated_for_free-removebg-preview.png" top="10%" left="5%" width={120} rotate={-15} config={{ duration: 4500, delay: 0 }} />
      <FloatingImage src="/download__4_-removebg-preview.png" top="70%" left="10%" width={100} rotate={10} config={{ duration: 5200, delay: 600 }} />
      <FloatingImage src="/download__3_-removebg-preview.png" top="20%" left="85%" width={110} rotate={20} config={{ duration: 4800, delay: 300 }} />

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
      >
        <h1 className="yona-title">Yona</h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          this is for you
        </motion.p>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0], y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
      >
        <FiChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Sunflower, Seashell } from './Icons';
import { FiHeart } from 'react-icons/fi';
import '../styles/Closing.css';

const StarField = () => {
  const canvasRef = React.useRef(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars = Array.from({length: 60}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, s.alpha))})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
};

const Closing = () => {

  return (
    <section className="closing-section">
      <StarField />

      <div className="closing-content">
        <motion.p
          className="closing-message"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          No matter what the days bring, just knowing you’re in my life makes everything feel a little bit lighter. I appreciate you, more than words can say.
        </motion.p>

        <motion.div
          className="yona-closing"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        >
          Yona 
          <span className="heart-span">
            <FiHeart size="40" fill="currentColor" />
          </span>
        </motion.div>
      </div>

      <div className="whale-container">
        <div className="whale-track">
          <motion.div
            className="the-whale"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/Galaxy_Whale_In_Watercolor_Sticker-removebg-preview.png" alt="Galaxy Whale Sticker" loading="lazy" style={{ width: '180px', pointerEvents: 'none' }} />
          </motion.div>
        </div>
      </div>

      {/* Moonlit toned SVG elements floating at the bottom */}
      <motion.div 
        className="ambient-flora"
        style={{ bottom: "10%", left: "15%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <Sunflower width="60" height="60" color="#d4a574" />
      </motion.div>

      <motion.div 
        className="ambient-flora"
        style={{ bottom: "15%", right: "20%" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Seashell width="55" height="55" color="#f0e8ff" />
      </motion.div>

      {/* Extra floating sticker for the closing section */}
      <motion.img 
        src="/download__7_-removebg-preview.png" 
        alt="sticker" 
        loading="lazy"
        style={{ position: 'absolute', top: '15%', right: '15%', width: '120px', zIndex: 5, opacity: 0.9, pointerEvents: 'none' }}
        animate={{ y: [0, -15, 0], rotate: [-10, 0, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default React.memo(Closing);

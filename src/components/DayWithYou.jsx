import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DayWithYou.css';

const IconWave = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12C4 8 8 8 10 12C12 16 16 16 18 12C20 8 24 8 26 12" transform="translate(-2, 0)" />
    <path d="M2 18C4 14 8 14 10 18C12 22 16 22 18 18C20 14 24 14 26 18" transform="translate(-2, 0)" />
  </svg>
);

const IconCoffee = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8H3z" />
    <path d="M6 2v2" />
    <path d="M10 2v2" />
    <path d="M14 2v2" />
  </svg>
);

const IconDroplet = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
);

const IconSun = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const IconHorizon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 14h20" />
    <path d="M6 14a6 6 0 0 1 12 0" />
  </svg>
);

const timelineData = [
  {
    time: '🕖 Early Morning',
    title: 'The first walk',
    text: "Still half asleep, your hand in mine, the sand still cool under our feet. The world hadn't woken up yet just us.",
    Icon: IconWave,
    circleColor: '#d4a574'
  },
  {
    time: '🕘 Morning',
    title: 'Coffee by the sea',
    text: "You wrap both hands around your cup. The sound of the waves does most of the talking. I could stay here forever.",
    Icon: IconCoffee,
    circleColor: '#c9957a'
  },
  {
    time: '🕛 Afternoon',
    title: 'Into the water',
    text: "You laugh when the cold wave hits. That laugh ,I want to bottle it and keep it somewhere safe.",
    Icon: IconDroplet,
    circleColor: '#b8a8c8'
  },
  {
    time: '🕔 Golden Hour',
    title: 'Everything glows',
    text: "The light turns everything gold. Especially you. I take a mental picture. I always do.",
    Icon: IconSun,
    circleColor: '#9fa8c8'
  },
  {
    time: '🕗 Sunset',
    title: 'Just watching',
    text: "We don't say much. We don't have to. The sky does it for us painting everything in the colors I feel when I'm with you.",
    Icon: IconHorizon,
    circleColor: '#8090b8'
  }
];

const DayWithYou = () => {
  return (
    <section className="section-container daywithyou-section" aria-label="A perfect beach day with Yona">
      
      {/* Floating ambient stickers */}
      <motion.img 
        src="/download__6_-removebg-preview.png"
        alt="floating sticker"
        loading="lazy"
        className="daywide-sticker"
        style={{ top: '15%', right: '8%', width: '130px' }}
        animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img 
        src="/download__4_-removebg-preview.png"
        alt="floating sticker"
        loading="lazy"
        className="daywide-sticker"
        style={{ bottom: '15%', left: '8%', width: '110px' }}
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div 
        className="daywithyou-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="daywithyou-subtitle">a day with you</div>
        <h2 className="daywithyou-title-main">if every day could look like this</h2>
      </motion.div>

      <div className="timeline-container">
        <motion.div 
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
        />

        {timelineData.map((node, index) => {
          const { time, title, text, Icon, circleColor } = node;
          
          return (
            <motion.div 
              key={index}
              className="timeline-node"
              initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
            >
              <div 
                className="timeline-circle" 
                style={{ borderColor: circleColor }}
              />
              
              <div className="daywithyou-card">
                <div className="card-header">
                  <span className="card-time">{time}</span>
                  <motion.div 
                    className="card-icon"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon />
                  </motion.div>
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-body">{text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(DayWithYou);

import React from 'react';

// Custom beautifully minimalist SVGs to replace emojis

export const Lily = ({ className, width, height, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8 6 6 10 6 15C6 18.5 8.5 21.5 12 22C15.5 21.5 18 18.5 18 15C18 10 16 6 12 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 2C12 2 13.5 5 13.5 8C13.5 10.5 12 12 12 12C12 12 10.5 10.5 10.5 8C10.5 5 12 2 12 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 13C5 13 3 14.5 2 16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 13C19 13 21 14.5 22 16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Sunflower = ({ className, width, height, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" />
    <path d="M12 2V8M12 16V22M22 12H16M8 12H2M19 5L15 9M9 15L5 19M19 19L15 15M9 9L5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Seashell = ({ className, width, height, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke={color} strokeWidth="1.5" />
    <path d="M12 22C14.761 22 17 17.523 17 12C17 6.477 14.761 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22Z" stroke={color} strokeWidth="1.5" />
    <path d="M12 2C12 2 13 5.5 13 12C13 18.5 12 22 12 22" stroke={color} strokeWidth="1.5" />
    <path d="M2.5 10C2.5 10 7 11 12 11C17 11 21.5 10 21.5 10" stroke={color} strokeWidth="1.5" />
    <path d="M3 14C3 14 7 14.5 12 14.5C17 14.5 21 14 21 14" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const Whale = ({ className, width, height, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11C16 11 15 7 12 7C9 7 8 11 8 11C6 11 4 12 4 14C4 16.209 7.582 18 12 18C16.418 18 20 16.209 20 14C20 12 18 11 16 11Z" stroke={color} strokeWidth="1.5" />
    <circle cx="9" cy="14" r="1" fill={color} />
    <path d="M12 7V4M10 5L12 4M14 5L12 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 14C21.5 14 23 13 23 11C23 11 21.5 11.5 20 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const WaxSeal = ({ className, width, height, color = "#B35454" }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.5 2 7.7 3.5 6.4 5.2C5.1 6.8 4 9 4.3 11.5C4.6 14.3 6.1 16.5 7.5 18C9.2 19.8 11.5 21 13.5 20.8C15.8 20.5 17.5 18.8 18.5 17C19.7 14.8 20.2 12.5 19.5 9.8C18.6 6 15 2 12 2Z" fillOpacity="0.9" />
    <circle cx="12" cy="11.5" r="5" fill="none" stroke="#8A3E3E" strokeWidth="1.5" opacity="0.6" />
    <path d="M10 10.5C10 10.5 11 9.5 12 9.5C13 9.5 14 10.5 14 11.5C14 12.5 13 13.5 12 13.5C11 13.5 10 12.5 10 11.5Z" fill="#8A3E3E" opacity="0.8" />
  </svg>
);

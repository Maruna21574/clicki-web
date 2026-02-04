
import React from 'react';

export const LiIcon: React.FC<{ size?: number, color?: string, className?: string }> = ({ size = 24, color = "#F43182", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 500 500" 
    className={`${className}`} 
    style={{ display: 'inline-block' }}
  >
    <path 
      d="M130 100 V400 H350" 
      fill="none" 
      stroke={color} 
      strokeWidth="60" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle cx="370" cy="130" r="45" fill={color} />
    <path 
      d="M370 230 V400" 
      fill="none" 
      stroke={color} 
      strokeWidth="60" 
      strokeLinecap="round" 
    />
  </svg>
);

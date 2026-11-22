import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/website-logo.jpg';

export default function Logo({ className = '', variant = 'light' }) {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Hyderabad Crop Science Home"
    >
      <div className="flex items-center">
        {/* Preserved Official Logo */}
        <div className={`p-1 rounded-md transition-all duration-300 ${variant === 'dark' ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <img 
            src={logoImg} 
            alt="Hyderabad Crop Science Pvt. Ltd. Official Logo" 
            className="h-10 sm:h-12 w-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    </Link>
  );
}

import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center', // center, left
  theme = 'light', // light, dark
  className = '',
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[1.5px] bg-gold"></span>
          <span className="text-xs uppercase font-display tracking-[0.2em] font-semibold text-gold">
            {eyebrow}
          </span>
          <span className="w-6 h-[1.5px] bg-gold"></span>
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.18] mb-4 ${
          isDark ? 'text-white' : 'text-forest-dark'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed font-sans ${
          isDark ? 'text-sage-muted' : 'text-text-muted'
        } ${isCenter ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

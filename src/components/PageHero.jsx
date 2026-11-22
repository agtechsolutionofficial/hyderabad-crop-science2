import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  breadcrumbs = [{ name: 'Home', path: '/' }],
  currentPage,
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative bg-forest-dark text-white pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden min-h-[340px] flex flex-col justify-center">
      {/* Background Image with Cinematic Overlay */}
      {backgroundImage && !imageError && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={backgroundImage} 
            alt="" 
            role="presentation"
            aria-hidden="true"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1] saturate-[1.15]"
          />
          <div className="absolute inset-0 hero-overlay-cinematic"></div>
        </div>
      )}

      {/* Fallback & luxury overlay when image is not present or loading */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest/90 to-forest-dark/95 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C99432_1px,transparent_1px)] [background-size:28px_28px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-display text-white/70 mb-5">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.path}>
              <Link to={crumb.path} className="hover:text-gold transition-colors">
                {crumb.name}
              </Link>
              <ChevronRight className="w-3 h-3 text-gold/70" />
            </React.Fragment>
          ))}
          <span className="text-gold font-medium">{currentPage || title}</span>
        </nav>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-gold"></span>
            <span className="text-xs uppercase font-display tracking-[0.25em] font-bold text-gold">
              {eyebrow}
            </span>
            <span className="w-6 h-[1.5px] bg-gold"></span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12] mb-4 max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-sage-muted font-sans max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Soft bottom edge transition */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-bg-ivory to-transparent z-10"></div>
    </div>
  );
}

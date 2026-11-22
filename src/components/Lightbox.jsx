import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

export default function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Card */}
      <div 
        className="relative max-w-5xl max-h-[92vh] flex flex-col bg-charcoal-dark border border-white/10 rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[72vh] flex items-center justify-center bg-black/50 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title}
            className="max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption Bar */}
        <div className="p-4 sm:p-6 bg-charcoal-dark border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-display uppercase tracking-wider text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded-sm">
                <Tag className="w-3 h-3" />
                {item.categoryName}
              </span>
              {item.date && (
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-sage-muted mt-0.5 font-sans">
              {item.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

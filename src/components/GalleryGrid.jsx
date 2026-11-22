import React, { useState } from 'react';
import { Eye, Tag, Calendar } from 'lucide-react';
import Lightbox from './Lightbox';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedItem ? filteredItems.findIndex(i => i.id === selectedItem.id) : -1;
  const handlePrev = () => {
    if (currentIndex > 0) setSelectedItem(filteredItems[currentIndex - 1]);
  };
  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) setSelectedItem(filteredItems[currentIndex + 1]);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-sm font-display text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-forest text-white shadow-soft'
                : 'bg-white text-text-primary hover:bg-bg-soft border border-border'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-sm overflow-hidden bg-charcoal border border-border shadow-soft cursor-pointer aspect-[4/3]"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-106"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/95 via-charcoal-dark/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity"></div>

            {/* Hover View Action */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Eye className="w-4 h-4 text-gold-soft" />
            </div>

            {/* Details at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-display uppercase tracking-widest text-gold font-bold bg-white/10 px-2 py-0.5 rounded-sm">
                  {item.categoryName}
                </span>
                {item.date && (
                  <span className="text-[11px] text-white/60 font-mono">
                    {item.date}
                  </span>
                )}
              </div>

              <h3 className="text-base font-serif font-bold text-white group-hover:text-gold-soft transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-sage-muted font-sans line-clamp-1 mt-0.5">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white rounded-sm border border-border">
          <p className="text-text-muted text-sm font-sans">No gallery images found in this category.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <Lightbox 
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < filteredItems.length - 1}
        />
      )}
    </div>
  );
}

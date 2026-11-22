import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import { galleryItems } from '../data/gallery';
import { Eye, ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState(null);
  const previewItems = galleryItems.slice(0, 6);

  const currentIndex = selectedItem ? previewItems.findIndex(i => i.id === selectedItem.id) : -1;
  const handlePrev = () => {
    if (currentIndex > 0) setSelectedItem(previewItems[currentIndex - 1]);
  };
  const handleNext = () => {
    if (currentIndex < previewItems.length - 1) setSelectedItem(previewItems[currentIndex + 1]);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading 
            eyebrow="GALLERY SPOTLIGHT"
            title="Glimpse into Our Science & Fields."
            subtitle="Explore photography from our certified formulation facilities, analytical laboratories, and successful crop trials across farming communities."
            align="left"
            className="max-w-2xl"
          />

          <div className="flex-shrink-0">
            <Button to="/gallery" variant="primary" size="md">
              View Complete Gallery
            </Button>
          </div>
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-sm overflow-hidden aspect-[4/3] bg-charcoal border border-border shadow-soft cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-gold-soft" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[10px] font-display uppercase tracking-widest text-gold font-bold bg-white/10 px-2 py-0.5 rounded-sm inline-block mb-1.5">
                  {item.categoryName}
                </span>
                <h3 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-gold-soft transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Lightbox 
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < previewItems.length - 1}
        />
      )}
    </section>
  );
}

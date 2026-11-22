import React, { useEffect } from 'react';
import { X, ShieldCheck, Check, Layers, Sprout, Bug, FlaskConical, Calendar, PackageCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-sm shadow-soft-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-border text-text-primary my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-500 hover:text-forest bg-white/90 hover:bg-bg-soft rounded-full transition-colors border border-border"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: Product Image & Highlights (5 cols) */}
          <div className="md:col-span-5 bg-bg-soft p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
            <div>
              <div className="relative aspect-square rounded-sm overflow-hidden border border-border/80 shadow-soft mb-6 bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-forest text-white text-xs font-display px-2.5 py-1 rounded-sm">
                  {product.categoryName}
                </div>
              </div>

              {/* Verified Quality Tag */}
              <div className="p-3 bg-white rounded-sm border border-border/80 flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-display font-bold text-forest-dark">{product.certifiedQuality}</div>
                  <div className="text-text-muted">ISO 9001:2015 Approved Formulation</div>
                </div>
              </div>

              {/* Packaging sizes */}
              <div className="bg-white p-3 rounded-sm border border-border/80">
                <div className="text-[11px] font-display uppercase tracking-wider font-semibold text-text-muted mb-2 flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-forest" />
                  <span>Available Packaging</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.packSizes.map((size) => (
                    <span 
                      key={size}
                      className="px-2.5 py-1 text-xs font-mono bg-bg-ivory text-forest-dark border border-border rounded-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <Link
                to="/contact"
                className="w-full py-2.5 px-4 bg-forest hover:bg-forest-light text-white text-xs uppercase tracking-wider font-display font-semibold rounded-sm text-center flex items-center justify-center gap-2 transition-colors shadow-soft"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold" />
                <span>Commercial Inquiry for this Product</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Details & Application (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-mono text-gold font-bold tracking-widest uppercase mb-1">
                {product.brandName}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark mb-2">
                {product.name}
              </h2>
              <div className="inline-block bg-bg-soft text-forest text-xs font-mono px-3 py-1 rounded-sm border border-border">
                {product.chemicalComposition}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs font-display uppercase tracking-wider font-bold text-text-muted mb-2">
                Technical Overview
              </h3>
              <p className="text-sm font-sans text-text-primary leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Dosage & Application */}
            <div className="p-4 bg-bg-ivory rounded-sm border-l-4 border-gold">
              <h4 className="text-xs font-display uppercase tracking-wider font-bold text-forest mb-1">
                Approved Application Dosage
              </h4>
              <p className="text-xs sm:text-sm font-mono text-charcoal font-medium">
                {product.dosage}
              </p>
            </div>

            {/* Target Crops */}
            <div>
              <h3 className="text-xs font-display uppercase tracking-wider font-bold text-text-muted mb-2.5 flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-forest" />
                <span>Target Crops</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.targetCrops.map((crop) => (
                  <span 
                    key={crop}
                    className="text-xs font-display px-3 py-1 bg-bg-soft text-forest font-medium rounded-sm border border-border"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Pests or Diseases */}
            {product.targetPests && product.targetPests.length > 0 && (
              <div>
                <h3 className="text-xs font-display uppercase tracking-wider font-bold text-text-muted mb-2.5 flex items-center gap-1.5">
                  <Bug className="w-3.5 h-3.5 text-forest" />
                  <span>Target Pests & Controlled Diseases</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.targetPests.map((pest) => (
                    <span 
                      key={pest}
                      className="text-xs font-display px-3 py-1 bg-white text-text-primary rounded-sm border border-border shadow-soft-sm"
                    >
                      {pest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && (
              <div>
                <h3 className="text-xs font-display uppercase tracking-wider font-bold text-text-muted mb-2.5">
                  Key Agronomic Advantages
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-text-primary">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

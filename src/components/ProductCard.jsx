import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(product)}
      className="group bg-white rounded-sm border border-border overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-bg-soft overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-forest font-display text-[11px] font-bold px-2.5 py-1 rounded-sm shadow-sm tracking-wide border border-border/40">
            {product.badge}
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 bg-forest-dark/80 backdrop-blur-sm text-gold-soft font-display text-[11px] font-medium px-2.5 py-0.5 rounded-sm">
          {product.categoryName}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Technical Name */}
          <div className="text-[11px] font-mono uppercase tracking-wider text-gold font-semibold mb-1">
            {product.brandName}
          </div>

          <h3 className="text-lg font-serif font-bold text-forest-dark group-hover:text-forest transition-colors line-clamp-1 mb-1.5">
            {product.name}
          </h3>

          <p className="text-xs font-mono text-text-muted mb-3 line-clamp-1 bg-bg-soft/70 px-2 py-1 rounded-sm border border-border/40">
            {product.formulation}
          </p>

          <p className="text-xs text-text-muted line-clamp-2 font-sans leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Card Footer: Target Crops & Action */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-between">
          <div className="text-[11px] text-text-primary/70 font-display truncate max-w-[70%]">
            <span className="font-semibold text-forest">Crops:</span> {product.targetCrops.slice(0, 2).join(', ')}
            {product.targetCrops.length > 2 ? ' +' : ''}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold text-forest group-hover:text-gold transition-colors">
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

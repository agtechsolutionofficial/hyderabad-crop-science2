import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function ProductSection() {
  const categories = [
    {
      id: 'insecticides',
      title: 'Insecticides',
      tagline: 'Targeted Protection Against Chewing & Sucking Pests',
      description: 'Advanced formulations including Fipronil 5% SC, Thiamethoxam 25% WG, and Emamectin Benzoate 5% SG engineered for immediate knockdown and long residual deterrence.',
      image: '/images/insecticides.jpg',
      count: '8 Approved Formulations',
    },
    {
      id: 'fungicides',
      title: 'Fungicides',
      tagline: 'Curative & Preventive Crop Disease Eradication',
      description: 'Systemic and contact fungicides such as Carbendazim, Mancozeb blends, and Propiconazole that stop fungal spores and blast diseases in paddy, wheat, and horticultural stands.',
      image: '/images/fungicides.jpg',
      count: '6 Approved Formulations',
    },
    {
      id: 'herbicides',
      title: 'Herbicides & Weedicides',
      tagline: 'Selective Weed Control & Seedbed Defense',
      description: 'Selective pre- and post-emergence weed solutions including Metribuzin 70% WP, Pretilachlor 50% EC, and Paraquat Dichloride that eliminate weed moisture theft.',
      image: '/images/herbicides.jpg',
      count: '6 Approved Formulations',
    },
    {
      id: 'pgr',
      title: 'Plant Growth Regulators',
      tagline: 'Flowering Stimulants & Fruit Setting Promoters',
      description: 'Specialized bio-regulators including Nitrobenzene 20%, Gibberellic Acid, and seaweed marine extracts that curb premature blossom drop and stimulate higher yields.',
      image: '/images/pgr.jpg',
      count: '4 Approved Formulations',
    },
    {
      id: 'fertilizers',
      title: 'Fertilizers & Nutrients',
      tagline: 'Vital Micronutrients & Bio-Fertilizer Consortia',
      description: 'Soil-enriching inputs including Zinc Sulphate Monohydrate 33%, multi-micronutrient chelates, and nitrogen-fixing bacterial consortia for optimal crop nutrition.',
      image: '/images/fertilizers.jpg',
      count: '4 Approved Formulations',
    },
    {
      id: 'organic',
      title: 'Organic Products',
      tagline: 'Eco-Balanced Bio-Pesticides & Humic Acids',
      description: 'Certified organic and botanical inputs including concentrated potassium humates, neem-based azadirachtin 10,000 ppm, and antagonistic Trichoderma cultures.',
      image: '/images/organic.jpg',
      count: '3 Approved Formulations',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading 
            eyebrow="PRODUCT PORTFOLIO"
            title="Solutions for Every Stage of Growth."
            subtitle="Explore our comprehensive array of certified insecticides, fungicides, herbicides, PGRs, and soil nutrition formulated to protect yields and elevate farm profitability."
            align="left"
            className="max-w-2xl"
          />

          <div className="flex-shrink-0">
            <Button to="/products" variant="primary" size="md">
              View All Products
            </Button>
          </div>
        </div>

        {/* Categories Grid (2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group bg-bg-ivory rounded-sm border border-border overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Image Container with zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-dark">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter saturate-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent"></div>
                
                {/* Count Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-forest font-display text-[11px] font-bold px-2.5 py-1 rounded-sm shadow-sm">
                  {cat.count}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-soft transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-display font-semibold text-secondary-green uppercase tracking-wider mb-2">
                    {cat.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted font-sans leading-relaxed line-clamp-3 mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Explore link */}
                <div className="pt-3 border-t border-border/70 flex items-center justify-between text-xs font-display font-bold text-forest group-hover:text-gold transition-colors">
                  <span>Explore {cat.title}</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-gold group-hover:text-white flex items-center justify-center transition-colors shadow-soft-sm">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

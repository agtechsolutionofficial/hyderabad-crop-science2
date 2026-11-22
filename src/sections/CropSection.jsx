import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CropSection() {
  const crops = [
    {
      name: 'Rice (Paddy)',
      role: 'Stem Borer & Blast Defense',
      description: 'Comprehensive solutions from nursery seed treatment to panicle blast protection using Cartap, Fipronil, and Tricyclazole.',
      image: '/images/hero-bg.jpg',
      span: 'lg:col-span-8 lg:row-span-2',
      aspect: 'aspect-[16/10] lg:aspect-auto lg:h-full',
      keySolutions: 'Cartap 4% G • Fipronil 5% SC • Tricyclazole 75% WP',
    },
    {
      name: 'Cotton & Cash Crops',
      role: 'Bollworm & Sucking Pest Shield',
      description: 'Defeating resistant pink bollworm and whitefly outbreaks with Emamectin, Profenofos, and Cypermethrin combos.',
      image: '/images/herbicides.jpg',
      span: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
      keySolutions: 'Emamectin 5% SG • Thiamethoxam 25% WG',
    },
    {
      name: 'Corn & Maize',
      role: 'Selective Weed Eradication',
      description: 'Allowing corn seedlings to flourish free from grassy weed moisture theft through Atrazine & pre-emergence barriers.',
      image: '/images/corn-field.jpg',
      span: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
      keySolutions: 'Atrazine 50% WP • Metribuzin 70% WP',
    },
    {
      name: 'Vegetables & Chilli',
      role: 'Fruit Borer, Thrips & Blight Cure',
      description: 'Ensuring blemish-free market harvest with zero-stunting biologicals and fast translaminar fungicides.',
      image: '/images/insecticides.jpg',
      span: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
      keySolutions: 'Azoxystrobin + Tebuconazole • Neem Bio',
    },
    {
      name: 'Horticulture & Fruits',
      role: 'Powdery Mildew & Fruit Set Boost',
      description: 'Cell-elongation regulators, Gibberellic acid, and Hexaconazole promoting commercial fruit sizing and shine.',
      image: '/images/pgr.jpg',
      span: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
      keySolutions: 'GA3 0.001% • Nitrobenzene 20% • Hexa 5% SC',
    },
    {
      name: 'Pulses & Oilseeds',
      role: 'Pod Borer & Root Wilt Antidote',
      description: 'Bio-fungal Trichoderma root inoculants paired with chelated micronutrients for high protein pod yields.',
      image: '/images/about-hero.jpg',
      span: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
      keySolutions: 'Trichoderma Viride • Chelated Micronutrients',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading 
          eyebrow="CROP-SPECIFIC EXPERTISE"
          title="Tailored Defense for Key Agricultural Crops."
          subtitle="Every crop ecosystem has distinct pest thresholds, fungal vulnerabilities, and nutritional windows. We engineer specialized formulas for India's major staples and cash crops."
          className="mb-14"
        />

        {/* Editorial Masonry/Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {crops.map((crop, idx) => (
            <div
              key={idx}
              className={`group relative rounded-sm overflow-hidden border border-border shadow-soft bg-forest-dark ${crop.span} ${crop.aspect}`}
            >
              {/* Background Crop Image */}
              <img 
                src={crop.image} 
                alt={crop.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.7] contrast-[1.05]"
                loading="lazy"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/95 via-charcoal-dark/40 to-transparent"></div>

              {/* Content Positioned at Bottom */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="text-[11px] font-display uppercase tracking-widest text-gold font-bold mb-1">
                  {crop.role}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white mb-2">
                  {crop.name}
                </h3>

                <p className="text-xs sm:text-sm text-sage-muted font-sans leading-relaxed mb-4 max-w-xl line-clamp-2">
                  {crop.description}
                </p>

                <div className="pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="font-mono text-gold-soft text-[11px] bg-white/10 px-2.5 py-1 rounded-sm">
                    {crop.keySolutions}
                  </span>

                  <Link 
                    to="/products"
                    className="inline-flex items-center gap-1 text-white hover:text-gold font-display font-semibold transition-colors"
                  >
                    <span>View Formulations</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

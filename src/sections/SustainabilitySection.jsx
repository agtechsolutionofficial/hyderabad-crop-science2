import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Leaf, Droplets, Sun, Recycle } from 'lucide-react';

export default function SustainabilitySection() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Biodegradable Chemistry',
      description: 'Formulating inputs that break down into benign organic components without long-term soil or groundwater persistence.'
    },
    {
      icon: Droplets,
      title: 'Low-Volume Efficiency',
      description: 'Concentrated SC and WG technologies that drastically cut water volumes required per acre during field spraying.'
    },
    {
      icon: Sun,
      title: 'Beneficial Insect Safety',
      description: 'Selective mode of action targeting destructive pests while protecting honeybees, predatory wasps, and ladybirds.'
    },
    {
      icon: Recycle,
      title: 'Soil Humus Regeneration',
      description: 'Bio-organic manures and beneficial microflora that replenish organic carbon and revive depleted soil structures.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading 
              eyebrow="SUSTAINABLE AGRICULTURE"
              title="Growing Today. Protecting Tomorrow."
              subtitle="Modern agriculture demands high productivity without compromising ecological balance. We are committed to developing agrochemical solutions that preserve soil biodiversity for future generations."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {initiatives.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 bg-white rounded-sm border border-border shadow-soft-sm">
                    <div className="w-9 h-9 rounded-sm bg-bg-soft text-forest flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <h4 className="text-sm font-display font-bold text-forest-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Composition (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden shadow-soft-lg border-4 border-white aspect-[4/3] bg-forest">
              <img 
                src="/images/products-hero.jpg" 
                alt="Vibrant healthy farm landscape under clear blue sky"
                className="w-full h-full object-cover object-center filter saturate-[1.1]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-sm border border-border/80 shadow-md">
                <div className="text-xs font-serif italic text-forest-dark font-semibold">
                  "Sustainable farming is not just an environmental goal; it is the cornerstone of food security and rural prosperity."
                </div>
                <div className="text-[11px] font-display uppercase tracking-widest text-gold font-bold mt-2">
                  Hyderabad Crop Science Charter
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

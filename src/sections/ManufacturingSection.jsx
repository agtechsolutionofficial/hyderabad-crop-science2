import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Factory, Cog, CheckSquare, Layers, ShieldCheck } from 'lucide-react';

export default function ManufacturingSection() {
  const capabilities = [
    {
      title: 'High-Shear Liquid Formulation',
      detail: 'Precision emulsification and suspension reactors producing micro-fine SC and EC formulations with long stability.'
    },
    {
      title: 'Dust-Free Granulation Units',
      detail: 'Specialized granulation equipment producing uniform, non-dusty G and WG formulations that dissolve swiftly.'
    },
    {
      title: 'Automated Tamper-Proof Bottling',
      detail: 'High-speed automated packaging lines equipped with induction cap sealing to guarantee anti-counterfeit protection.'
    },
    {
      title: 'Warehouse & Temperature Storage',
      detail: 'Dedicated chemical and bio-product storage maintained within strict temperature windows to preserve active viability.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Industrial Imagery (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-soft-lg border border-border aspect-[4/3] bg-charcoal">
              <img 
                src="/images/gallery-hero.jpg" 
                alt="Automated agrochemical formulation and manufacturing facilities"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-sm border border-border shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-display font-bold text-forest">Formulation & Packaging Infrastructure</div>
                  <div className="text-[11px] text-text-muted">Compliant with National Agrochemical Manufacturing Standards</div>
                </div>
                <Factory className="w-5 h-5 text-gold flex-shrink-0" />
              </div>
            </div>

            {/* Subtle secondary preview */}
            <div className="hidden sm:grid grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-border shadow-soft-sm">
                <img 
                  src="/images/mfg-1.jpg" 
                  alt="Automated bottling line"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-border shadow-soft-sm">
                <img 
                  src="/images/mfg-2.jpg" 
                  alt="Quality inspection station"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Text & Verified Capabilities (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading 
              eyebrow="MANUFACTURING EXCELLENCE"
              title="Formulation Capabilities Backed by Strict Quality."
              subtitle="Our manufacturing processes adhere to stringent standard operating protocols, ensuring uniform potency, rapid water solubility, and safe container packaging across every batch."
              align="left"
            />

            <div className="space-y-4 pt-2">
              {capabilities.map((item, idx) => (
                <div key={idx} className="p-4 bg-bg-ivory rounded-sm border border-border/80 flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-sm bg-forest text-gold flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-forest-dark">{item.title}</h4>
                    <p className="text-xs text-text-muted font-sans leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button to="/contact" variant="primary" size="md">
                Inquire for Bulk & Dealership
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

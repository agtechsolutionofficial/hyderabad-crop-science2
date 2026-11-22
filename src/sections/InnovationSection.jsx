import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Microscope, FlaskRound as Flask, Dna, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InnovationSection() {
  const pillars = [
    {
      icon: Flask,
      title: 'Advanced Formulation Chemistry',
      description: 'Developing high-suspensibility SC, dustless WG granules, and micro-emulsions that resist wash-off under monsoonal rain and minimize active ingredient degradation.',
    },
    {
      icon: Microscope,
      title: 'Active Ingredient Profiling',
      description: 'High-Performance Liquid Chromatography (HPLC) and Gas Chromatography ensuring every formulated batch meets exact active ingredient specifications.',
    },
    {
      icon: Dna,
      title: 'Bio-Stimulant & Microbial Synthesis',
      description: 'Cold-temperature marine algae extraction and pure fungal culture propagation (Trichoderma viride) for non-toxic biological crop protection.',
    },
    {
      icon: ShieldCheck,
      title: 'Translaminar Field Testing',
      description: 'Rigorous multi-locational agronomic trials measuring leaf penetration velocity, systemic translocation, and pest kill rates across diverse Indian agro-climates.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-forest-dark text-white relative overflow-hidden">
      {/* Background Luxury Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/lab-2.jpg" 
          alt="Modern agricultural science and research laboratory"
          className="w-full h-full object-cover object-center filter brightness-[0.25] saturate-[1.2]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/95 to-forest-dark/80"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99432_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading 
              eyebrow="RESEARCH & SCIENTIFIC RIGOR"
              title="Science Behind Better Agriculture."
              subtitle="Behind every bottle and granule is rigorous analytical chemistry, bio-efficacy testing, and strict quality control designed to give farmers reliable crop defense season after season."
              align="left"
              theme="dark"
              className="max-w-3xl"
            />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button to="/about" variant="gold" size="md">
              Learn About Our R&D
            </Button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/50 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-sm bg-forest-light/60 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-forest-dark transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-serif font-bold text-white mb-2.5 group-hover:text-gold-soft transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-sage-muted font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Quote Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-forest-light/40 backdrop-blur-sm border border-gold/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-serif font-bold text-white">
                Zero-Compromise Raw Material Assay Testing
              </div>
              <p className="text-xs text-sage-muted">
                Each incoming batch of active ingredient is cross-checked against national purity baselines before formulation starts.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <span className="text-xs font-mono text-gold-soft border border-gold/40 px-3 py-1.5 rounded-sm uppercase tracking-wider">
              ISO 9001:2015 Protocol
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from 'lucide-react';

export default function QualitySection() {
  const steps = [
    {
      num: '01',
      title: 'Incoming Technical Assay',
      desc: 'Active ingredient purity, moisture content, and chemical isomers are analyzed before blending.'
    },
    {
      num: '02',
      title: 'In-Process Viscosity & pH Control',
      desc: 'Formulation suspension kinetics, emulsion spontaneity, and surface tension are continuously monitored.'
    },
    {
      num: '03',
      title: 'Accelerated Shelf Life Testing',
      desc: 'Samples undergo heat and cold storage stability simulations to guarantee field durability.'
    },
    {
      num: '04',
      title: 'Batch Traceability & Retention',
      desc: 'Every packaged batch is assigned a unique batch code with control samples retained in our repository.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-bg-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-6 h-[1.5px] bg-gold"></span>
            <span className="text-xs uppercase font-display tracking-[0.2em] font-semibold text-gold">
              QUALITY ASSURANCE
            </span>
            <span className="w-6 h-[1.5px] bg-gold"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-4">
            Certified to Deliver Uncompromised Performance.
          </h2>

          <p className="text-base text-text-muted font-sans leading-relaxed">
            Hyderabad Crop Science Private Limited operates under an ISO 9001:2015 Quality Management Framework. Every formulation delivered to our dealers and farmers meets verified purity standards.
          </p>
        </div>

        {/* Quality Pillars in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-sm border border-border shadow-soft flex flex-col justify-between">
              <div>
                <div className="text-2xl font-serif font-bold text-gold mb-3">
                  {step.num}
                </div>
                <h3 className="text-base font-display font-bold text-forest-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Badge Banner */}
        <div className="bg-forest text-white p-8 rounded-sm shadow-soft-lg border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-sm bg-white/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/40">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold font-display font-bold">
                International Quality Benchmark
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                ISO 9001:2015 Certified Company
              </h3>
              <p className="text-xs text-sage-muted mt-0.5">
                Quality Management System certified for the manufacture and supply of pesticides, fungicides, herbicides, PGR, and fertilizers.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="px-4 py-2 bg-white/10 rounded-sm text-xs font-mono text-gold-soft border border-white/20">
              Certificate Validated
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

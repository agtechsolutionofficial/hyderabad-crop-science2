import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import Button from '../components/Button';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Editorial Image Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden shadow-soft-lg border-4 border-white aspect-[4/5] bg-forest-dark">
                <img 
                  src="/images/about-hero.jpg" 
                  alt="Agronomist examining crop health in field"
                  className="w-full h-full object-cover object-center filter saturate-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 via-transparent to-transparent"></div>
              </div>

              {/* Overlapping Floating Secondary Visual */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-3/5 rounded-sm overflow-hidden shadow-2xl border-4 border-white aspect-square hidden sm:block bg-bg-soft">
                <img 
                  src="/images/lab-1.jpg" 
                  alt="Modern agriscience research laboratory testing"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-forest text-white p-4 sm:p-5 rounded-sm shadow-soft-lg border border-gold/30">
                <div className="flex items-center gap-2 text-gold text-xs font-display uppercase tracking-widest font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified Standard</span>
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                  ISO 9001:2015
                </div>
                <div className="text-[11px] text-sage-muted mt-0.5">
                  Quality Management System
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-gold"></span>
              <span className="text-xs uppercase font-display tracking-[0.25em] font-bold text-gold">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark leading-[1.14]">
              Rooted in Agriculture. <br />
              <span className="text-secondary-green font-normal italic">Driven by Science.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-primary/90 font-sans leading-relaxed">
              Hyderabad Crop Science Private Limited is an ISO 9001:2015 Certified company dedicated to the Indian farming community since 2014. We engineer, manufacture, and distribute high-grade crop protection chemistry and soil biological inputs.
            </p>

            <p className="text-sm sm:text-base text-text-muted font-sans leading-relaxed">
              Our purpose is clear: to empower growers with proven technologies and agronomic solutions that boost crop yield, curb pest losses, and safeguard soil vitality without upsetting natural agro-ecological balances.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark">Skilled Agrochemical Team</h4>
                  <p className="text-xs text-text-muted">Experienced agronomists & chemical scientists.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark">Ethical Business Practices</h4>
                  <p className="text-xs text-text-muted">Transparent relationships with farmers & dealers.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark">On-Time Distribution</h4>
                  <p className="text-xs text-text-muted">Swift supply chains meeting pest breakout windows.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark">Sustainable Crop Inputs</h4>
                  <p className="text-xs text-text-muted">Eco-balanced solutions preserving soil microbiota.</p>
                </div>
              </div>
            </div>

            {/* Read More Action */}
            <div className="pt-4">
              <Button to="/about" variant="primary" size="md">
                Read Full Company Profile
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

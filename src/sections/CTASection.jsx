import React from 'react';
import Button from '../components/Button';
import { PhoneCall, Mail, ShieldCheck } from 'lucide-react';
import { navigation } from '../data/navigation';

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-forest-dark text-white overflow-hidden">
      {/* Background Photography with Warm Golden Hour Glow */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Lush healthy farm harvest during sunset"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1] saturate-[1.2]"
          loading="lazy"
        />
        <div className="absolute inset-0 hero-overlay-cinematic"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-[1.5px] bg-gold"></span>
          <span className="text-xs uppercase font-display tracking-[0.25em] font-bold text-gold">
            PARTNER WITH US
          </span>
          <span className="w-6 h-[1.5px] bg-gold"></span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] mb-6">
          Let's Grow a Better Tomorrow Together.
        </h2>

        <p className="text-base sm:text-lg text-sage-muted font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are a progressive farmer seeking targeted crop defense, a regional distributor, or an agribusiness partner, Hyderabad Crop Science offers certified solutions tailored to your growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button to="/contact" variant="gold" size="lg">
            Contact Our Team
          </Button>

          <Button 
            to="/products" 
            variant="outline" 
            size="lg"
            className="text-white border-white/40 hover:bg-white/10 hover:text-white hover:border-white"
          >
            Explore Product Portfolio
          </Button>
        </div>

        {/* Quick Contact Micro-Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80">
          <a 
            href={`tel:${navigation.companyInfo.phone}`}
            className="inline-flex items-center gap-2 hover:text-gold transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-gold" />
            <span>Helpline: {navigation.companyInfo.phone}</span>
          </a>

          <span className="hidden sm:inline-block text-white/40">|</span>

          <a 
            href={`mailto:${navigation.companyInfo.email}`}
            className="inline-flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>{navigation.companyInfo.email}</span>
          </a>

          <span className="hidden sm:inline-block text-white/40">|</span>

          <span className="inline-flex items-center gap-2 text-gold-soft">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>ISO 9001:2015 Assured</span>
          </span>
        </div>

      </div>
    </section>
  );
}

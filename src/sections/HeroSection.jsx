import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-forest-dark text-white">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Golden hour agricultural field with rich crops"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow filter brightness-[0.42] contrast-[1.1] saturate-[1.15]"
          priority="true"
        />
        {/* Multilayered cinematic overlays for text clarity & luxury tone */}
        <div className="absolute inset-0 hero-overlay-cinematic"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/70 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C99432_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Accreditation */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 backdrop-blur-md border border-white/15 text-gold-soft text-xs font-display tracking-widest uppercase mb-6 animate-in fade-in duration-500">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="font-semibold">ISO 9001:2015 Certified Agrochemical Enterprise</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6">
            Science That Protects. <br />
            <span className="text-gold-soft italic font-normal">Innovation That Grows.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-sage-muted font-sans font-light leading-relaxed mb-10 max-w-2xl">
            Delivering innovative crop protection and agricultural solutions for healthier crops and a more productive farming future across India since 2014.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <Button 
              to="/products" 
              variant="gold" 
              size="lg"
            >
              Explore Our Products
            </Button>
            <Button 
              to="/about" 
              variant="outline" 
              size="lg"
              className="text-white border-white/40 hover:bg-white/10 hover:text-white hover:border-white"
            >
              Discover Our Story
            </Button>
          </div>

          {/* Key Trust Signals in Hero */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/90">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold">10+ Years</div>
              <div className="text-xs text-sage-muted font-display tracking-wider uppercase mt-1">
                Empowering Indian Farmers
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold">50+ Formulations</div>
              <div className="text-xs text-sage-muted font-display tracking-wider uppercase mt-1">
                Approved Crop Inputs
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold">7+ States</div>
              <div className="text-xs text-sage-muted font-display tracking-wider uppercase mt-1">
                National Agronomic Reach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/50 text-[11px] font-display uppercase tracking-widest pointer-events-none">
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
      </div>
    </section>
  );
}

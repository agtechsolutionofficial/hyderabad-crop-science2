import React from 'react';
import { Calendar, ShieldCheck, MapPin, Sparkles, Building2 } from 'lucide-react';

export default function StatisticsSection() {
  const stats = [
    {
      value: '2014',
      label: 'Established Year',
      description: 'Dedicated to Indian agriculture for over a decade',
      icon: Calendar,
    },
    {
      value: 'ISO 9001',
      label: 'Certified Management',
      description: 'Rigorous 2015 international quality compliance',
      icon: ShieldCheck,
    },
    {
      value: '6+',
      label: 'Product Categories',
      description: 'Insecticides, Fungicides, Herbicides, PGR & Nutrients',
      icon: Sparkles,
    },
    {
      value: '7+',
      label: 'Active Agricultural States',
      description: 'Punjab, Haryana, Rajasthan, UP, Uttarakhand & Maharashtra',
      icon: MapPin,
    },
  ];

  return (
    <section className="bg-forest-dark text-white py-14 sm:py-16 border-y border-forest relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99432_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx} 
                className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center text-gold">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs uppercase font-display tracking-widest text-gold-soft font-semibold">
                      {stat.label}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-2">
                    {stat.value}
                  </div>

                  <p className="text-xs sm:text-sm text-sage-muted font-sans leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

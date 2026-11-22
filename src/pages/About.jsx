import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../sections/CTASection';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, 
  Users, MapPin, Sparkles, Building2, TrendingUp, HeartHandshake
} from 'lucide-react';
import { navigation } from '../data/navigation';

export default function About() {
  const info = navigation.companyInfo;

  const milestones = [
    {
      year: '2014',
      title: 'Company Incorporation',
      desc: 'Hyderabad Crop Science Private Limited was established with a mission to bring high-potency, reliable agrochemicals to Indian farmers.'
    },
    {
      year: '2016',
      title: 'Formulation Portfolio Expansion',
      desc: 'Launched core Insecticides and Fungicides lines including Fipronil 5% SC, Carbendazim, and synthetic pyrethroids.'
    },
    {
      year: '2018',
      title: 'ISO 9001:2015 Certification',
      desc: 'Formally awarded international Quality Management System certification for chemical formulation, manufacturing, and distribution safety.'
    },
    {
      year: '2021',
      title: 'Bio-Stimulants & Organic Inputs',
      desc: 'Introduced enriched organic manure, potassium humates, and microbial consortia to assist regenerative farming.'
    },
    {
      year: '2024+',
      title: 'Multi-State Dealer Network',
      desc: 'Serving thousands of growers across Punjab, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Maharashtra, and Gujarat.'
    }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality',
      desc: 'Every batch of crop protection chemistry is manufactured and tested under strict ISO 9001:2015 protocols to guarantee efficacy in the field.'
    },
    {
      icon: HeartHandshake,
      title: 'Farmer-Centric Integrity',
      desc: 'We consider our growers true partners. We practice ethical commercial terms, transparent pricing, and dependable agronomic counsel.'
    },
    {
      icon: Sparkles,
      title: 'Scientific Innovation',
      desc: 'Continuously refining suspension concentrates, dustless granules, and rain-fast formulations to reduce chemical wastage and environmental load.'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      desc: 'Balancing aggressive pest knock-down with soil conservation, ensuring farmland stays fertile and productive for generations.'
    }
  ];

  const strengths = [
    {
      stat: 'ISO 9001:2015',
      label: 'Accredited Quality Control',
      detail: 'Certified production, testing, and distribution protocols ensuring exact active ingredient assays.'
    },
    {
      stat: '7+ States',
      label: 'Regional Distribution Reach',
      detail: 'Strong distribution footprint across Punjab, Haryana, Rajasthan, UP, Uttarakhand, Maharashtra, and Gujarat.'
    },
    {
      stat: '50+ Batches',
      label: 'Rigorous Testing Routine',
      detail: 'Comprehensive HPLC, emulsion stability, and shelf viability testing on all formulated products.'
    },
    {
      stat: '10+ Years',
      label: 'Dedicated Track Record',
      detail: 'Continuous service to the Indian agricultural sector with on-time delivery during crucial planting cycles.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Hyderabad Crop Science Pvt. Ltd.</title>
        <meta 
          name="description" 
          content="Learn about Hyderabad Crop Science Pvt. Ltd., an ISO 9001:2015 certified agrochemical company serving Indian agriculture since 2014 with ethical business practices and modern crop protection." 
        />
      </Helmet>

      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ABOUT OUR ENTERPRISE"
        title="Pioneering Agrochemical Excellence for Indian Agriculture."
        subtitle="Dedicated to Indian farmers since 2014, Hyderabad Crop Science Private Limited delivers science-backed crop protection, bio-stimulants, and soil nutrition solutions."
        backgroundImage="/images/about-hero.jpg"
        currentPage="About Us"
      />

      {/* 2. Company Introduction (Split Editorial) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-gold"></span>
                <span className="text-xs uppercase font-display tracking-[0.25em] font-bold text-gold">
                  COMPANY OVERVIEW
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark leading-[1.15]">
                Rooted in Agronomic Care. <br />
                <span className="text-secondary-green font-normal italic">Powered by Chemistry.</span>
              </h2>

              <p className="text-base sm:text-lg text-text-primary leading-relaxed font-sans">
                Hyderabad Crop Science Private Limited is an ISO 9001:2015 Certified Company dedicated to Indian farmers since 2014. In order to serve the agricultural community, the company manufactures and distributes quality-based Pesticides, Fungicides, Herbicides, Weedicides, Insecticides, Plant Growth Regulators, Fertilizers, and Organic Manure.
              </p>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans">
                We are determined to provide growers with technologies and solutions to improve the productivity and sustainability of their farming operations without impacting environmental balance. Transparent business practices, on-time delivery, and affordable pricing have empowered us to reach a reputable position in the market.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-display font-semibold text-forest">
                <span className="px-3 py-1.5 bg-bg-soft rounded-sm border border-border">
                  CIN: {info.cin}
                </span>
                <span className="px-3 py-1.5 bg-bg-soft rounded-sm border border-border">
                  Registered in 2014
                </span>
                <span className="px-3 py-1.5 bg-bg-soft rounded-sm border border-border">
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden shadow-soft-lg border-4 border-white aspect-[4/3] bg-forest">
                <img 
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Farmer inspecting healthy crops in green field"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-20 lg:py-24 bg-bg-ivory border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="OUR COMPASS"
            title="Vision & Mission"
            subtitle="Guiding our research, manufacturing, and distribution standards every single day."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-sm border border-border shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-forest text-gold flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-dark mb-4">
                  Our Corporate Vision
                </h3>
                <p className="text-sm sm:text-base text-text-primary/90 font-sans leading-relaxed">
                  To be acknowledged as a premier Indian agricultural science company known for unyielding quality, scientific integrity, and sustainable solutions that significantly enhance farmer prosperity and national crop output.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 text-xs font-display text-forest font-semibold uppercase tracking-wider">
                Excellence • Reliability • Farmer Success
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-sm border border-border shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-gold text-white flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-dark mb-4">
                  Our Operating Mission
                </h3>
                <p className="text-sm sm:text-base text-text-primary/90 font-sans leading-relaxed">
                  To deliver cost-effective, high-potency agrochemical formulations, plant growth regulators, and biological nutrition that defeat persistent agricultural pests, cure plant diseases, and safeguard soil vitality through ethical, transparent business practices.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 text-xs font-display text-forest font-semibold uppercase tracking-wider">
                Innovation • Rapid Delivery • Safe Formulations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey & Milestones (Timeline) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="OUR HERITAGE"
            title="The Journey Since 2014."
            subtitle="From our incorporation to becoming an ISO 9001:2015 certified agrochemical supplier across multiple Indian states."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 bg-bg-ivory rounded-sm border border-border flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-serif font-bold text-gold mb-2">
                    {m.year}
                  </div>
                  <h4 className="text-base font-display font-bold text-forest-dark mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-text-muted font-sans leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-20 lg:py-24 bg-forest-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="ETHOS & PRINCIPLES"
            title="Core Values That Define Us."
            subtitle="The fundamental beliefs driving our operations, partnerships, and product guarantees."
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-gold/40 transition-colors">
                  <div className="w-10 h-10 rounded-sm bg-gold/20 flex items-center justify-center text-gold mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-sage-muted font-sans leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Company Strengths */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="WHY CHOOSE US"
            title="Built on Solid Strengths."
            subtitle="Key advantages that make Hyderabad Crop Science a preferred brand for farmers and dealers."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, idx) => (
              <div key={idx} className="p-6 bg-bg-soft rounded-sm border border-border">
                <div className="text-2xl font-serif font-bold text-forest mb-1">{s.stat}</div>
                <div className="text-sm font-display font-bold text-forest-dark mb-2">{s.label}</div>
                <p className="text-xs text-text-muted leading-relaxed font-sans">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CTASection />
    </>
  );
}

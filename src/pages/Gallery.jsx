import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';
import CTASection from '../sections/CTASection';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Corporate Gallery | Hyderabad Crop Science Pvt. Ltd.</title>
        <meta 
          name="description" 
          content="Explore photographic glimpses of Hyderabad Crop Science's formulation units, analytical quality laboratories, field demonstrations, and farmer events." 
        />
      </Helmet>

      {/* Page Hero */}
      <PageHero
        eyebrow="CORPORATE GALLERY"
        title="Visual Showcase of Our Agronomic Journey."
        subtitle="Explore high-resolution photography showcasing our certified manufacturing lines, research laboratories, agricultural demonstrations, and farmer knowledge sessions."
        backgroundImage="/images/gallery-hero.jpg"
        currentPage="Gallery"
      />

      {/* Gallery Section */}
      <section className="py-20 lg:py-24 bg-bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}

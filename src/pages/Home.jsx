import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import StatisticsSection from '../sections/StatisticsSection';
import ProductSection from '../sections/ProductSection';
import CropSection from '../sections/CropSection';
import InnovationSection from '../sections/InnovationSection';
import ManufacturingSection from '../sections/ManufacturingSection';
import QualitySection from '../sections/QualitySection';
import SustainabilitySection from '../sections/SustainabilitySection';
import GalleryPreview from '../sections/GalleryPreview';
import CTASection from '../sections/CTASection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hyderabad Crop Science Pvt. Ltd. | Leading Agriscience & Agrochemicals</title>
        <meta 
          name="description" 
          content="Hyderabad Crop Science Pvt. Ltd. is an ISO 9001:2015 certified agrochemical company serving Indian farmers since 2014 with quality insecticides, fungicides, herbicides, PGR, and fertilizers." 
        />
        <meta property="og:title" content="Hyderabad Crop Science Pvt. Ltd. | Science That Protects. Innovation That Grows." />
        <meta property="og:description" content="Discover our certified agrochemical portfolio engineered for higher crop yields and sustainable agriculture." />
      </Helmet>

      {/* 11 Homepage Sections */}
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <ProductSection />
      <CropSection />
      <InnovationSection />
      <ManufacturingSection />
      <QualitySection />
      <SustainabilitySection />
      <GalleryPreview />
      <CTASection />
    </>
  );
}

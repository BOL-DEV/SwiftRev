import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import StatsSection from '../components/home/StatsSection';
import MedicalPreview from '../components/home/MedicalPreview';
import HousingPreview from '../components/home/HousingPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <MedicalPreview />
      <HousingPreview />
      <CTASection />
    </div>
  );
}
// Página principal de la landing: compone todas las secciones
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { LandingContentRepository } from '../../infrastructure/LandingContentRepository';

const repo = new LandingContentRepository();
const content = repo.fetch();

const LandingPage: React.FC = () => (
  <main>
    <HeroSection title={content.title} subtitle={content.subtitle} />
    <FeaturesSection features={content.features} />
    <CTASection />
    <Footer />
  </main>
);

export default LandingPage; 
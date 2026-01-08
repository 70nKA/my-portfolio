import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { JourneySection } from '../components/sections/JourneySection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};
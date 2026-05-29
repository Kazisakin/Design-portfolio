import React from 'react';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import FeaturedProjects from './components/FeaturedProjects';
import ShowreelSection from './components/ShowreelSection';
import ToolsStrip from './components/ToolsStrip';
import CtaBanner from './components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedProjects />
      <ShowreelSection />
      <ToolsStrip />
      <CtaBanner />
    </>
  );
}

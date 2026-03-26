import React from 'react';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import FeaturedProjects from './components/FeaturedProjects';
import ToolsStrip from './components/ToolsStrip';
import CtaBanner from './components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedProjects />
      <ToolsStrip />
      <CtaBanner />
    </>
  );
}

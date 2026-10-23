import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import Reveal from '../components/ui/Reveal';

export const metadata = {
  title: 'Work — Kazi Sakin Design',
  description: 'Brand identity, websites, social media and motion projects by Kazi Sakin.',
};

export default function WorkPage() {
  return (
    <div className="wrap pb-[clamp(5rem,11vw,10rem)] pt-[clamp(9rem,18vh,12rem)]">
      <Reveal>
        <p className="label">Work</p>
        <h1 className="t-display mt-7 max-w-[18ch]">Brand identities, websites, campaigns and motion.</h1>
      </Reveal>
      <div className="mt-[clamp(4rem,8vw,6rem)]">
        <ProjectGrid />
      </div>
    </div>
  );
}

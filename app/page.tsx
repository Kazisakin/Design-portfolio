import React from 'react';
import HeroWall from './components/home2/HeroWall';
import CaseStack from './components/home2/CaseStack';
import Ribbons from './components/home2/Ribbons';
import MoreWork from './components/home2/MoreWork';
import Services from './components/home2/Services';
import AboutStrip from './components/home2/AboutStrip';
import Closing from './components/home2/Closing';

// Home: a tilted wall of work lifts upright, the two brand case studies stack
// over each other in 3D, then the rest of the work, services and an invitation.
// (The previous home components are kept in components/home.)
export default function HomePage() {
  return (
    <>
      <HeroWall />
      <CaseStack />
      <Ribbons />
      <MoreWork />
      <Services />
      <AboutStrip />
      <Closing />
    </>
  );
}

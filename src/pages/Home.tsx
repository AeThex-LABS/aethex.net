import React from 'react';
import Hero from '../components/Hero';
import PathSelector from '../components/PathSelector';
import FeaturedExperiences from '../components/FeaturedExperiences';
import EcosystemMap from '../components/EcosystemMap';
import PassportCTA from '../components/PassportCTA';
import FoundationPreview from '../components/FoundationPreview';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PathSelector />
      <FeaturedExperiences />
      <EcosystemMap />
      <PassportCTA />
      <FoundationPreview />
    </>
  );
};

export default Home;

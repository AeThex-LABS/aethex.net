import React from 'react';
import Hero from '../components/Hero';
import PathSelector from '../components/PathSelector';
import FeaturedExperiences from '../components/FeaturedExperiences';
import PassportCTA from '../components/PassportCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PathSelector />
      <FeaturedExperiences />
      <PassportCTA />
    </>
  );
};

export default Home;

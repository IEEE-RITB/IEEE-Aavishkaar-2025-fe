import React from 'react';
import Hero from '../components/Hero';
import FeaturedEvents from '../components/FeaturedEvents';
import QuickNav from '../components/QuickNav';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedEvents />
      <QuickNav />
    </main>
  );
};

export default Home;

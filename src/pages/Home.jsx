import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="bg-[#F7FAFC] dark:bg-blueRadialGradient text-[#4F566B] dark:text-[#ffff] xl:px-0 px-6">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

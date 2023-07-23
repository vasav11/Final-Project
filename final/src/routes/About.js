import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from './AboutUs';
import Footer from '../components/Footer';

function About()  {
  return (
    <>
    <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg="https://images.unsplash.com/photo-1610552254576-9500a3e99999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1917&q=80"
      title="About"
      btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About;

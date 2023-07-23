import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Footer from '../components/Footer';

function Home  () {
  return (
    <>
      <Navbar/>
      <Hero 
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      title="Education Matters"
      text="Choose Your Favourite Courses."
      buttonText="Explore Course"
      url="/about"
      btnClass="show"
      />
      <Section1/>
      <Footer/>
     
    </>
  );
}

export default Home;

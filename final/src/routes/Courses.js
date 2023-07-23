import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Footer from '../components/Footer';

function Courses ()  {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
      title="Courses"
      btnClass="hide"
      />
      <Section1/>
      <Footer/>
    </>
  );
}

export default Courses;

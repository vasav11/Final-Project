import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Contact  ()  {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hro-mid"
      heroImg="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      title="Contact"
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;

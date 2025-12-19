import React from 'react'
import Blog from '../components/Blog'
import AboutWeMovers from '../components/About'
import Hero from '../components/Hero'
import Values from '../components/Values'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'
import Faqs from '../components/Faqs'
import Mission from '../components/Mission'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Mission/>
      <AboutWeMovers/>
      <Values/>
    
    
      <Services/>
        <Faqs/>
      <ContactUs/>
        <Blog/>
    </div>
  )
}

export default HomePage
import React from 'react'
import Blog from '../components/Blog'
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
      <Values/>
      <Blog/>
      <Faqs/>
      <ContactUs/>
      <Services/>
    </div>
  )
}

export default HomePage
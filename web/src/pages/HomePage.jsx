import React from 'react'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Blog/>
      <ContactUs/>
      <Services/>
    </div>
  )
}

export default HomePage
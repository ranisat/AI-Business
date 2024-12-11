import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Works from './sections/Works'
import Pricing from './sections/Pricing'
import Service from './sections/Service'
import Faq from './sections/Faq'
import Footer from './sections/Footer'
import Testimonial from './sections/Testimonial'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <Features/>
      <Works/>
      <Pricing/>
      <Service/>
      <Faq/>
      <Testimonial/>
      <Footer/>
    </main>
  )
}

export default App

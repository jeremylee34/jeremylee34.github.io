import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import ReturnToTop from '../components/ReturnToTop'

const Home = () => {
  return (
    <div id='home-container' className='home-container'>
      <Navbar />
      <Hero />
      <hr className='horizontalLine mx-5'/>
      <About id='about-section' />
      <ReturnToTop />
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About id='about-section' />
    </div>
  )
}

export default Home
import { React, useState, useEffect, useRef } from 'react'
import wave from '../assets/images/wave.png'
import memoji from '../assets/images/memoji-sticker-hd cropped.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import resume from '../assets/images/resume.png'
import email from '../assets/images/email.png'
import resumePDF from '../assets/Jeremy Lee CV 2023.pdf'
import { animateHeroText } from '../helper'
import { useInView } from 'react-intersection-observer'
import NextSection from './NextSection'

const Hero = () => {
  const { ref: myRef, inView: heroVisible } = useInView()

  useEffect(() => {
    if (heroVisible === true) {
      animateHeroText()
    } else {
      const heroIcon = document.querySelectorAll('.memoji')[0]
      heroIcon.classList.remove('animate')
    }
  }, [heroVisible])

  return (
    <div id='home-section'>
      <div className='heroContainer snap-top sm:snap-center'>
        <div className='grid gap-y-4 max-w-2xl ' ref={myRef}>
          <div className='greeting hero-text-slide'>
            HELLO! <img src={wave} className='wave-icon' onClick={animateHeroText}/> I'M
          </div>
          
          <h1 className='heroText hero-text-slide'>Jeremy Lee</h1>
          <div className='titles-text hero-text-slide'>
            <span>STUDENT 👨‍🎓 + DEVELOPER 👨‍💻</span>
          </div>
          <div className='hero-subtext hero-text-slide'>
            I'm a creative thinker 🧠, passionate to learn more about <strong className='gradientText'>Front-End</strong> 📱 and <strong className='gradientText'>UI/UX Design</strong> 🧪
          </div>
          <div className='hero-link-container'>
            <a href="https://www.linkedin.com/in/jeremylee7/" target="_blank">
              <img className='heroLinks hero-text-slide' src={linkedin} alt="linkedin logo" />
            </a>
            <a href="https://github.com/jeremylee34" target="_blank">
              <img className='heroLinks hero-text-slide' src={github} alt="github logo" />
            </a>
            <a href={resumePDF} target="_blank">
              <img className='heroLinks hero-text-slide' src={resume} alt="resume icon" />
            </a>
            <a href="mailto: jeremy.lee6857@gmail.com" target="_blank">
              <img className='heroLinks hero-text-slide' src={email} alt="email icon" />
            </a>
          </div>
        </div>
        <img className='memoji' src={memoji} alt="memoji icon" />
      </div>
      <NextSection section='#about-section'/>
    </div>
  )
}

export default Hero
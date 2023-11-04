import { React, useState, useEffect, useRef } from 'react'
import StrongText from './StrongText'
import { animateAboutText } from '../helper'
import { useInView } from 'react-intersection-observer'
import NextSection from './NextSection'
import PrevSection from './PrevSection'
import Skills from './Skills'
import Experience from './Experience'
import Section from './Section'

import portrait from '../assets/images/sunnies.jpg'

const About = () => {
  const { ref: myRef, inView: aboutVisible } = useInView()

  useEffect(() => {
    if (aboutVisible === true) {
      animateAboutText()
    } else {
      const heroIcon = document.querySelectorAll('.aboutPortrait')[0]
      heroIcon.classList.remove('animate')
    }
  }, [aboutVisible])

  return (
    <div id='about-section' className='about-section snap-top sm:snap-center'>
      <PrevSection section='#home-section'/>
      <div className='about-content' ref={myRef}>
        <div className='about-text-section'>
          <h1 className='sectionHeading about-text-slide'>About Me</h1>
          <p className='about-text-slide text-balance'>Hi 👋, my name is Jeremy and I am a young aspiring learner, with a passion for <StrongText>front-end web development</StrongText> and <StrongText>design</StrongText>.</p>
          {/* <p className='about-text-slide'>My front-end web development journey began in early 2022 when I self-taught myself <StrongText>HTML + CSS</StrongText> and made <a href='https://jeremyl.me/Personal-Portfolio-Website/' target="_blank"><StrongText className='gradientText hover:cursor-pointer'>my first website!</StrongText></a> Since, I have learnt <StrongText>ReactJS</StrongText> and <StrongText>Tailwind CSS</StrongText> to create modern and elegant web applications (such as this website!)</p> */}
          
          {/* <Skills /> */}
          <Section />
          <Experience />

          {/* <p className='heroHeadings about-text-slide'>In my free time I like to:</p>
          <ul>
            <li><p className='about-text-slide'>•&nbsp; Read Books 📚</p></li>
            <li><p className='about-text-slide'>•&nbsp; Lift Weights 🏋️‍♂️</p></li>
            <li><p className='about-text-slide'>•&nbsp; Walk my dog 🐕</p></li>
            <li><p className='about-text-slide'>•&nbsp; Take nice pics 📷</p></li>
          </ul> */}
        </div>
        <div>
          <img className='aboutPortrait' src={portrait} alt="portrait pic" />
        </div>
      </div>
      <NextSection section='#contact-section'/>
    </div>
  )
}

export default About
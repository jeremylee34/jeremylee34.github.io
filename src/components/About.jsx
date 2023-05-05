import { React, useState, useEffect, useRef } from 'react'
import portrait from '../assets/images/sunnies.jpg'
import StrongText from './StrongText'
import { animateAboutText } from '../helper'
import { useInView } from 'react-intersection-observer'
import NextSection from './NextSection'
import PrevSection from './PrevSection'

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
          <p className='about-text-slide'>Hi 👋, my name is Jeremy and I am a young aspiring learner, with a passion for <StrongText>front-end web development</StrongText> and <StrongText>design</StrongText>.</p>
          <p className='about-text-slide'>My front-end web development journey began in early 2022 when I self-taught myself <StrongText>HTML + CSS</StrongText> and made <a href='https://jeremyl.me/Personal-Portfolio-Website/' target="_blank"><StrongText className='gradientText hover:cursor-pointer'>my first website!</StrongText></a> Since, I have learnt <StrongText>ReactJS</StrongText> and <StrongText>Tailwind CSS</StrongText> to create modern and elegant web applications (such as this website!)</p>
          <p className='heroHeadings about-text-slide'>I am currently:</p>
          <ul className='list-disc'>
            <li className='inline-flex'>
              <p className='roleText about-text-slide'>•&nbsp; Final Year Computer Science <a className='aboutLinks' href="https://au.linkedin.com/school/unsw/" target="_blank"
              >@ UNSW</a></p>
            </li><br />
            <li className='inline-flex'>
              <p className='roleText about-text-slide'>•&nbsp; Software Engineer <a className='aboutLinks' href="https://www.sunswift.com/" target="_blank"
              >@ Sunswift Racing</a></p>
            </li><br />
            <li className='inline-flex'>
              <p className='roleText about-text-slide'>•&nbsp; IT Director <a className='aboutLinks' href="https://www.unswdigitalsociety.org/about" target="_blank"
              >@ UNSW Digital Society </a></p>
            </li><br />
          </ul>
          <p className='heroHeadings about-text-slide'>Previously:</p>
          <ul className='list-disc'>
            <li className='inline-flex'>
              <p className='roleText about-text-slide'>•&nbsp; Software Engineer <a className='aboutLinks' href="https://www.optus.com.au/about/" target="_blank"
              >@ Optus</a></p>
            </li><br />
            <li className='inline-flex'>
              <p className='roleText about-text-slide'>•&nbsp; Product Specialist <a className='aboutLinks' href="https://www.apple.com/au/" target="_blank"
              >@ Apple</a></p>
            </li><br />
          </ul>
          <p className='heroHeadings about-text-slide'>In my free time I like to:</p>
          <ul>
            <li><p className='about-text-slide'>•&nbsp; Read Books 📚</p></li>
            <li><p className='about-text-slide'>•&nbsp; Lift Weights 🏋️‍♂️</p></li>
            <li><p className='about-text-slide'>•&nbsp; Walk my dog 🐕</p></li>
            <li><p className='about-text-slide'>•&nbsp; Take sunset pics 📷</p></li>
          </ul>
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
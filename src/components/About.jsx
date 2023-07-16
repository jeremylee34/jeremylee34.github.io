import { React, useState, useEffect, useRef } from 'react'
import StrongText from './StrongText'
import { animateAboutText } from '../helper'
import { useInView } from 'react-intersection-observer'
import NextSection from './NextSection'
import PrevSection from './PrevSection'
import Chip from './Chip'

import portrait from '../assets/images/sunnies.jpg'
import confluenceIcon from '../assets/images/chips/confluence.png'
import dockerIcon from '../assets/images/chips/docker.png'
import figmaIcon from '../assets/images/chips/figma.png'
import gitIcon from '../assets/images/chips/git.png'
import htmlncssIcon from '../assets/images/chips/htmlncss.png'
import jiraIcon from '../assets/images/chips/jira.png'
import jsIcon from '../assets/images/chips/js.png'
import muiIcon from '../assets/images/chips/mui.png'
import postgresqlIcon from '../assets/images/chips/postgresql.png'
import pythonIcon from '../assets/images/chips/python.png'
import reactIcon from '../assets/images/chips/react.png'
import tailwindIcon from '../assets/images/chips/tailwind.png'

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

          <div className='chip-container'>
            <Chip img={reactIcon} text='React'/>
            <Chip img={tailwindIcon} text='TailwindCSS'/>
            <Chip img={muiIcon} text='MaterialUI'/>
            <Chip img={jsIcon} text='JavaScript'/>
            <Chip img={htmlncssIcon} text='HTML/CSS'/>
            <Chip img={pythonIcon} text='Python'/>
            <Chip img={gitIcon} text='Git'/>
            <Chip img={postgresqlIcon} text='PostgreSQL'/>
            <Chip img={figmaIcon} text='Figma'/>
            <Chip img={dockerIcon} text='Docker'/>
            <Chip img={jiraIcon} text='Jira'/>
            <Chip img={confluenceIcon} text='Confluence'/>
          </div>

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
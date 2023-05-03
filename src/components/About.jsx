import React from 'react'
import portrait from '../assets/images/sunnies.jpg'
import StrongText from './StrongText'

const About = () => {
  return (
    <div id='about-section' className='about-section'>
      <div className='py-10'>
        <hr className='horizontalLine'/>
      </div>
      <div className='about-content'>
        <div className='about-text-section'>
          <h1 className='sectionHeading'>About Me</h1>
          <p>Hi 👋, my name is Jeremy and I am a young aspiring learner, with a passion for <StrongText>front-end web development</StrongText> and <StrongText>design</StrongText>.</p>
          <p>My front-end web development journey began in late 2022 when I self-taught myself <StrongText>HTML + CSS</StrongText> and made <a href='https://jeremyl.me/Personal-Portfolio-Website/' target="_blank"><StrongText className='gradientText hover:cursor-pointer'>my first website!</StrongText></a> Since, I have learnt <StrongText>ReactJS</StrongText> and <StrongText>Tailwind CSS</StrongText> to create modern and elegant web applications (such as this website!)</p>
          <p className='heroHeadings'>I am currently:</p>
          <ul className='list-disc'>
            <li className='inline-flex'>
              <p className='roleText'>•&nbsp; Penultimate Computer Science <a className='aboutLinks' href="https://au.linkedin.com/school/unsw/" target="_blank"
              >@ UNSW</a></p>
            </li><br />
            <li className='inline-flex'>
              <p className='roleText'>•&nbsp; Software Engineer <a className='aboutLinks' href="https://www.sunswift.com/" target="_blank"
              >@ Sunswift Racing</a></p>
            </li><br />
            <li className='inline-flex'>
              <p className='roleText'>•&nbsp; IT Director <a className='aboutLinks' href="https://www.unswdigitalsociety.org/about" target="_blank"
              >@ UNSW Digital Society </a></p>
            </li><br />
          </ul>
          <p className='heroHeadings'>Previously:</p>
          <ul className='list-disc'>
            <li className='inline-flex'>
              <p className='roleText'>•&nbsp; Software Engineer <a className='aboutLinks' href="https://www.optus.com.au/about/" target="_blank"
              >@ Optus</a></p>
            </li><br />
            <li className='inline-flex'>
              <p className='roleText'>•&nbsp; Product Specialist <a className='aboutLinks' href="https://www.apple.com/au/" target="_blank"
              >@ Apple</a></p>
            </li><br />
          </ul>
          <p className='heroHeadings'>In my free time I like to:</p>
          <ul>
            <li><p>•&nbsp; Read Books 📚</p></li>
            <li><p>•&nbsp; Lift Weights 🏋️‍♂️</p></li>
            <li><p>•&nbsp; Walk my dog 🐕</p></li>
            <li><p>•&nbsp; Take sunset pics 📷</p></li>
          </ul>
        </div>
        <div>
          <img className='aboutPortrait' src={portrait} alt="portrait pic" />
        </div>
      </div>
    </div>
  )
}

export default About
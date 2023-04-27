import React from 'react'
import portrait from '../assets/images/sunnies.jpg'

const About = () => {
  return (
    <div className='mb-20'>
      <hr className='horizontalLine'/>
      <h1 className='text-3xl font-bold text-center mb-5'>About Me</h1>
      <div className='flex flex-col md:flex-row mx-5 md:mx-10 justify-center items-center text-slate-800 dark:text-gray-400'>
        <div className='flex-col text-xl max-w-2xl text-center md:text-left'>
          <p>Hi 👋, my name is Jeremy and I am a young aspiring learner, with a passion for <strong className='text-black dark:text-white'>Software Engineering</strong> and <strong className='text-black dark:text-white'>Design</strong>.</p>
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
          <img className='rounded-full object-cover w-80 h-80 my-8 md:my-0' src={portrait} alt="portrait pic" />
        </div>
      </div>
    </div>
  )
}

export default About
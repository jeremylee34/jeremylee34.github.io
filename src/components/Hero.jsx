import React from 'react'
import wave from '../assets/images/wave.png'
import student from '../assets/images/student.png'
import developer from '../assets/images/developer.png'
import memoji from '../assets/images/memoji-sticker-hd cropped.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import resume from '../assets/images/resume.png'
import email from '../assets/images/email.png'
import resumePDF from '../assets/Jeremy Lee CV 2023.pdf'
import { Context, useContext } from '../context';

const Hero = () => {
  const { getters, setters } = useContext(Context)

  return (
    <div className='heroContainer'>
      <div className='grid gap-y-4 max-w-2xl'>
        <div className='inline-flex flex justify-center sm:justify-start text-3xl gap-3 text-slate-800 dark:text-gray-400'>
          HELLO! <img src={wave} className='h-10'/> I'M
        </div>
        <h1 className='heroText'>Jeremy Lee</h1>
        <div className='inline-flex justify-center sm:justify-start text-2xl md:text-3xl gap-3 font-bold'>
          STUDENT 👨‍🎓 + DEVELOPER 👨‍💻
        </div>
        <div className='inline-flex-wrap text-2xl gap-3 text-slate-700 dark:text-gray-400'>
          I'm a creative thinker 🧠, passionate to learn more about <strong className='gradientText'>Front-End</strong> 📱 and <strong className='gradientText'>UI/UX Design</strong> 🧪
        </div>
        <div className='flex my-3 justify-center sm:justify-start gap-6 invert'>
          <a href="https://www.linkedin.com/in/jeremylee7/" target="_blank">
            <img className='heroLinks' src={linkedin} alt="linkedin logo" />
          </a>
          <a href="https://github.com/jeremylee34" target="_blank">
            <img className='heroLinks' src={github} alt="github logo" />
          </a>
          <a href={resumePDF} target="_blank">
            <img className='heroLinks' src={resume} alt="resume icon" />
          </a>
          <a href="mailto: jeremy.lee6857@gmail.com" target="_blank">
            <img className='heroLinks' src={email} alt="email icon" />
          </a>
        </div>
      </div>

      <img className='object-contain w-52 md:w-72 mb-20 mt-10' src={memoji} alt="memoji icon" />
    </div>
  )
}

export default Hero
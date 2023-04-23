import React from 'react'
import wave from '../assets/images/wave.png'
import student from '../assets/images/student.png'
import developer from '../assets/images/developer.png'
import memoji from '../assets/images/memoji-sticker-hd cropped.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import resume from '../assets/images/resume.png'
import email from '../assets/images/email.png'
import { Context, useContext } from '../context';

const Hero = () => {
  const { getters, setters } = useContext(Context)

  return (
    <div className='flex flex-col md:flex-row pt-20 mx-10 md:mx-20 justify-center items-center gap-10'>
      <div className='grid gap-y-4 max-w-2xl'>
        <div className='inline-flex text-3xl gap-3'>
          HELLO! <img src={wave} className='h-10'/> I'M
        </div>
        <h1 className='text-8xl font-medium mb-8'>Jeremy Lee</h1>
        <div className='inline-flex text-3xl gap-3 font-bold'>
          STUDENT 👨‍🎓 + DEVELOPER 👨‍💻
        </div>
        <div className='inline-flex-wrap text-2xl gap-3'>
          I'm a creative thinker 🧠, passionate to learn about <strong>UX/UI</strong> 📱 and <strong>Product Design</strong> 🧪
        </div>
        <div className='flex mt-3 gap-6 invert'>
          <a href="https://www.linkedin.com/in/jeremylee7/" target="_blank">
            <img className={`h-8 ease-in duration-100 hover:scale-110 ${getters.darkMode === 'true' ? 'invert-0' : 'invert'}`} src={linkedin} alt="linkedin logo" />
          </a>
          <a href="https://github.com/jeremylee34" target="_blank">
            <img className={`h-8 ease-in duration-100 hover:scale-110 ${getters.darkMode === 'true' ? 'invert-0' : 'invert'}`} src={github} alt="github logo" />
          </a>
          <a href="http://jeremyl.me/assets/images/Jeremy Lee CV 2023.pdf" target="_blank">
            <img className={`h-8 ease-in duration-100 hover:scale-110 ${getters.darkMode === 'true' ? 'invert-0' : 'invert'}`} src={resume} alt="resume icon" />
          </a>
          <a href="mailto: jeremy.lee6857@gmail.com" target="_blank">
            <img className={`h-8 ease-in duration-100 hover:scale-110 ${getters.darkMode === 'true' ? 'invert-0' : 'invert'}`} src={email} alt="email icon" />
          </a>
        </div>
      </div>

      <img className='object-contain w-min' src={memoji} alt="memoji icon" />
    </div>
  )
}

export default Hero
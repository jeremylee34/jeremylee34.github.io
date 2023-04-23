import React from 'react'
import wave from '../assets/images/wave.png'
import student from '../assets/images/student.png'
import developer from '../assets/images/developer.png'
import brain from '../assets/images/brain.png'
import phone from '../assets/images/phone.png'
import test_tube from '../assets/images/test_tube.png'
import memoji from '../assets/images/memoji-sticker-hd cropped.png'

const Hero = () => {
  return (
    <div className='flex pt-20 mx-20 justify-center gap-10'>
      <div className='grid gap-y-4'>
        <div className='inline-flex text-3xl gap-3'>
          HELLO! <img src={wave} className='h-10'/> I'M
        </div>
        <h1 className='text-8xl font-medium mb-8'>Jeremy Lee</h1>
        <div className='inline-flex text-3xl gap-3 font-bold'>
          STUDENT <img src={student} className='h-10'/> + DEVELOPER <img src={developer} className='h-10'/>
        </div>
        <div className='inline-flex-wrap text-3xl gap-3'>
          I'm a creative thinker 🧠, passionate to learn about <strong>UX/UI</strong> 📱 and <strong>Product Design</strong> 🧪
        </div>
      </div>

      <img src={memoji} alt="" />
    </div>
  )
}

export default Hero
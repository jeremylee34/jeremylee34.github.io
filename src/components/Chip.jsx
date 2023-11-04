import React from 'react'

const Chip = ({ img, text }) => {
  return (
    <div className='flex items-center gap-[7px] bg-white dark:bg-[#282828] max-w-fit px-[8px] rounded-[3px] about-text-slide h-[31px] chip-slide'>
      <img src={img} alt="icon" className='max-h-[20px]'/>
      <p className='mb-[3px] text-[16px] text:black dark:text-white'>{text}</p>
    </div>
  )
}

export default Chip
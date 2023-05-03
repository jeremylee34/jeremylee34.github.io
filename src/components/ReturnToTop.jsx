import { React, useState } from 'react'
import returnIcon from '../assets/images/return-to-top-emoji.png'

const ReturnToTop = () => {
  const [show, setShow] = useState(false)
  
  function toggleShow() {
    const distScrolled = document.documentElement.scrollTop
    if (distScrolled > 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  function returnToTop() {
    window.scrollTo({ top: 0 })
  }
  
  window.addEventListener('scroll', toggleShow)

  return (
    <>
      {show  &&
        <div className='returnToTopButton' onClick={returnToTop}>
          <img src={returnIcon} alt="" />
        </div>
      }
    </>
  )
}

export default ReturnToTop
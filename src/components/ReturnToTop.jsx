import { React, useState, useEffect } from 'react'
import returnIcon from '../assets/images/return-to-top-emoji.png'

const ReturnToTop = () => {
  const [show, setShow] = useState(false)

  function toggleShow() {
    const distScrolled = document.getElementById('home-container').scrollTop
    // const distScrolled = document.documentElement.scrollTop
    if (distScrolled > 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  function returnToTop() {
    const homeWindow = document.getElementById('home-container')
    homeWindow.scrollTo({ top: 50 })
  }

  useEffect(() => {
    const homeWindow = document.getElementById('home-container')
    homeWindow.addEventListener('scroll', toggleShow)
  }, [])
  
  return (
    <>
      {show  &&
        <a className='returnToTopButton' href="#" onClick={returnToTop}>
          <img src={returnIcon} alt="" />
        </a>
      }
    </>
  )
}

export default ReturnToTop
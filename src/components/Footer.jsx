import React from 'react'
import SpotifyIcon from "../assets/images/spotify.png"
import LinkedinIcon from "../assets/images/linkedin_box.png" 
import FacebookIcon from "../assets/images/facebook.png"
import InstagramIcon from "../assets/images/instagram.png"
import GithubIcon from "../assets/images/github_box.png"
import MailIcon from "../assets/images/mail.png"

const Footer = () => {
  return (
    <div id='contact-section' className='footer'>
      <div className='footer-box'>
        <div className='footer-icons'>
            <a className='footer-icon' href="https://open.spotify.com/user/egzgqd1rtehhu6m7d604qz42q?si=cf3bda32d4f2490c"
              target="_blank">
              <img src={SpotifyIcon} alt="spotify icon" />
            </a>
            <a className='footer-icon' href="https://www.linkedin.com/in/jeremylee7/"
              target="_blank">
              <img src={LinkedinIcon} alt="linkedin icon" />
            </a>
            <a className='footer-icon' href="https://www.facebook.com/dosirac1/"
              target="_blank">
              <img src={FacebookIcon} alt="facebook icon" />
            </a>
            <a className='footer-icon' href="https://www.instagram.com/dosirac7/"
              target="_blank">
              <img src={InstagramIcon} alt="instagram icon" />
            </a>
            <a className='footer-icon' href="https://github.com/jeremylee34"
              target="_blank">
              <img src={GithubIcon} alt="resume icon" />
            </a>
            <a className='footer-icon' href="mailto: jeremy.lee6857@gmail.com"
              target="_blank">
              <img src={MailIcon} alt="email icon" />
            </a>
        </div>
        <div>
          <h1 className='footer-text-h1'>© Jeremy Lee 2023</h1>
          <p className='footer-text-p'>Made with React and Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import { React, useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Context, useContext } from '../context';
import { toggleDarkMode, animateNavLinks } from '../helper';

const Navbar = () => {
  const { getters, setters } = useContext(Context)
  const navigate = useNavigate()
  const [prevScrollPos, setPrevScrollPos] = useState();
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const homeWindow = document.getElementById('home-container')
    const currentScrollPos = homeWindow.scrollTop
    if (currentScrollPos > prevScrollPos && window.innerWidth < 768) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    animateNavLinks()
    const homeWindow = document.getElementById('home-container')
    homeWindow.addEventListener('scroll', handleScroll);
    const btn = document.querySelector('.darkModeButton')
    btn.addEventListener('click', () => {
      btn.classList.add('darkMode-animate')
      setTimeout(() => {
        btn.classList.remove('darkMode-animate')
      }, 1000);
    })
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <nav className={`navbar ${visible ? 'top-0 animate-navbar-in' : 'top-[-80px] animate-navbar-out'} sm:top-0`}>
      <a onClick={ () => navigate('/') }>
        <img src={logo} alt="logo" className="logoLink navLinks hover:scale-105 ease-in duration-200"/>  
      </a>
      <ul className='navLinkContainer'>
        <li><a className='navLinks navSectionLinks' href="#home-section" >Home</a></li>
        <li><a className='navLinks navSectionLinks' href="#about-section" >About</a></li>
        {/* <li><a className='navLinks navSectionLinks' href="#projects" >Projects</a></li> */}
        {/* <li><a className='navLinks navSectionLinks' href="#photos" >Photos</a></li> */}
        <li><a className='navLinks navSectionLinks' href="#contact-section" >Contact</a></li>
        <li className='navLinks darkModeButton'
          onClick={() => {
            toggleDarkMode(getters, setters)
          }}
        >
          { getters.darkMode === 'true'
          ? <LightModeIcon></LightModeIcon>
            : <DarkModeIcon></DarkModeIcon>
          }
        </li>
        <li className='navLinks burgerButton'
          onClick={() => {
            setters.setSidebarOpen(!getters.sidebarOpen)
          }}
        >
          { getters.sidebarOpen === true
            ? <MenuOpenIcon />
            : <MenuIcon/>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
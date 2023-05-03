import React from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Context, useContext } from '../context';
import { toggleDarkMode } from '../helper';

const Navbar = () => {
  const { getters, setters } = useContext(Context)
  const navigate = useNavigate()

  return (
    <nav className='navbar'>
      <a className='cursor-pointer scale-75 hover:scale-90 ease-in duration-200' onClick={ () => navigate('/') }>
        <img src={logo} alt="logo" className="dark:invert h-10"/>  
      </a>
      <ul className='navLinkContainer'>
        <li><a className='navLinks' href="#about-section" >About</a></li>
        <li><a className='navLinks' href="#projects" >Projects</a></li>
        {/* <li><a className='navLinks' href="#bookshelf" >Bookshelf</a></li> */}
        <li><a className='navLinks' href="#photos" >Photos</a></li>
        <li><a className='navLinks' href="#contact-section" >Contact</a></li>
        <li className='darkModeButton'
          onClick={() => {
            toggleDarkMode(getters, setters)
          }}
        >
          { getters.darkMode === 'true'
            ? <LightModeIcon></LightModeIcon>
            : <DarkModeIcon></DarkModeIcon>
          }
        </li>
        <li className='burgerButton'
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
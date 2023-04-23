import React from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Context, useContext } from '../context';
import { toggleDarkMode } from '../helper';


const Navbar = () => {
  const { getters, setters } = useContext(Context)
  const navigate = useNavigate()

  return (
    <nav className='bg-black p-5 flex items-center justify-between drop-shadow-md'>
      <a className='cursor-pointer' onClick={ () => navigate('/') }>
        <img src={logo} alt="logo" className="invert h-10"/>
      </a>
        <ul className='flex gap-8 text-white text-lg'>
          <li><a href="#about" >About</a></li>
          <li><a href="#projects" >Projects</a></li>
          <li><a href="#bookshelf" >Bookshelf</a></li>
          <li><a href="#photos" >Photos</a></li>
          <li><a href="#contact" >Contact</a></li>
          <li className='cursor-pointer'
            onClick={() => {
              toggleDarkMode(getters, setters)
            }}
          >
            { getters.darkMode === 'true'
              ? <LightModeIcon></LightModeIcon>
              : <DarkModeIcon></DarkModeIcon>
            }
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
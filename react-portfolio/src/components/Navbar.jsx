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
      <ul className='flex items-center justify-center gap-2 text-white text-lg'>
        <li><a className='hover:bg-gray-900 py-2 px-4 rounded ease-in duration-200' href="#about" >About</a></li>
        <li><a className='hover:bg-gray-900 py-2 px-4 rounded ease-in duration-200' href="#projects" >Projects</a></li>
        <li><a className='hover:bg-gray-900 py-2 px-4 rounded ease-in duration-200' href="#bookshelf" >Bookshelf</a></li>
        <li><a className='hover:bg-gray-900 py-2 px-4 rounded ease-in duration-200' href="#photos" >Photos</a></li>
        <li><a className='hover:bg-gray-900 py-2 px-4 rounded ease-in duration-200' href="#contact" >Contact</a></li>
        <li className='cursor-pointer hover:scale-110 ease-in duration-200 mb-1'
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
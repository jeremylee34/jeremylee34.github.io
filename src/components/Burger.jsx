import React from 'react'
import { Context, useContext } from '../context';
import PanoramaIcon from '@mui/icons-material/Panorama';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Face5Icon from '@mui/icons-material/Face5';

const Burger = () => {
  const { getters, setters } = useContext(Context)

  return (
    <div className='burgerMenu'>
      <div className={`clickOut ease-in-out duration-300 ${getters.sidebarOpen ? "backdrop-brightness-50" : "backdrop-brightness-100 hidden"}`}
      onClick={() => {
        setters.setSidebarOpen(!getters.sidebarOpen)
      }}
      ></div>
      <div className={`sidebar ${getters.sidebarOpen ? "translate-x-0 " : "translate-x-full"}`}>
        <ul className='sidebarContent'>
          <li onClick={() => {setters.setSidebarOpen(!getters.sidebarOpen)}} className='sidebarLinks'>
            {/* <Face5Icon /> */}
            <a href="#about-section" >About</a>
          </li>
          <li onClick={() => {setters.setSidebarOpen(!getters.sidebarOpen)}} className='sidebarLinks'>
            {/* <DeveloperModeIcon /> */}
            <a href="#projects" >Projects</a>
          </li>
          <li onClick={() => {setters.setSidebarOpen(!getters.sidebarOpen)}} className='sidebarLinks'>
            {/* <PanoramaIcon /> */}
            <a href="#photos" >Photos</a>
          </li>
          <li onClick={() => {setters.setSidebarOpen(!getters.sidebarOpen)}} className='sidebarLinks'>
            {/* <PermContactCalendarIcon /> */}
            <a href="#contact-section" >Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
  
export default Burger
import React from 'react'
import { Context, useContext } from '../context';

const Burger = () => {
  const { getters, setters } = useContext(Context)

  return (
    <div className='burgerMenu'>
      <div className={`clickOut ease-in-out duration-300 ${getters.sidebarOpen ? "backdrop-brightness-50" : "backdrop-brightness-100"}`}
      onClick={() => {
        setters.setSidebarOpen(!getters.sidebarOpen)
      }}
      ></div>
      <div className={`sidebar ease-in-out duration-300 ${getters.sidebarOpen ? "translate-x-0 " : "translate-x-full"}`}>
        <h2 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h2>
      </div>
    </div>
  )
}

export default Burger
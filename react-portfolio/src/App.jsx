import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context, initial } from './context';
import { useState, useEffect } from 'react';
import { initDarkMode } from './helper';
import Home from './pages/Home';
import About from './components/About';
import Burger from './components/Burger';

function App() {
  const [darkMode, setDarkMode] = useState(initial.darkMode)
  const [bgColor, setBgColor] = useState(initial.bgColor)
  const [fontColor, setFontColor] = useState(initial.fontColor)
  const [sidebarOpen, setSidebarOpen] = useState(initial.sidebarOpen)

  const getters = {
    darkMode,
    bgColor,
    fontColor,
    sidebarOpen
  }
  const setters = {
    setDarkMode,
    setBgColor,
    setFontColor,
    setSidebarOpen
  }

  useEffect(() => {
    initDarkMode(setDarkMode, setters)
  }, [])

  return (
    <div style={{ backgroundColor: bgColor, color: fontColor, transition: 'all 0.8s ease' }}>
      <Context.Provider value={{ getters, setters }}>
        <Burger />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/#about' element={<About />}/>

          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context, initial } from './context';
import { useState, useEffect } from 'react';
import { initDarkMode } from './helper';
import Home from './pages/Home';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(initial.darkMode)
  const [bgColor, setBgColor] = useState(initial.bgColor)
  const [fontColor, setFontColor] = useState(initial.fontColor)

  const getters = {
    darkMode,
    bgColor,
    fontColor
  }
  const setters = {
    setDarkMode,
    setBgColor,
    setFontColor
  }

  useEffect(() => {
    initDarkMode(setDarkMode, setters)
  }, [])

  return (
    <div style={{ backgroundColor: bgColor, color: fontColor }}>
      <Context.Provider value={{ getters, setters }}>
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

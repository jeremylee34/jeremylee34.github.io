export function toggleDarkMode(getters, setters) {
  if (getters.darkMode === 'true') {
    localStorage.setItem('darkMode', 'false')
    setters.setDarkMode('false')
    setters.setBgColor('#181a1b')
    setters.setFontColor('#e8e6e3')
  } else {
    localStorage.setItem('darkMode', 'true')
    setters.setDarkMode('true')
    setters.setBgColor('white')
    setters.setFontColor('black')
  }
}

export function initDarkMode(setDarkMode) {
  if (!localStorage.getItem('darkMode')) {
    localStorage.setItem('darkMode', 'true')
  }
  setDarkMode(localStorage.getItem('darkMode'))
}
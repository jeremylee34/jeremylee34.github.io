export function toggleDarkMode(getters, setters) {
  if (localStorage.getItem('darkMode') === 'true') {
    localStorage.setItem('darkMode', 'false')
    setters.setDarkMode('false')
    setters.setBgColor('rgb(226 232 240)')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('darkMode', 'true')
    setters.setDarkMode('true')
    setters.setBgColor('rgb(23 23 23)')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  }
}

export function initDarkMode(setDarkMode, setters) {
  if (!localStorage.getItem('darkMode')) {
    localStorage.setItem('darkMode', 'true')
  }
  setDarkMode(localStorage.getItem('darkMode'))
  if (localStorage.getItem('darkMode') === 'true') {
    setters.setBgColor('rgb(23 23 23)')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  } else {
    setters.setBgColor('rgb(226 232 240)')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  }
}
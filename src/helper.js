export function toggleDarkMode(getters, setters) {
  if (localStorage.getItem('darkMode') === 'true') {
    localStorage.setItem('darkMode', 'false')
    setters.setDarkMode('false')
    setters.setBgColor('#ebebeb')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('darkMode', 'true')
    setters.setDarkMode('true')
    setters.setBgColor('#171717')
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
    setters.setBgColor('#171717')
    setters.setFontColor('#e8e6e3')
    document.documentElement.classList.add('dark');
  } else {
    setters.setBgColor('#ebebeb')
    setters.setFontColor('black')
    document.documentElement.classList.remove('dark')
  }
}

export function animateNavLinks() {
  const navbarLinks = document.querySelectorAll('.navLinks');
  var index = 0
  navbarLinks.forEach((link) => {
    var style = window.getComputedStyle(link)
    if (style.display !== 'none') {
      setTimeout(() => {
        link.classList.add('animate');
      }, 100 * (index + 1));
      index += 1
    }
  });
}

export function animateHeroText() {
  const navbarLinks = document.querySelectorAll('.hero-text-slide');
  var index = 0
  navbarLinks.forEach((link) => {
    var style = window.getComputedStyle(link)
    link.classList.remove('animate')
    if (style.display !== 'none') {
      setTimeout(() => {
        link.classList.add('animate');
      }, 100 * (index + 1));
      index += 1
    }
  });

  const heroIcon = document.querySelectorAll('.memoji')[0]
  heroIcon.classList.add('animate')
}

export function animateAboutText() {
  const navbarLinks = document.querySelectorAll('.about-text-slide');
  var index = 0
  navbarLinks.forEach((link) => {
    var style = window.getComputedStyle(link)
    link.classList.remove('animate')
    if (style.display !== 'none') {
      setTimeout(() => {
        link.classList.add('animate');
      }, 100 * (index + 1));
      index += 1
    }
  });
  const heroIcon = document.querySelectorAll('.aboutPortrait')[0]
  heroIcon.classList.add('animate')
}

export function animateChips(section) {
  const navbarLinks = document.querySelectorAll('.chip-slide');
  var index = 0
  navbarLinks.forEach((link) => {
    var style = window.getComputedStyle(link)
    link.classList.remove('animate')
    if (style.display !== 'none') {
      setTimeout(() => {
        link.classList.add('animate');
      }, 100 * (index + 1));
      index += 1
    }
  });
}
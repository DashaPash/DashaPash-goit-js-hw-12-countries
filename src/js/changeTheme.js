const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchCheckbox = document.querySelector('#theme-switch-toggle')

switchCheckbox.addEventListener('change', swtichTheme)

function swtichTheme(e) {
    if (e.target.checked) {
        setDarkTheme()
    } else {
        setLightTheme()
   }
}

function themeToggle(remove, add) {
  document.body.classList.remove(remove)
  document.body.classList.add(add)
}

function setDarkTheme() {
  themeToggle(Theme.LIGHT, Theme.DARK)
  localStorage.setItem('theme', 'Theme.DARK')
}

function setLightTheme() {
  themeToggle(Theme.DARK, Theme.LIGHT)
  localStorage.setItem('theme', 'Theme.LIGHT')
}

if (localStorage.getItem('theme') === 'Theme.DARK') {
  document.body.classList.add('dark-theme')
  switchCheckbox.checked = true
}




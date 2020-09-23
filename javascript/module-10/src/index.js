import './styles.css';
import './js/template.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switch: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};

refs.switch.addEventListener('change', changeTheme);

selectTheme();

function selectTheme() {
  const userTheme = localStorage.getItem('theme');
  refs.body.classList.add(userTheme);
  if (userTheme === Theme.DARK) {
    refs.switch.checked = true;
  }
}

function changeTheme() {
  if (this.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorageLightTheme();
  } else {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    localStorageDarkTheme();
  }
}

function localStorageLightTheme() {
  localStorage.removeItem('theme', Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}

function localStorageDarkTheme() {
  localStorage.removeItem('theme', Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

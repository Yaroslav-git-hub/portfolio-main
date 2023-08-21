// Функция для переключения между английским и русским языками
const ruButton = document.querySelector('.header__translate--button-ru');
const enButton = document.querySelector('.header__translate--button-en');
const ruNav = document.querySelector('.header__nav-ru');
const enNav = document.querySelector('.header__nav-en');
const ruContactHeader = document.querySelector('.header__contact--button-ru');
const enContactHeader = document.querySelector('.header__contact--button-en');

enButton.addEventListener('click', () => {
    ruNav.style.display = 'flex';
    enNav.style.display = 'none';
    ruButton.style.display = 'block';
    enButton.style.display = 'none';
    ruContactHeader.style.display = 'block';
    enContactHeader.style.display = 'none';
});

ruButton.addEventListener('click', () => {
    ruNav.style.display = 'none';
    enNav.style.display = 'flex';
    ruButton.style.display = 'none';
    enButton.style.display = 'block';
    ruContactHeader.style.display = 'none';
    enContactHeader.style.display = 'block';
});

// Функция для переключения темы сайта (светлая/темная)
const moonBttn = document.querySelector('.header__theme--button-moon');
const sunBttn = document.querySelector('.header__theme--button-sun');
const header = document.querySelector('.header');

moonBttn.addEventListener('click', () => {
    moonBttn.style.display = 'none';
    sunBttn.style.display = 'block';
    header.style.background = 'var(--bgSun)';
});

sunBttn.addEventListener('click', () => {
    moonBttn.style.display = 'block';
    sunBttn.style.display = 'none';
    header.style.background = 'var(--bgMoon)';
});

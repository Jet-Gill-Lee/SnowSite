const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
});


const brodieButton = document.getElementById('brodie-button');
const brodieBitch = document.getElementsByClassName('hero-text')[0]
brodieButton.addEventListener('click', () => {
  brodieBitch.classList.toggle('active')
});
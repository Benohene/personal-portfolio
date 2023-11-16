// Hamburger menu
const toggleButton = document.querySelector('.toggleBtn');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the default behavior of the anchor element
  navbarLinks.classList.toggle('active');
//   remove nav links after clicking a link
    navbarLinks.addEventListener('click', (e) => {
        navbarLinks.classList.remove('active');
    });
});
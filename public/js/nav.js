const menuButton = document.getElementById('menu_btn');
const sideNav = document.querySelector('.side_nav');
const closeButton = document.getElementById('close_btn');
const navLinks = document.querySelectorAll('.nav-link');
const hasSubmenus = document.querySelectorAll('.has-submenu');

// Function to toggle the side navigation
function toggleNav() {
    sideNav.classList.toggle('open');
}

// Open the side navigation when the button is clicked
menuButton.addEventListener('click', (e) => {
    alert('')
    e.stopPropagation();
    toggleNav();
});

// Close the side navigation when clicking the close button
closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    sideNav.classList.remove('open');
});

// Close the side navigation when clicking outside of it
document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !menuButton.contains(e.target)) {
        sideNav.classList.remove('open');
    }
});

// Prevent clicks inside the side navigation from closing it
sideNav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Toggle nested menus on click (Mobile view)
hasSubmenus.forEach(submenu => {
    // Mobile: click event
    submenu.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('open');
    });
});

// Set the active link when clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
    });
});
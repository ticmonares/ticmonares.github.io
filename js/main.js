const navLinks = document.querySelectorAll('.nav-link');
const $navbarNav = document.getElementById('navbarNav');
const listenNavLinks = () => {
    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            $navbarNav.classList.remove('show');
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    listenNavLinks();
})
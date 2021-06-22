const navLinks = document.querySelectorAll('.nav-link');
const $btnNav = document.getElementById('btnNav');
const listenNavLinks = () => {
    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            $btnNav.click();
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    listenNavLinks();
})
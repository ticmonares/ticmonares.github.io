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

// * Esta función únicamente asigna la clase show a todos los iconos de líneas tematicas
function mostrarIconos() {
    var iconos = document.querySelectorAll(".img-thumbnail");
    iconos.forEach(icono => {
        icono.classList.add("show");
    });
}

window.onload = function() {
    window.addEventListener("scroll", function() {
        let $tematicasFirstRow = document.getElementById("img-porfile");
        elementIsVisible($tematicasFirstRow);
    });
};

// * Función para saber cuando un elemento es visible justo cunado
// *entra en pantalla, es decir esta visible
// * Información importante esta resaltada
// ? Sera ideal darle un pequeño rango?
const elementIsVisible = ($element) => {
    //* Obtenemos la altura  del documento cliente
    let clientHeight = document.documentElement.clientHeight;
    //* Obtenemos las coordenadas del elemento que entro por parámetro
    let coords = $element.getBoundingClientRect();
    // Obtenemos las coordenadas en el eje Y
    let yCoords = coords.y;
    // console.log(clientHeight);
    // console.log(yCoords);
    // si la altura del cliente es mayor o igual que las coordenadas en y del elemento
    // Entonces mostramos los iconos
    if (clientHeight >= yCoords) {
        console.log("AHORA SE MUESTRA");
        mostrarIconos()
    }
}
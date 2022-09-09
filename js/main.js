const configDataIdiomaDataTable = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ning\u00fan dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "\u00daltimo",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
}
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
// Inicializamos los datatables 
$(document).ready( function () {
    $('#tblExperiencia').DataTable({
        language: configDataIdiomaDataTable,
        order: [[ 3, 'asc' ]]
    });

    $('#tableConocimientos').DataTable({
        language: configDataIdiomaDataTable
    });
} );
/* ==========================================================================
   MAIN.JS — modem
   --------------------------------------------------------------------------
   JavaScript común a TODAS las páginas:
     1. Menú hamburguesa en móvil (abrir y cerrar).
     2. Marcar en el menú la página en la que estamos.

   Se enlaza en el <head> de cada página con "defer":
       <script src="js/main.js" defer></script>
   "defer" hace que el script espere a que el HTML esté cargado, así que
   podemos buscar elementos sin problemas.

   ⚠️ NO TOQUES ESTE ARCHIVO: lo usan todas las páginas.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. MENÚ HAMBURGUESA
   --------------------------------------------------------------------------
   En móvil, el <nav> está oculto (lo oculta el CSS). Al pulsar el botón:
     - le ponemos o quitamos la clase "esta-abierto" al <nav> (el CSS lo muestra),
     - cambiamos aria-expanded del botón a "true" o "false", para que los
       lectores de pantalla sepan si el menú está abierto.
   -------------------------------------------------------------------------- */

const botonMenu = document.querySelector(".menu-boton");
const navegacion = document.querySelector(".header__nav");

// Solo seguimos si la página tiene el botón y el menú (todas deberían).
if (botonMenu && navegacion) {
  const textoBoton = botonMenu.querySelector(".visualmente-oculto");

  // Abre o cierra el menú según "abrir" sea true o false.
  function cambiarMenu(abrir) {
    navegacion.classList.toggle("esta-abierto", abrir);
    botonMenu.setAttribute("aria-expanded", String(abrir));
    if (textoBoton) {
      textoBoton.textContent = abrir ? "Cerrar menú" : "Abrir menú";
    }
  }

  // Al pulsar el botón: si estaba abierto lo cerramos, y al revés.
  botonMenu.addEventListener("click", function () {
    const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
    cambiarMenu(!estaAbierto);
  });

  // Con la tecla Escape también se cierra (y el foco vuelve al botón).
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && navegacion.classList.contains("esta-abierto")) {
      cambiarMenu(false);
      botonMenu.focus();
    }
  });
}


/* --------------------------------------------------------------------------
   2. PÁGINA ACTIVA EN EL MENÚ
   --------------------------------------------------------------------------
   Miramos el nombre del archivo de la URL (por ejemplo "noticias.html") y
   ponemos aria-current="page" en el enlace del menú que lleva a esa página.
   El CSS pinta ese enlace en acento y con subrayado.

   Las páginas de detalle no están en el menú, así que marcamos su sección:
     ficha-juego.html y trailer.html → Juegos
     noticia.html                    → Noticias
   -------------------------------------------------------------------------- */

// Qué enlace del menú marcar para cada página de detalle.
const seccionDePagina = {
  "ficha-juego.html": "juegos.html",
  "trailer.html": "juegos.html",
  "noticia.html": "noticias.html",
};

// location.pathname es la ruta de la URL, por ejemplo "/modem-web/noticias.html".
// Nos quedamos con lo que hay después de la última "/".
let paginaActual = location.pathname.split("/").pop();

// Si la URL termina en "/" (por ejemplo en GitHub Pages), es la portada.
if (paginaActual === "") {
  paginaActual = "index.html";
}

// Si es una página de detalle, usamos la de su sección.
const paginaDelMenu = seccionDePagina[paginaActual] || paginaActual;

const enlacesMenu = document.querySelectorAll(".menu__enlace");

enlacesMenu.forEach(function (enlace) {
  if (enlace.getAttribute("href") === paginaDelMenu) {
    enlace.setAttribute("aria-current", "page");
  } else {
    enlace.removeAttribute("aria-current");
  }
});

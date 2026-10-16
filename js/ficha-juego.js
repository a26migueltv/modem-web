/* ==========================================================================
   FICHA-JUEGO.JS — galería de la ficha de juego
   --------------------------------------------------------------------------
   Al pulsar una miniatura:
     1. la imagen grande pasa a ser la de esa miniatura,
     2. la miniatura pulsada se marca con aria-pressed="true" (el CSS le pone
        el borde de acento) y las demás con aria-pressed="false".

   HTML que necesita (ya está en ficha-juego.html):
     <img class="galeria__principal" id="galeria-principal" src="..." alt="...">
     <button class="galeria__miniatura" data-imagen="ruta/imagen.jpg" aria-pressed="false">
       <img src="ruta/imagen.jpg" alt="Descripción de la imagen">
     </button>
   ========================================================================== */

const imagenPrincipal = document.getElementById("galeria-principal");
const miniaturas = document.querySelectorAll(".galeria__miniatura");

miniaturas.forEach(function (miniatura) {
  miniatura.addEventListener("click", function () {
    // 1. Cambiamos la imagen grande: la ruta sale de data-imagen y el texto
    //    alternativo, del alt de la imagen de la miniatura.
    imagenPrincipal.src = miniatura.dataset.imagen;
    imagenPrincipal.alt = miniatura.querySelector("img").alt;

    // 2. Desmarcamos todas las miniaturas y marcamos la pulsada.
    miniaturas.forEach(function (otra) {
      otra.setAttribute("aria-pressed", "false");
    });
    miniatura.setAttribute("aria-pressed", "true");
  });
});

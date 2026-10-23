/* ==========================================================================
   NOTICIA.JS — botones de "Compartir" de noticia.html
   --------------------------------------------------------------------------
   1. Cada enlace de compartir recibe la dirección de la página actual
      (location.href), para que se comparta la noticia que se está leyendo.
   2. En el móvil, si el navegador lo permite (navigator.share), se abre el
      menú de compartir del sistema, que deja elegir la aplicación.
   3. Instagram no tiene enlace para compartir desde la web: en el
      ordenador copiamos la dirección y avisamos para que se pegue allí.
   ========================================================================== */

const enlacesCompartir = document.querySelectorAll("[data-compartir]");
const avisoCompartir = document.getElementById("compartir-aviso");

// encodeURIComponent cambia los caracteres especiales (: / ? &) para que
// la dirección se pueda meter dentro de otra dirección.
const direccion = encodeURIComponent(location.href);
const tituloNoticia = document.querySelector(".articulo h1").textContent;

// Dirección para compartir en cada red
const ENLACES = {
  x: "https://x.com/intent/post?url=" + direccion + "&text=" + encodeURIComponent(tituloNoticia),
  facebook: "https://www.facebook.com/sharer/sharer.php?u=" + direccion,
};

// ¿Es un móvil o una tableta (pantalla táctil) con menú de compartir?
const usarMenuDelSistema =
  typeof navigator.share === "function" && window.matchMedia("(pointer: coarse)").matches;


/* --------------------------------------------------------------------------
   1. PONER LA DIRECCIÓN ACTUAL EN LOS ENLACES
   -------------------------------------------------------------------------- */

enlacesCompartir.forEach(function (enlace) {
  const red = enlace.dataset.compartir;

  if (ENLACES[red]) {
    enlace.href = ENLACES[red];
  }

  // En el ordenador, el botón de Instagram copia la dirección en vez de abrir otra pestaña.
  if (red === "instagram" && !usarMenuDelSistema) {
    enlace.setAttribute("aria-label", "Copiar el enlace de la noticia para compartirlo en Instagram");
  }

  enlace.addEventListener("click", function (evento) {
    if (usarMenuDelSistema) {
      evento.preventDefault();
      abrirMenuDelSistema();
    } else if (red === "instagram") {
      evento.preventDefault();
      copiarEnlace();
    }
    // X y Facebook en el ordenador: el enlace se abre en una pestaña nueva.
  });
});


/* --------------------------------------------------------------------------
   2. MENÚ DE COMPARTIR DEL SISTEMA (móvil)
   -------------------------------------------------------------------------- */

function abrirMenuDelSistema() {
  navigator.share({ title: tituloNoticia, url: location.href }).catch(function () {
    // Si el usuario cierra el menú sin compartir no hay que hacer nada.
  });
}


/* --------------------------------------------------------------------------
   3. COPIAR LA DIRECCIÓN (Instagram en el ordenador)
   -------------------------------------------------------------------------- */

function copiarEnlace() {
  // El portapapeles solo funciona en páginas seguras (https o localhost).
  if (!navigator.clipboard) {
    mostrarAviso("Copia la dirección de la página para compartirla en Instagram.");
    return;
  }

  navigator.clipboard
    .writeText(location.href)
    .then(function () {
      mostrarAviso("Enlace copiado. Pégalo en Instagram para compartir la noticia.");
    })
    .catch(function () {
      mostrarAviso("No se ha podido copiar. Copia la dirección de la página para compartirla en Instagram.");
    });
}

// Escribe el aviso. Al tener role="status", el lector de pantalla lo lee.
function mostrarAviso(texto) {
  avisoCompartir.textContent = texto;
}

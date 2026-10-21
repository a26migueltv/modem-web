/* ==========================================================================
   NOTICIAS.JS — filtrar las noticias por categoría
   --------------------------------------------------------------------------
   Al pulsar un filtro (Todas, Anuncios, Eventos...):
     - ese filtro se marca como activo y los demás se desmarcan,
     - se ven SOLO las noticias de esa categoría ("Todas" las enseña todas),
     - si no queda ninguna noticia visible, sale el mensaje
       "No hay noticias de esta categoría".

   HTML que necesita (está en noticias.html):
     - Botones:  <button class="filtro" data-filtro="anuncios" aria-pressed="false">Anuncios</button>
     - Noticias: <li><article class="entrada-blog" data-categoria="anuncios"> ... </article></li>
     - Mensaje:  <p id="noticias-vacio" role="status" hidden>No hay noticias de esta categoría.</p>

   Recuerda:
     - Los atributos data-algo se leen con elemento.dataset.algo.
     - Para ocultar algo: elemento.hidden = true; para enseñarlo: false.
   ========================================================================== */


/* --------------------------------------------------------------------------
   PASO 1 · Buscar los elementos de la página
   -------------------------------------------------------------------------- */

const filtros = document.querySelectorAll(".filtro");
const noticias = document.querySelectorAll(".entrada-blog");
const mensajeVacio = document.getElementById("noticias-vacio");


/* --------------------------------------------------------------------------
   PASO 2 · Escuchar el clic en cada filtro
   -------------------------------------------------------------------------- */

filtros.forEach(function (filtro) {
  filtro.addEventListener("click", function () {
    marcarFiltro(filtro);
    filtrarNoticias(filtro.dataset.filtro);
  });
});


/* --------------------------------------------------------------------------
   PASO 3 · Marcar el filtro pulsado
   --------------------------------------------------------------------------
   Todos a aria-pressed="false" y el pulsado a "true".
   El CSS ya pinta de azul el que tiene aria-pressed="true".
   -------------------------------------------------------------------------- */

function marcarFiltro(filtroPulsado) {
  filtros.forEach(function (filtro) {
    filtro.setAttribute("aria-pressed", "false");
  });
  filtroPulsado.setAttribute("aria-pressed", "true");
}


/* --------------------------------------------------------------------------
   PASO 4 · Enseñar u ocultar cada noticia
   --------------------------------------------------------------------------
   Una noticia se ve si el filtro es "todas" o si su categoría es la del
   filtro. Ocultamos el <li> entero (no solo el <article>) para que su
   línea separadora también desaparezca.
   -------------------------------------------------------------------------- */

function filtrarNoticias(categoria) {
  let visibles = 0;

  noticias.forEach(function (noticia) {
    const seVe = categoria === "todas" || noticia.dataset.categoria === categoria;
    noticia.closest("li").hidden = !seVe;

    if (seVe) {
      visibles = visibles + 1;
    }
  });

  /* ------------------------------------------------------------------------
     PASO 5 · Mensaje de "no hay noticias"
     ------------------------------------------------------------------------ */
  mensajeVacio.hidden = visibles > 0;
}

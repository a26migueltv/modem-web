/* ==========================================================================
   NOTICIAS.JS — filtrar las noticias por categoría
   --------------------------------------------------------------------------
   ⚠️ ESTE ARCHIVO ESTÁ SIN HACER: lo programa quien monte noticias.html.
      Aquí tienes los pasos explicados. Escribe tu código debajo de cada
      paso y borra los comentarios de "TU CÓDIGO" cuando acabes.

   QUÉ TIENE QUE PASAR
     Al pulsar un filtro (Todas, Anuncios, Eventos...):
       - ese filtro se marca como activo y los demás se desmarcan,
       - se ven SOLO las entradas de esa categoría ("Todas" las enseña todas),
       - si no queda ninguna entrada visible, sale el mensaje
         "No hay noticias de esta categoría".

   QUÉ NECESITAS EN EL HTML (está explicado en noticias.html)
     - Botones:  <button class="filtro" type="button" data-filtro="anuncios" aria-pressed="false">Anuncios</button>
                 (el de "Todas" lleva data-filtro="todas" y aria-pressed="true")
     - Entradas: <li><article class="entrada-blog" data-categoria="anuncios"> ... </article></li>
     - Mensaje:  <p class="noticias__vacio" id="noticias-vacio" role="status" hidden>No hay noticias de esta categoría.</p>

   CÓMO SE OCULTA ALGO
     Con el atributo hidden: elemento.hidden = true  (se oculta)
                             elemento.hidden = false (se ve)
     Oculta el <li> entero, no solo el <article>: así la línea separadora
     también desaparece (el CSS ya está preparado para eso).

   QUÉ ES dataset
     Los atributos data-algo se leen con elemento.dataset.algo:
       <button data-filtro="eventos">  →  boton.dataset.filtro  vale "eventos"
       <article data-categoria="anuncios">  →  articulo.dataset.categoria  vale "anuncios"
   ========================================================================== */


/* --------------------------------------------------------------------------
   PASO 1 · Buscar los elementos de la página
   --------------------------------------------------------------------------
   Guarda en constantes:
     - todos los botones de filtro      → document.querySelectorAll(".filtro")
     - todas las entradas               → document.querySelectorAll(".entrada-blog")
     - el mensaje de "no hay noticias"  → document.getElementById("noticias-vacio")
   -------------------------------------------------------------------------- */

// TU CÓDIGO DEL PASO 1


/* --------------------------------------------------------------------------
   PASO 2 · Escuchar el clic en cada filtro
   --------------------------------------------------------------------------
   Recorre los botones con forEach y a cada uno ponle:
       boton.addEventListener("click", function () { ... });
   Dentro de esa función van los pasos 3, 4 y 5.
   -------------------------------------------------------------------------- */

// TU CÓDIGO DEL PASO 2 (con los pasos 3, 4 y 5 dentro)


  /* ------------------------------------------------------------------------
     PASO 3 · Marcar el filtro pulsado
     ------------------------------------------------------------------------
     - Recorre TODOS los botones y ponles aria-pressed="false":
         otroBoton.setAttribute("aria-pressed", "false");
     - Al botón pulsado ponle aria-pressed="true".
     El CSS ya pinta de azul el que tiene aria-pressed="true".
     ------------------------------------------------------------------------ */


  /* ------------------------------------------------------------------------
     PASO 4 · Enseñar u ocultar cada entrada
     ------------------------------------------------------------------------
     - Lee la categoría del botón pulsado: boton.dataset.filtro
     - Recorre todas las entradas. Para cada una:
         · decide si se ve: se ve si el filtro es "todas" O si su
           entrada.dataset.categoria es igual al filtro.
         · oculta o enseña su <li>:
             entrada.closest("li").hidden = !seVe;
           (closest("li") busca el <li> que contiene a la entrada)
     - Ve contando cuántas entradas se quedan visibles (una variable que
       empieza en 0 y sumas 1 cada vez que una se ve).
     ------------------------------------------------------------------------ */


  /* ------------------------------------------------------------------------
     PASO 5 · Mensaje de "no hay noticias"
     ------------------------------------------------------------------------
     - Si el contador del paso 4 es 0 → mensaje.hidden = false
     - Si no                         → mensaje.hidden = true
     ------------------------------------------------------------------------ */


/* --------------------------------------------------------------------------
   PARA PROBARLO
     1. Abre noticias.html con Live Server.
     2. Pulsa "Anuncios": deben quedar 2 entradas (la 1.ª y la 4.ª).
     3. Pulsa "Eventos": 1 entrada.
     4. Pulsa "Actualizaciones": ninguna, y sale el mensaje.
     5. Pulsa "Todas": vuelven las 4.
     6. Abre la consola (F12 → Consola) y comprueba que no hay errores rojos.
   -------------------------------------------------------------------------- */

/* ==========================================================================
   CATALOGO.JS — solo para componentes.html
   --------------------------------------------------------------------------
   Copia el HTML de cada ejemplo dentro de su bloque de código, para que el
   código que se enseña sea SIEMPRE igual que el ejemplo que se ve.
   Además añade un botón "Copiar código" a cada bloque.

   Cómo está montado cada componente en componentes.html:
       <div class="catalogo__ejemplo"> ...ejemplo... </div>
       <div class="catalogo__codigo"><pre><code></code></pre></div>

   Si el ejemplo tiene data-plantilla="id", el código se saca de la
   etiqueta <template id="id"> (se usa para el header y el footer, que no
   queremos repetir en la página).
   ========================================================================== */

const ejemplos = document.querySelectorAll(".catalogo__ejemplo");

ejemplos.forEach(function (ejemplo) {
  // El bloque de código es el elemento que va justo después del ejemplo.
  const bloqueCodigo = ejemplo.nextElementSibling;
  if (!bloqueCodigo || !bloqueCodigo.classList.contains("catalogo__codigo")) {
    return;
  }

  // 1. Sacamos el HTML del ejemplo (o de su plantilla).
  let html = ejemplo.innerHTML;
  const idPlantilla = ejemplo.dataset.plantilla;
  if (idPlantilla) {
    html = document.getElementById(idPlantilla).innerHTML;
  }

  // 2. Lo dejamos bonito y lo escribimos en el <code>.
  //    Usamos textContent (no innerHTML) para que se vea el código
  //    como texto en vez de pintarse.
  bloqueCodigo.querySelector("code").textContent = limpiarHtml(html);

  // 3. Añadimos el botón de copiar.
  const botonCopiar = document.createElement("button");
  botonCopiar.type = "button";
  botonCopiar.className = "boton boton--secundario catalogo__copiar";
  botonCopiar.textContent = "Copiar código";
  bloqueCodigo.prepend(botonCopiar);

  botonCopiar.addEventListener("click", function () {
    const codigo = bloqueCodigo.querySelector("code").textContent;

    // navigator.clipboard es la forma moderna de copiar al portapapeles.
    navigator.clipboard.writeText(codigo).then(
      function () {
        avisar(botonCopiar, "¡Copiado!");
      },
      function () {
        avisar(botonCopiar, "No se pudo copiar: selecciónalo a mano");
      }
    );
  });
});


/* Cambia el texto del botón un momento y luego lo deja como estaba. */
function avisar(boton, mensaje) {
  boton.textContent = mensaje;
  setTimeout(function () {
    boton.textContent = "Copiar código";
  }, 2000);
}


/* Quita la sangría que sobra (la del archivo componentes.html), las líneas
   vacías del principio y del final, y escribe los atributos sin valor como
   se suelen escribir (disabled en vez de disabled=""). */
function limpiarHtml(html) {
  const lineas = html.split("\n");

  // Quitamos líneas vacías al principio y al final.
  while (lineas.length && lineas[0].trim() === "") {
    lineas.shift();
  }
  while (lineas.length && lineas[lineas.length - 1].trim() === "") {
    lineas.pop();
  }

  // Buscamos la sangría más pequeña de las líneas con texto...
  let sangriaMinima = Infinity;
  lineas.forEach(function (linea) {
    if (linea.trim() !== "") {
      const sangria = linea.length - linea.trimStart().length;
      sangriaMinima = Math.min(sangriaMinima, sangria);
    }
  });

  // ...y se la quitamos a todas.
  const sinSangria = lineas.map(function (linea) {
    return linea.slice(sangriaMinima);
  });

  return sinSangria
    .join("\n")
    .replace(/ (hidden|disabled|required|checked|novalidate)=""/g, " $1");
}

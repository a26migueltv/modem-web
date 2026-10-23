/* ==========================================================================
   MODAL-DEMO.JS — modal "Descargar demo"
   --------------------------------------------------------------------------
   Sirve para CUALQUIER página. Para usarlo:
     1. Enlaza este script en el <head> de tu página:
          <script src="js/modal-demo.js" defer></script>
     2. Pon el atributo data-demo en el botón, con el nombre del juego:
          <button class="boton boton--secundario" type="button"
                  data-demo="Beast Acquirer Savage"
                  data-plataformas="PC, Xbox Series X, PS5">
            Descargar demo
          </button>
        - data-plataformas (opcional): plataformas separadas por comas.
          Si no lo pones, solo sale "PC".
        - data-tamano (opcional): tamaño de la descarga en MB (ej: "1850").
          Si no lo pones, no se enseña el tamaño.
   ¡Y ya está! No hace falta escribir el HTML del modal: lo crea este script.

   Cómo funciona:
     Paso 1 · Elegir plataforma → botón "Descargar".
     Paso 2 · Descargando: la barra se llena sola en 3 segundos.
              "Cancelar" para la descarga y vuelve al paso 1.
     Paso 3 · Completada: se descarga "demo-<nombre-del-juego>.txt".
   Se cierra con la X, con "Cerrar", con la tecla Escape o pulsando fuera.

   Usamos la etiqueta <dialog> de HTML. Con dialog.showModal():
     - se pone encima de todo con el velo oscuro (::backdrop en el CSS),
     - el foco del teclado no puede salir del modal,
     - la tecla Escape lo cierra sola.
   ========================================================================== */


/* --------------------------------------------------------------------------
   AJUSTES
   -------------------------------------------------------------------------- */

const DURACION_DESCARGA = 3000; // milisegundos que tarda en llenarse la barra (3 s).
                                // La barra avanza un 1 % cada 3000 / 100 = 30 ms.


/* --------------------------------------------------------------------------
   VARIABLES QUE GUARDAN EL ESTADO DEL MODAL
   -------------------------------------------------------------------------- */

let modal = null;           // el <dialog>; se crea la primera vez que se abre
let botonQueAbrio = null;   // para devolverle el foco al cerrar
let juego = "";             // nombre del juego (de data-demo)
let tamano = null;          // tamaño en MB (de data-tamano) o null
let intervalo = null;       // el temporizador de la descarga
let progreso = 0;           // porcentaje de la descarga (0 a 100)


/* --------------------------------------------------------------------------
   1. ESCUCHAR LOS CLICS EN CUALQUIER BOTÓN CON data-demo
   --------------------------------------------------------------------------
   En vez de buscar todos los botones uno a uno, escuchamos los clics en
   todo el documento y miramos si se ha pulsado un elemento con data-demo
   (o algo dentro de él). Así funciona con cualquier botón de cualquier página.
   -------------------------------------------------------------------------- */

document.addEventListener("click", function (evento) {
  const boton = evento.target.closest("[data-demo]");
  if (boton) {
    abrirModal(boton);
  }
});


/* --------------------------------------------------------------------------
   2. ABRIR EL MODAL
   -------------------------------------------------------------------------- */

function abrirModal(boton) {
  // Creamos el modal solo la primera vez.
  if (!modal) {
    crearModal();
  }

  botonQueAbrio = boton;

  // Leemos los datos del botón.
  juego = boton.dataset.demo;
  tamano = boton.dataset.tamano ? Number(boton.dataset.tamano) : null;
  const plataformas = (boton.dataset.plataformas || "PC")
    .split(",")
    .map(function (plataforma) {
      return plataforma.trim();
    });

  // Rellenamos los textos del paso 1.
  modal.querySelector("[data-texto='juego']").textContent = juego + " · Demo";
  // Si el botón no trae data-tamano, las líneas de los megas no se enseñan.
  const textoTamano = modal.querySelector("[data-texto='tamano']");
  textoTamano.textContent = "Tamaño de la descarga: " + tamano + " MB";
  textoTamano.hidden = !tamano;
  modal.querySelector("[data-texto='megas']").hidden = !tamano;

  // Creamos una opción (radio) por cada plataforma. La primera, marcada.
  const lista = modal.querySelector(".modal__lista-opciones");
  lista.innerHTML = "";
  plataformas.forEach(function (plataforma, posicion) {
    const opcion = document.createElement("label");
    opcion.className = "opcion-plataforma";

    const radio = document.createElement("input");
    radio.className = "opcion-plataforma__radio";
    radio.type = "radio";
    radio.name = "plataforma";
    radio.value = plataforma;
    radio.checked = posicion === 0;

    opcion.append(radio, plataforma);
    lista.append(opcion);
  });

  mostrarPaso(1);
  modal.showModal();

  // Ponemos el foco en la plataforma elegida.
  modal.querySelector(".opcion-plataforma__radio:checked").focus();
}


/* --------------------------------------------------------------------------
   3. CREAR EL HTML DEL MODAL (solo una vez)
   --------------------------------------------------------------------------
   Los 3 pasos están dentro del mismo <dialog>; enseñamos uno y ocultamos
   los otros con el atributo hidden.
   -------------------------------------------------------------------------- */

function crearModal() {
  modal = document.createElement("dialog");
  modal.className = "modal";

  modal.innerHTML = `
    <!-- PASO 1: elegir plataforma -->
    <form class="modal__paso" data-paso="1">
      <div class="modal__cabecera">
        <h2 class="titulo-h3" id="modal-titulo-1">Descargar demo</h2>
        <button class="modal__cerrar" type="button" data-cerrar aria-label="Cerrar">
          <span class="icono icono--20 icono--cerrar" aria-hidden="true"></span>
        </button>
      </div>
      <p data-texto="juego"></p>
      <fieldset class="modal__opciones">
        <legend>Elige tu plataforma</legend>
        <div class="modal__lista-opciones"></div>
      </fieldset>
      <p class="modal__nota" data-texto="tamano"></p>
      <div class="modal__acciones">
        <button class="boton" type="submit">Descargar</button>
      </div>
    </form>

    <!-- PASO 2: descargando -->
    <div class="modal__paso" data-paso="2" hidden>
      <div class="modal__cabecera">
        <h2 class="titulo-h3" id="modal-titulo-2">Descargando</h2>
        <button class="modal__cerrar" type="button" data-cerrar aria-label="Cerrar">
          <span class="icono icono--20 icono--cerrar" aria-hidden="true"></span>
        </button>
      </div>
      <p data-texto="plataforma"></p>
      <div class="modal__progreso">
        <div class="barra-progreso" role="progressbar" aria-labelledby="modal-titulo-2"
             aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
          <div class="barra-progreso__relleno"></div>
        </div>
        <div class="modal__datos-progreso">
          <span class="modal__porcentaje" data-texto="porcentaje">0 %</span>
          <span class="modal__nota" data-texto="megas"></span>
        </div>
      </div>
      <div class="modal__acciones">
        <button class="boton boton--secundario" type="button" data-cancelar>Cancelar</button>
      </div>
    </div>

    <!-- PASO 3: completada -->
    <div class="modal__paso" data-paso="3" hidden>
      <div class="modal__cabecera">
        <h2 class="titulo-h3" id="modal-titulo-3">Completada</h2>
        <button class="modal__cerrar" type="button" data-cerrar aria-label="Cerrar">
          <span class="icono icono--20 icono--cerrar" aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal__mensaje">
        <span class="modal__icono-ok" aria-hidden="true">
          <span class="icono icono--20 icono--check"></span>
        </span>
        <p data-texto="completada"></p>
      </div>
      <div class="barra-progreso" aria-hidden="true">
        <div class="barra-progreso__relleno" style="width: 100%"></div>
      </div>
      <div class="modal__acciones">
        <button class="boton" type="button" data-cerrar>Cerrar</button>
      </div>
    </div>
  `;

  document.body.append(modal);

  // Paso 1: al enviar el formulario (botón "Descargar" o tecla Enter)
  // empezamos la descarga. preventDefault() evita que se recargue la página.
  modal.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault();
    empezarDescarga();
  });

  // Botón "Cancelar" del paso 2.
  modal.querySelector("[data-cancelar]").addEventListener("click", function () {
    pararDescarga();
    mostrarPaso(1);
    modal.querySelector(".opcion-plataforma__radio:checked").focus();
  });

  // Las tres X y el botón "Cerrar" tienen data-cerrar.
  modal.querySelectorAll("[data-cerrar]").forEach(function (boton) {
    boton.addEventListener("click", cerrarModal);
  });

  // Clic FUERA del modal (en el velo): el clic llega al propio <dialog>.
  // Miramos si el punto pulsado está fuera de su rectángulo.
  modal.addEventListener("click", function (evento) {
    const caja = modal.getBoundingClientRect();
    const fuera =
      evento.clientX < caja.left ||
      evento.clientX > caja.right ||
      evento.clientY < caja.top ||
      evento.clientY > caja.bottom;
    if (evento.target === modal && fuera) {
      cerrarModal();
    }
  });

  // El evento "close" salta SIEMPRE que se cierra (también con Escape).
  // Paramos la descarga si estaba en marcha y devolvemos el foco al botón.
  modal.addEventListener("close", function () {
    pararDescarga();
    if (botonQueAbrio) {
      botonQueAbrio.focus();
    }
  });
}


/* --------------------------------------------------------------------------
   4. CAMBIAR DE PASO
   -------------------------------------------------------------------------- */

function mostrarPaso(numero) {
  modal.querySelectorAll(".modal__paso").forEach(function (paso) {
    paso.hidden = paso.dataset.paso !== String(numero);
  });

  // El título del paso visible es el "nombre" del modal para los
  // lectores de pantalla.
  modal.setAttribute("aria-labelledby", "modal-titulo-" + numero);
}


/* --------------------------------------------------------------------------
   5. LA DESCARGA (barra de progreso)
   -------------------------------------------------------------------------- */

function empezarDescarga() {
  const plataforma = modal.querySelector(".opcion-plataforma__radio:checked").value;

  modal.querySelector("[data-texto='plataforma']").textContent =
    juego + " · Demo para " + plataforma;

  progreso = 0;
  actualizarBarra();
  mostrarPaso(2);
  modal.querySelector("[data-cancelar]").focus();

  // setInterval ejecuta la función una y otra vez cada 30 ms.
  intervalo = setInterval(function () {
    progreso = progreso + 1;
    actualizarBarra();

    if (progreso >= 100) {
      pararDescarga();
      terminarDescarga(plataforma);
    }
  }, DURACION_DESCARGA / 100);
}

// Pinta el porcentaje en la barra y en los textos.
function actualizarBarra() {
  const barra = modal.querySelector("[data-paso='2'] .barra-progreso");
  barra.querySelector(".barra-progreso__relleno").style.width = progreso + "%";
  barra.setAttribute("aria-valuenow", progreso);

  modal.querySelector("[data-texto='porcentaje']").textContent = progreso + " %";

  if (tamano) {
    modal.querySelector("[data-texto='megas']").textContent =
      Math.round((tamano * progreso) / 100) + " MB de " + tamano + " MB";
  }
}

// Para el temporizador (si estaba en marcha).
function pararDescarga() {
  clearInterval(intervalo);
  intervalo = null;
}

function terminarDescarga(plataforma) {
  modal.querySelector("[data-texto='completada']").textContent =
    "La demo de " + juego + " se ha descargado correctamente.";
  mostrarPaso(3);
  modal.querySelector("[data-paso='3'] .boton").focus();

  descargarArchivo(plataforma);
}


/* --------------------------------------------------------------------------
   6. DESCARGAR EL ARCHIVO .txt
   --------------------------------------------------------------------------
   Creamos el archivo en memoria (un "Blob"), le damos una dirección
   temporal y pulsamos por código un enlace con el atributo download.
   -------------------------------------------------------------------------- */

function descargarArchivo(plataforma) {
  const contenido =
    "modem · Estudio de videojuegos independiente\n" +
    "\n" +
    "Juego: " + juego + "\n" +
    "Plataforma: " + plataforma + "\n" +
    "\n" +
    "Esto es una demo de ejemplo.\n" +
    "¡Gracias por probar nuestros juegos!\n";

  const archivo = new Blob([contenido], { type: "text/plain;charset=utf-8" });
  const direccion = URL.createObjectURL(archivo);

  const enlace = document.createElement("a");
  enlace.href = direccion;
  enlace.download = "demo-" + convertirEnNombreDeArchivo(juego) + ".txt";
  document.body.append(enlace);
  enlace.click();
  enlace.remove();

  // Liberamos la dirección temporal cuando ya no hace falta.
  setTimeout(function () {
    URL.revokeObjectURL(direccion);
  }, 1000);
}

// "Beast Acquirer Savage" → "beast-acquirer-savage"
function convertirEnNombreDeArchivo(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")                  // separa las tildes de las letras...
    .replace(/[̀-ͯ]/g, "")   // ...y las quita (á → a)
    .replace(/[^a-z0-9]+/g, "-")       // todo lo que no sea letra o número → "-"
    .replace(/^-+|-+$/g, "");          // sin "-" al principio ni al final
}


/* --------------------------------------------------------------------------
   7. CERRAR EL MODAL
   -------------------------------------------------------------------------- */

function cerrarModal() {
  modal.close(); // esto lanza el evento "close" (ver crearModal)
}

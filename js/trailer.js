/* ==========================================================================
   TRAILER.JS — reproductor y "Más vídeos" de trailer.html
   --------------------------------------------------------------------------
   1. Al pulsar play: la portada se cambia por el vídeo de YouTube, que
      empieza solo (autoplay). Si el vídeo no tiene ID, sale el aviso
      "Vídeo no disponible".
   2. Al pulsar un vídeo de "Más vídeos": ese vídeo pasa al reproductor
      (portada, título, descripción y vídeo) y el que estaba arriba pasa a
      ocupar su sitio en la fila.
   ========================================================================== */


/* --------------------------------------------------------------------------
   IDS DE YOUTUBE
   --------------------------------------------------------------------------
   El ID es lo que va después de "v=" en la dirección del vídeo:
     https://www.youtube.com/watch?v=a_wNFT4j6qI  →  "a_wNFT4j6qI"
   Si un vídeo no tiene ID (""), al darle a play sale "Vídeo no disponible".
   -------------------------------------------------------------------------- */

const IDS_YOUTUBE = {
  // "Monster Hunter Wilds - Launch Trailer", del canal oficial "Monster Hunter".
  "trailer": "a_wNFT4j6qI",
  // TODO (grupo): no hay vídeo oficial del Khezu en el canal "Monster Hunter"
  // (solo vídeos de fans). Buscado el 22/10/2026. Si sale, poned su ID.
  "nueva-bestia": "",
  // TODO (grupo): el vídeo de la nueva dificultad (Arkveld Archtemperado) solo
  // está resubido por IGN y GameTrailers, no en el canal oficial. Buscado el
  // 22/10/2026. Decidid si usáis una de esas resubidas o lo dejáis vacío.
  "nueva-dificultad": "",
  // TODO (grupo): no hay vídeo oficial de la actualización 1.042 (solo vídeos
  // de fans). Buscado el 22/10/2026. Si sale, poned su ID.
  "actualizacion": "",
};


/* --------------------------------------------------------------------------
   DATOS DE CADA VÍDEO
   --------------------------------------------------------------------------
   La clave ("trailer", "nueva-bestia"...) es la misma que la de
   IDS_YOUTUBE y que el data-video de las miniaturas del HTML.
   -------------------------------------------------------------------------- */

const VIDEOS = {
  "trailer": {
    titulo: "¡Echa un vistazo a la acción de Beast Acquirer Savage!",
    descripcion: "Beast Acquirer Savage es la última entrega hasta la fecha de la saga Beast Acquirer. Nuestro equipo está dándolo todo para traeros el mejor juego de bestias hasta la fecha.",
    portada: "img/juegos/beast-acquirer-savage.jpg",
    duracion: "[0:00]",
  },
  "nueva-bestia": {
    titulo: "¡NUEVA BESTIA! ¡Enfrentaos a Kezu!",
    descripcion: "[Descripción del vídeo]",
    portada: "img/juegos/beast-video-1.jpg",
    duracion: "[2:12]",
  },
  "nueva-dificultad": {
    titulo: "¡Nueva dificultad! Adquirid monstruos aún más peligrosos",
    descripcion: "[Descripción del vídeo]",
    portada: "img/juegos/beast-video-2.jpg",
    duracion: "[4:51]",
  },
  "actualizacion": {
    titulo: "Resumen de la actualización (Ver.1.042.00.01 / Demo Version 1.0.1)",
    descripcion: "[Descripción del vídeo]",
    portada: "img/juegos/beast-video-3.jpg",
    duracion: "[3:05]",
  },
};


/* --------------------------------------------------------------------------
   ELEMENTOS DE LA PÁGINA
   -------------------------------------------------------------------------- */

const reproductor = document.getElementById("reproductor");
const portada = document.getElementById("video-portada");
const botonPlay = document.getElementById("video-play");
const controles = reproductor.querySelector(".reproductor__controles");
const titulo = document.getElementById("video-titulo");
const descripcion = document.getElementById("video-descripcion");
const miniaturas = document.querySelectorAll(".miniatura-video");

// El vídeo que está ahora en el reproductor.
let videoActual = "trailer";


/* --------------------------------------------------------------------------
   1. REPRODUCIR
   -------------------------------------------------------------------------- */

botonPlay.addEventListener("click", function () {
  const idYoutube = IDS_YOUTUBE[videoActual];

  // Escondemos la portada, el play y los controles.
  portada.hidden = true;
  botonPlay.hidden = true;
  controles.hidden = true;

  if (idYoutube) {
    // Creamos el <iframe> de YouTube. Usamos youtube-nocookie.com, que no
    // guarda cookies hasta que se reproduce el vídeo.
    const video = document.createElement("iframe");
    video.className = "reproductor__video";
    video.src = "https://www.youtube-nocookie.com/embed/" + idYoutube + "?autoplay=1&rel=0";
    video.title = VIDEOS[videoActual].titulo;
    video.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    video.allowFullscreen = true;
    reproductor.append(video);
    video.focus();
  } else {
    // Sin ID: enseñamos el aviso. role="status" hace que el lector de
    // pantalla lo lea en voz alta.
    const aviso = document.createElement("p");
    aviso.className = "reproductor__aviso titulo-h3";
    aviso.setAttribute("role", "status");
    aviso.textContent = "Vídeo no disponible";
    reproductor.append(aviso);
  }
});


/* --------------------------------------------------------------------------
   2. CAMBIAR DE VÍDEO ("Más vídeos")
   -------------------------------------------------------------------------- */

miniaturas.forEach(function (miniatura) {
  miniatura.addEventListener("click", function () {
    const videoNuevo = miniatura.dataset.video;
    const videoAnterior = videoActual;

    // El vídeo pulsado pasa al reproductor...
    ponerEnReproductor(videoNuevo);

    // ...y el que estaba arriba pasa a esta miniatura.
    ponerEnMiniatura(miniatura, videoAnterior);

    // Llevamos el foco al play: la página sube hasta el reproductor y el
    // usuario de teclado puede darle a Enter directamente.
    botonPlay.focus();
  });
});


// Pone un vídeo en el reproductor: portada, título y descripción.
function ponerEnReproductor(clave) {
  const datos = VIDEOS[clave];
  videoActual = clave;

  // Quitamos el vídeo o el aviso que hubiera y volvemos a la portada.
  const anterior = reproductor.querySelector(".reproductor__video, .reproductor__aviso");
  if (anterior) {
    anterior.remove();
  }
  portada.hidden = false;
  botonPlay.hidden = false;
  controles.hidden = false;

  portada.src = datos.portada;
  titulo.textContent = datos.titulo;
  descripcion.textContent = datos.descripcion;
}


// Pone un vídeo en una miniatura de "Más vídeos".
function ponerEnMiniatura(miniatura, clave) {
  const datos = VIDEOS[clave];
  miniatura.dataset.video = clave;
  miniatura.querySelector("img").src = datos.portada;
  miniatura.querySelector(".miniatura-video__titulo").textContent = datos.titulo;
  miniatura.querySelector(".miniatura-video__duracion").textContent = datos.duracion;
}

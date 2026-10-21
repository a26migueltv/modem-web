/* ==========================================================================
   CONTACTO.JS — validar el formulario de contacto
   --------------------------------------------------------------------------
   ⚠️ ESTE ARCHIVO ESTÁ SIN HACER: lo programa quien monte contacto.html.
      Aquí tienes los pasos explicados. Escribe tu código debajo de cada
      paso y borra los comentarios de "TU CÓDIGO" cuando acabes.

   QUÉ TIENE QUE PASAR al pulsar "Enviar":
     - Nombre, Email y Mensaje son obligatorios.
     - El email tiene que tener un formato válido (algo@algo.algo).
     - Si algo está mal: el campo se pone en estado de ERROR (borde rojo y
       mensaje debajo, como en la guía de estilo) y NO se envía.
     - Si todo está bien: se enseña el mensaje de "enviado" y se vacía el
       formulario. (No hay servidor: no se envía de verdad a ningún sitio.)

   QUÉ NECESITAS EN EL HTML (está explicado en contacto.html)
     <form class="formulario" id="formulario-contacto" action="#" novalidate>
       <div class="campo">
         <label class="campo__etiqueta" for="email">Email</label>
         <input class="campo__control" id="email" ... aria-describedby="email-error">
         <p class="campo__error" id="email-error" hidden></p>
       </div>
       ...
     </form>
     <p class="contacto__enviado" id="mensaje-enviado" role="status" hidden>...</p>

   EL ESTADO DE ERROR (ya está hecho en components.css)
     Para poner un campo en error hay que hacer 3 cosas:
       1. Añadir la clase campo--error al <div class="campo">
            input.closest(".campo").classList.add("campo--error");
       2. Poner aria-invalid="true" en el campo (para lectores de pantalla)
            input.setAttribute("aria-invalid", "true");
       3. Escribir el mensaje en su <p class="campo__error"> y enseñarlo
            parrafoError.textContent = "Introduce un email válido.";
            parrafoError.hidden = false;
     Para QUITAR el error, lo contrario: classList.remove("campo--error"),
     removeAttribute("aria-invalid") y parrafoError.hidden = true.
   ========================================================================== */

/* --------------------------------------------------------------------------
   PASO 1 · Buscar los elementos
   --------------------------------------------------------------------------
   Guarda en constantes (con document.getElementById):
     - el formulario          → "formulario-contacto"
     - los 3 campos           → "nombre", "email", "mensaje"
     - el mensaje de enviado  → "mensaje-enviado"
   -------------------------------------------------------------------------- */

//PASO 1

const formulario = document.getElementById('formulario-contacto');
const nome = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaxe = document.getElementById('mensaje');
const enviado = document.getElementById('mensaje-enviado');

/* --------------------------------------------------------------------------
   PASO 2 · Dos funciones de ayuda: poner y quitar el error
   --------------------------------------------------------------------------
   Así no repites el mismo código tres veces.

     function mostrarError(campo, texto) {
       // 1. clase campo--error en campo.closest(".campo")
       // 2. aria-invalid="true" en el campo
       // 3. el <p> del error es: document.getElementById(campo.id + "-error")
       //    → escribe el texto y quítale hidden
     }

     function quitarError(campo) {
       // lo contrario de mostrarError
     }
   -------------------------------------------------------------------------- */

//PASO 2

function mostrarError(campo, texto) {
  campo.closest(".campo").classList.add("campo--error");
  campo.setAttribute("aria-invalid", "true");
  const parrafoError = document.getElementById(campo.id + "-error");
  parrafoError.textContent = texto;
  parrafoError.hidden = false;
}

function quitarError(campo) {
  campo.closest(".campo").classList.remove("campo--error");
  campo.setAttribute("aria-invalid", "false");
  const parrafoError = document.getElementById(campo.id + "-error");
  parrafoError.hidden = true;
}

/* --------------------------------------------------------------------------
   PASO 3 · Una función que diga si un email es válido
   --------------------------------------------------------------------------
   Usa esta expresión regular (comprueba que hay texto, una @, texto, un
   punto y más texto, sin espacios):

     function esEmailValido(email) {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     }
   -------------------------------------------------------------------------- */

//PASO 3
function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
/* --------------------------------------------------------------------------
   PASO 4 · Validar al enviar
   --------------------------------------------------------------------------
     formulario.addEventListener("submit", function (evento) {
       evento.preventDefault();   // ← que NO se recargue la página

       // a) Esconde el mensaje de "enviado" (por si se ve de antes).

       // b) Crea una variable  let hayErrores = false;

       // c) NOMBRE: si nombre.value.trim() está vacío ("")
       //      → mostrarError(nombre, "Escribe tu nombre.") y hayErrores = true
       //    si no → quitarError(nombre)
       //    (.trim() quita los espacios: así "   " cuenta como vacío)

       // d) EMAIL: si está vacío → "Escribe tu email."
       //    si no es válido (esEmailValido) → "Introduce un email válido."  (texto de Figma)
       //    si está bien → quitarError(email)

       // e) MENSAJE: si está vacío → "El mensaje no puede estar vacío."  (texto de Figma)
       //    si no → quitarError(mensaje)

       // f) Si hayErrores:
       //      pon el foco en el PRIMER campo con error, para que el usuario
       //      de teclado vaya directo a corregirlo:
       //        formulario.querySelector("[aria-invalid='true']").focus();
       //    Si NO hay errores:
       //      enseña el mensaje de enviado (hidden = false)
       //      y vacía el formulario con formulario.reset();
     });
   -------------------------------------------------------------------------- */

//PASO 4
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  // Escondemos el mensaje de "enviado" por si se ve de un envío anterior
  enviado.hidden = true;
  let hayErrores = false;
  if (nome.value.trim() === '') {
    mostrarError(nome, "El nombre no puede estar vacío.");
    hayErrores = true;
  } else {
    quitarError(nome);
  }

  if (email.value.trim() === '') {
    mostrarError(email, "El email no puede estar vacío.");
    hayErrores = true;
  } else if (!esEmailValido(email.value)) {
    mostrarError(email, "Introduce un email válido.");
    hayErrores = true;
  } else {
    quitarError(email);
  }

  if (mensaxe.value.trim() === '') {
    mostrarError(mensaxe, "El mensaje no puede estar vacío.");
    hayErrores = true;
  } else {
    quitarError(mensaxe);
  }

  if (hayErrores) {
    formulario.querySelector("[aria-invalid='true']").focus();
  } else {
    document.getElementById("mensaje-enviado").hidden = false;
    formulario.reset();
  }
});
/* --------------------------------------------------------------------------
   PASO 5 (opcional, queda muy bien) · Quitar el error mientras se escribe
   --------------------------------------------------------------------------
   A cada campo ponle un addEventListener("input", ...) que, si el campo
   tenía error y ya no está vacío, llame a quitarError(campo).
   -------------------------------------------------------------------------- */

// TU CÓDIGO DEL PASO 5

/* --------------------------------------------------------------------------
   PARA PROBARLO
     1. Pulsa "Enviar" con todo vacío: los 3 campos en rojo con su mensaje
        y el cursor en "Nombre".
     2. Escribe un email sin @: "Introduce un email válido."
     3. Rellénalo todo bien: sale el mensaje de enviado y se vacía.
     4. Prueba todo SOLO con el teclado (Tab, Enter).
     5. Mira la consola (F12 → Consola): ningún error rojo.
   -------------------------------------------------------------------------- */

/* ==========================================================================
   CONTACTO.JS — validar el formulario de contacto
   --------------------------------------------------------------------------
   Al pulsar "Enviar":
     - Nombre, Email y Mensaje son obligatorios y el email tiene que tener
       un formato válido (algo@algo.algo).
     - Si algo está mal, el campo se pone en estado de error (clase
       campo--error, aria-invalid y mensaje debajo) y no se envía.
     - Si todo está bien, sale el mensaje de "enviado" y se vacía el
       formulario. (No hay servidor: no se envía de verdad a ningún sitio.)
   ========================================================================== */

// Elementos del formulario
const formulario = document.getElementById('formulario-contacto');
const nome = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaxe = document.getElementById('mensaje');
const enviado = document.getElementById('mensaje-enviado');

// Pone un campo en estado de error con su mensaje.
function mostrarError(campo, texto) {
  campo.closest(".campo").classList.add("campo--error");
  campo.setAttribute("aria-invalid", "true");
  const parrafoError = document.getElementById(campo.id + "-error");
  parrafoError.textContent = texto;
  parrafoError.hidden = false;
}

// Quita el estado de error de un campo.
function quitarError(campo) {
  campo.closest(".campo").classList.remove("campo--error");
  campo.setAttribute("aria-invalid", "false");
  const parrafoError = document.getElementById(campo.id + "-error");
  parrafoError.hidden = true;
}

// ¿Tiene el email texto, una @, texto, un punto y más texto, sin espacios?
function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validamos al enviar
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // que no se recargue la página
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

  // Con errores, el foco va al primer campo mal para corregirlo.
  if (hayErrores) {
    formulario.querySelector("[aria-invalid='true']").focus();
  } else {
    document.getElementById("mensaje-enviado").hidden = false;
    formulario.reset();
  }
});

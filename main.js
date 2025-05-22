/**
 * Reproduce el sonido del elemento de audio especificado.
 * @param {string} idElementoAudio - Selector CSS del elemento <audio>.
 */
function playSonido(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
  if (elemento && elemento.tagName === "AUDIO") {
    elemento.play();
  }
}

/** @type {NodeListOf<HTMLButtonElement>} Lista de botones con clase 'tecla' */
const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas.forEach((tecla) => {
  // Extrae el nombre del instrumento desde la segunda clase del botón
  const instrumento = tecla.classList[1];
  const idAudio = `#sonido_${instrumento}`;

  /**
   * Evento click: Reproduce el sonido correspondiente al botón
   */
  tecla.onclick = function () {
    playSonido(idAudio);
  };

  /**
   * Evento keydown: Añade clase 'activa' si se presiona Espacio o Enter
   * @param {KeyboardEvent} evento
   */
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("activa");
    }
  };

  /**
   * Evento keyup: Quita la clase 'activa' al soltar la tecla
   */
  tecla.onkeyup = function () {
    tecla.classList.remove("activa");
  };
});

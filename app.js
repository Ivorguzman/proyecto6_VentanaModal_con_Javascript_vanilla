// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const botonModal = document.querySelector(".boton-modal");
const modal = document.querySelector(".covertura-modal");
const cerrarBoton = document.querySelector(".cerrar-btn");

botonModal.addEventListener("click", function () {
  modal.classList.add("abrir-modal");
});
cerrarBoton.addEventListener("click", function () {
  modal.classList.remove("abrir-modal");
});

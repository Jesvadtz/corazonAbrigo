const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(event) {
  event.preventDefault();
  inputNombre = document.getElementById("inputNombre");
  inputDireccion = document.getElementById("inputDireccion");
  inputEmail = document.getElementById("inputEmail");
  inputTelefono = document.getElementById("inputTelefono");

  confirmacionBody = document.getElementById("confirmacionBody");
  confirmacionBody.innerHTML =
    "¡Gracias, " +
    inputNombre.value +
    "! <br /> Recibirás los detalles de la recolección en tu e-mail";
  $("#confirmacion").modal();
  inputNombre.value = "";
  inputDireccion.value = "";
  inputEmail.value = "";
  inputTelefono.value = "";
}

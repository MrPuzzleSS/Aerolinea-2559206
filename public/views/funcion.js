function validarFechas() {
  // Obtén las fechas de partida y regreso del formulario
  var fechaPartida = new Date(document.getElementById("fecha-partida").value);
  var fechaRegreso = new Date(document.getElementById("fecha-regreso").value);

  var fechaHoy = new Date();

  document.getElementById("error-msg").innerHTML = "";


  if (fechaPartida < fechaHoy && fechaRegreso < fechaHoy) {
    event.preventDefault()
    document.getElementById("error-msg").innerHTML = "Las fechas seleccionadas son anteriores a la fecha actual.";
    return;
  }

  if (fechaPartida > fechaRegreso) {
    event.preventDefault()
    document.getElementById("error-msg").innerHTML = "La fecha de partida no puede ser posterior a la fecha de regreso.";
    return;
  }
}

const boton = document.querySelector('#ingresar');
boton.addEventListener('click',validarFechas)

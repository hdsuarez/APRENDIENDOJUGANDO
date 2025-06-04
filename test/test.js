function revisarRespuestas() {
  const respuestasCorrectas = [
    4, 8, 25,       // sumas
    0, 2, 5,        // restas
    4, 18, 150,     // multiplicaciones
    1, 2, 3,        // divisiones
    2, 120, 3628800 // factoriales
  ];

  const formulario = document.getElementById("formulario");
  let aciertos = 0;

  for (let i = 0; i < respuestasCorrectas.length; i++) {
    const input = formulario.elements[`resp${i + 1}`];
    let valorIngresado = input.value.trim();

    let valorNumerico = parseFloat(valorIngresado);
    if (isNaN(valorNumerico)) continue;

    if (valorNumerico === respuestasCorrectas[i]) {
      aciertos++;
    }
  }

  // Mostrar resultado final
  document.getElementById("resultadoFinal").textContent =
    `Respuestas correctas: ${aciertos} de ${respuestasCorrectas.length}`;

  // Calcular porcentaje
  const total = respuestasCorrectas.length;
  const porcentaje = Math.round((aciertos / total) * 100);

  // Actualizar barra de progreso
  const barra = document.getElementById("barraProgreso");
  barra.style.width = porcentaje + "%";
  barra.textContent = porcentaje + "%";

  // Cambiar color
  if (porcentaje < 50) {
    barra.style.backgroundColor = "#f44336"; // rojo
  } else if (porcentaje < 80) {
    barra.style.backgroundColor = "#ffc107"; // amarillo
  } else {
    barra.style.backgroundColor = "#4caf50"; // verde
  }

  //  GIF animado 
  const imagen = document.getElementById("imagenAnimada");
  
  if (porcentaje < 50) {
    imagen.src = "../imagenes/ha-ha-nelson.gif"; 
    imagen.style.display = "inline-block";

  } else if (porcentaje < 80) {
    imagen.src = "../imagenes/goodjob.gif"; 
    imagen.style.display = "inline-block";

  } else {
    imagen.src = "../imagenes/lisa.gif"; 
    imagen.style.display = "inline-block";
  }
}


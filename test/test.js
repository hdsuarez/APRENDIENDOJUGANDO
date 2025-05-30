  function revisarRespuestas() {
  const respuestasCorrectas = [
    4, 8, 25,       // sumas
    0, 2, 5,        // restas
    4, 18, 150,     // multiplicaciones
    1, 2, 3,        // divisiones
    2, 120, 3628800 // factoriales
  ];

  // link con el id
  const formulario = document.getElementById("formulario");
  let aciertos = 0;

  for (let i = 0; i < respuestasCorrectas.length; i++) {
    const input = formulario.elements[`resp${i + 1}`];
    let valorIngresado = input.value.trim();

    // Convertimos a número
    let valorNumerico = parseFloat(valorIngresado);

    // Verificamos si es número válido
    if (isNaN(valorNumerico)) continue;

    // Comparamos con las respuestas correctas
    if (valorNumerico === respuestasCorrectas[i]) {
      aciertos++;
    }
  }

  // Mostramos los resultados
  document.getElementById("resultadoFinal").textContent =
    `Respuestas correctas: ${aciertos} de ${respuestasCorrectas.length}`;
}



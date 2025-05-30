function dividir() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultadoElement = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultadoElement.textContent = "Por favor ingresa dos números válidos.";
    return;
  }

  if (num2 === 0) {
    resultadoElement.textContent = "No se puede dividir entre cero.";
    return;
  }

  const resultado = num1 / num2;
  resultadoElement.textContent = `El resultado de la división es: ${resultado}`;
}

// cambio de idioma
  function cambioLenguaje(numero){
  const parrafo = document.getElementById('parrafo')
  let mensaje = 'pagina principal'

  switch(numero){
    case 1:
      mensaje = 'pagina principal'
    break;
    case 2: 
      mensaje = 'main page'
    break;
  }

  parrafo.innerHTML = mensaje

}
// Lista de traducciones
const traducciones = [
  "Página Principal",     // Español
  "Home",                 // Inglés
  "Page d'accueil",       // Francés
];

// Cambio dee idima
const boton = document.getElementById("boton-idioma");

// control
let indice = 0;

// Función para cambiar el texto 
setInterval(() => {
  indice = (indice + 1) % traducciones.length; // Cuando llegue al final, vuelve al inicio
  boton.textContent = traducciones[indice];
}, 1000); // 1000 milisegundos = 1 segundos

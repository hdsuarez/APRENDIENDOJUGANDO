   setInterval(cambioLenguaje, 2000)

   function calcularFactorial() {
      let numero = parseInt(document.getElementById("numero").value);
      let resultado = 1;

      if (numero < 0) {
        document.getElementById("resultado").innerText = "El factorial no está definido para números negativos.";
        return;
      }

      for (let i = 1; i <= numero; i++) {
        resultado *= i; // resultado = resultado * i
      }

      document.getElementById("resultado").innerText = `El factorial de ${numero} es ${resultado}`;
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
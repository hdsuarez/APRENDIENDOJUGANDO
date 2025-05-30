function mostrarOperacion(operacion) {
  alert("Seleccionaste la operación: " + operacion);
}

function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Cerrar menú al hacer clic fuera
window.addEventListener("click", function(e) {
  const menu = document.getElementById("dropdownMenu");
  const pic = document.querySelector(".profile-pic");
  if (!pic.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Muestra el progreso desde localStorage
function cargarProgreso() {
  let progreso = localStorage.getItem("progresoCurso");
  if (!progreso) {
    progreso = 0; // Valor inicial
    localStorage.setItem("progresoCurso", progreso);
  }
  actualizarBarraProgreso(progreso);
}

// Vista de barra
function actualizarBarraProgreso(valor) {
  const barra = document.getElementById("progressBar");
  barra.style.width = valor + "%";
}

// Barra de progreso
function mostrarOperacion(operacion) {
  alert("Seleccionaste la operación: " + operacion);
  let progreso = parseInt(localStorage.getItem("progresoCurso")) || 0;
  if (progreso < 100) {
    progreso += 20; // suma 20% por cada módulo accedido
    if (progreso > 100) progreso = 100;
    localStorage.setItem("progresoCurso", progreso);
    actualizarBarraProgreso(progreso);
  }
}

// Cargar progreso al iniciar la página
window.onload = cargarProgreso;

// Menú desplegable
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const pic = document.querySelector(".profile-pic");
  if (!pic.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

function actualizarBarraProgreso(valor) {
  const barra = document.getElementById("progressBar");
  const texto = document.getElementById("progressText");
  barra.style.width = valor + "%";
  texto.textContent = valor + "% completado";
}

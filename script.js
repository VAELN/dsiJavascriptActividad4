const body = document.body;
const constBotonModo = document.getElementById("BotonModo");

constBotonModo.addEventListener("click", () => {body.classList.toggle("dark-mode");

const isDarkMode = body.classList.contains("dark-mode");
  

if (isDarkMode) {constBotonModo.textContent = "🌭";} else {constBotonModo.textContent = "🍔";}});

function toggleDarkMode() {
    const body = document.body;
    const image = document.getElementById('modoImagen');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        image.src = 'imagen-modo-oscuro.jpg';
    } else {
        image.src = 'imagen-modo-claro.jpg';
    }
}
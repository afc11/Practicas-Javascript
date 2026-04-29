
const titulo = document.getElementById("titulo")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    titulo.textContent = "Texto cambiado"
})




const texto = document.getElementById("texto")
const BTN = document.getElementById("btnToggle")

BTN.addEventListener("click", () => {
    texto.classList.toggle("activo")
})
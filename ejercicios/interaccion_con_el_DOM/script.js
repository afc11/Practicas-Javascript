
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




const input = document.getElementById("input")
const btnAgregar = document.getElementById("btnAgregar")
const lista = document.getElementById("lista")

btnAgregar.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = input.value
    lista.appendChild(li)
    input.value = ""
 })
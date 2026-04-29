
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

li.addEventListener ("click", () => {
lista.removeChild(li)
})

    lista.appendChild(li)
    input.value = ""
 })




 const contador = document.getElementById("contador")
 const sumar = document.getElementById("sumar")
 const restar = document.getElementById("restar")

 sumar.addEventListener("click", () => {
    contador.textContent = parseInt(contador.textContent) + 1
 })

 restar.addEventListener("click", () => {
    contador.textContent = parseInt(contador.textContent) - 1
 })




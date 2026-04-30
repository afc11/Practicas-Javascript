
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




 const inputPreview = document.getElementById("inputPreview")
 const preview = document.getElementById("preview")

 inputPreview.addEventListener("input", () => {
    preview.textContent = inputPreview.value
 })




const inputlista = document.getElementById("inputlista")
const btnTodo = document.getElementById("btnTodo")
const listaTodo = document.getElementById("listaTodo")

btnTodo.addEventListener("click", () => {
    const li = document.createElement("li")

    const span = document.createElement("SPAN")
    span.textContent = inputlista.value

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "❌"

    li.appendChild(span)
    li.appendChild(btnEliminar)
    listaTodo.appendChild(li)
    inputlista.value = ""

})




listaTodo.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
        listaTodo.removeChild(e.target.parentElement)
    } else if (e.target.tagName === "SPAN") {
        e.target.classList.toggle("completada")
    }
})
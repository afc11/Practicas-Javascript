
const numero = [1,2,3,4,5,6,7,8,9,10]
let suma = 0

for (let i = 0; i < numero.length; i++) {
suma = suma + numero[i]
}

console.log("La longitud del array es: " + numero.length)
console.log("Suma total: " + suma)




let contador = 10

while (contador >= 1) {
    console.log(contador)
    contador = contador -1
}




const num = [4,17,3,25,8,11]
let mayor = num [0]

for (let i = 1;i < num.length; i++) {
    if (num[i] > mayor){
        mayor = num[i]
    }
}

console.log("El número mayor es: " + mayor)




const palabras = ["sol", "montaña", "mar", "elefante", "río", "cascada"]
const palabrasLargas = []

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 5) {
        palabrasLargas.push(palabras[i])
    }
}

console.log(palabrasLargas)




const numer = 5
let multiplicador = 1

with (multiplicador <= 10) {
    const resultado = numer * multiplicador
    console.log(numer + " x " + multiplicador + " = " + resultado)
    multiplicador++
}
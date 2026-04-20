let nombre = "Alberto"

if (nombre !== "") {
    console.log("Hola " + nombre)
} else {
    console.log("Hola desconosido")
}




const numero = 7;

if (numero % 2 === 0) {
    console.log(numero + " es par")
} else {
    console.log(numero + " es impar")
}



const calificacion = 75;

if (calificacion >= 60) {
    console.log("Aprobado")
} else {
    console.log("Reprobado")
}




const dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console, log("Martes")
        break;
    case 3:
        console.log("Miércoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Domingo")
}




const edad = 20;

if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}




const temperatura = 21;

if (temperatura < 10) {
    console.log("Frío")
} else if (temperatura <= 25) {
    console.log("Templado")
} else {
    console.log("Caluroso")
}




const num = -7

if (num > 0) {
    console.log("Positivo")
} else if (num < 0) {
    console.log("Negativo")
} else {
    console.log("Cero")
}




const monto = 250

if (monto >= 200) {
    const descuento = monto * 0.20
    console.log("Descuento del 20%:" + descuento)
    console.log("Total a pagar:" + (monto - descuento))
} else if (monto >= 100) {
    const descuento = monto * 0.10
    console.log("Descuento del 10%: " + descuento)
    console.log("Total a pagar: " + (monto - descuento))
} else {
    console.log("Sin descuento. Total a pagar: " + monto)
}




const lado1 = 5
const lado2 = 5
const lado3 = 8

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero")
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}




const contraseña = "miClave123"

if (contraseña.length >= 8) {
    console.log("Válida")
} else {
    console.log("Demasiado corta")
}




const mes = 7

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Verano")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Otoño")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Invierno")
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera")
        break;
    default:
        console.log("Mes inválido")
}




const puntos = 75

if (puntos <= 50) {
    console.log("Novato")
} else if (puntos <= 100) {
    console.log("Intermedio")
} else {
    console.log("Experto")
}




const operacion = "*"
const num1 = 10
const num2 = 5

switch (operacion) {
    case "*":
        console.log(num1 + " + " + num2 + "=" + (num1 + num2))
        break;
    case "-":
        console.log(num1 + " - " + num2 + "="(num1 - num2))
        break;
    case "*":
        console.log(num1 + " * " + num2 + " = "(num1 * num2))
        break;
    case "/":
        if (num2 === 0) {
            console.log("Error: no se puede dividir por cero")
        } else {
            console.log(num1 + "/" + num2 + "=" + (num1 / num2))
        }
        break;
    default:
        console.log("Operación no válida")
}




const email = "usuario@correo.com"

if (email.includes("@") && email.includes(".")) {
    console, log("Válido")
} else {
    console.log("Inválido")
}
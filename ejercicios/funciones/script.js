// Definición de funciones acá

function saludar(nombre) {
    return "Hola, " + nombre + "!"
}




function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "/":
            return num1 / num2
        case "*":
            return num1 * num2
        default:
            return "Operador no válido"
    }
}




function areaRectangulo(base, altura) {
    return base * altura
}




const esPar = (numero) => {
    if (numero % 2 === 0) {
        return "es par"
    } else {
        return "es impar"
    }
}




const celsiusAFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32
}




const calificarNota = (nota) => {
    if (nota >= 90) {
        return "A"
    } else if (nota >= 80) {
        return "B"
    } else if (nota >= 70) {
        return "C"
    } else {
        return "F"
    }
}




const sumarArray = (numeros) => {
    let suma = 0

    for (let i = 0; i < numeros.length; i++){
        suma = suma + numeros [i]
    }

    return suma
}
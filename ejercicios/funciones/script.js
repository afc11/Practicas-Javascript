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





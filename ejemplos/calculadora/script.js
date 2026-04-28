function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function division(numero1, numero2) {
  if (numero2 == 0) {
    return null;
  }
  return numero1 / numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

/* POR HACER: funcionalidad */
const input = document.getElementById("result");
const form = document.querySelector("form");
const history = document.querySelector(".history");
const numbers = form.querySelectorAll("form > button");
const operators = form.querySelectorAll(".operadores button");

function agregarHistorial(valor) {
  const nuevo = document.createElement("li");
  nuevo.textContent = valor;
  history.appendChild(nuevo);
  return nuevo;
}

const escribirEnInput = (e) => {
  input.value += e.target.textContent;
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", escribirEnInput);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let primerNumero = null;
let segundoNumero = null;
let operador = null;
let historial_temporal = null;

const limpiar = () => {
  input.value = "";
  primerNumero = null;
  segundoNumero = null;
  historial_temporal = null;
};

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", (event) => {
    // if (primerNumero !== null) {

    if (event.target.textContent == "=") {
      operar(primerNumero, Number(input.value), operador);
    } else if (!primerNumero) {
      primerNumero = Number(input.value);
      operador = event.target.textContent;

      if (primerNumero !== "") {
        historial_temporal = agregarHistorial(
          primerNumero + " " + event.target.textContent,
        );
        input.value = "";
      }
    } else {
      segundoNumero = Number(input.value);
      operar(primerNumero, segundoNumero, operador);
    }
  });
}

const operar = (primerNumero, segundoNumero, operador) => {
  if (primerNumero !== "" && segundoNumero !== "" && operador !== null) {
    let res = null;
    switch (operador) {
      case "+":
        res = suma(primerNumero, segundoNumero);
        historial_temporal.textContent += " " + segundoNumero + " = " + res;
        limpiar();
        break;
      case "-":
        res = resta(primerNumero, segundoNumero);
        historial_temporal.textContent += " " + segundoNumero + " = " + res;
        limpiar();
        break;
      case "X":
        res = multiplicacion(primerNumero, segundoNumero);
        historial_temporal.textContent += " " + segundoNumero + " = " + res;
        limpiar();
        break;
      case "/":
        res = division(primerNumero, segundoNumero);
        historial_temporal.textContent += " " + segundoNumero + " = " + res;
        limpiar();
        break;
    }
  }
};

function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function division(numero1, numero2) {
  if (numero2 == 0) {
    return 0;
  }
  return numero1 / numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

console.log("7+5 = " + suma(5, 2));

console.log("100 - 70 = " + resta(100, 70));

const dividir = division(9, 3);
console.log("9 / 3 = " + dividir);

division(100, 0);

console.log("9/3 * 100 = " + multiplicacion(dividir, 100));

function hacerTarea(dato, funcion1) {
  console.log("empezando tarea..." + dato);

  funcion1(5, 4);

  console.log("finalizando tarea");
}

hacerTarea(1, (a, b) => {
  const res = a + b;
  console.log("haciendo tarea: " + res);
});

const nombres = ["Agustin", "Lautaro", "Sandra"];

const saludarNombres = nombres.map((nombre) => {
  if (nombre == "Agustin") return null;
  return "Hola " + nombre;
});

console.log(nombres);
console.log(saludarNombres);

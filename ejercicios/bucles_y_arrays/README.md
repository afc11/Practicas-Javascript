# Ejercicios de bucles y arrays

> [!tip]
> Hacer los ejercicios en el archivo [script.js](./script.js) o en el archivo [index.html](./index.html) y mirar el resultado en la consola del navegador

## Ejercicio 1

Recorrer los números del 1 al 10 y mostrar la suma total. Usando un bucle `for` y un acumulador sumar cada valor del acumulador con el indice del for.

```js
let suma = 0;

// agregar el bucle for

console.log("Suma total: ", suma); // Resultado esperado: 55
```

---

## Ejercicio 2

Mostrar en consola los números del 10 al 1 usando un bucle `while`. Decrementar un contador hasta que sea menor que 1, mostrando cada valor del contador.

```js
let contador = 10;

// agregar el bucle while

// Resultado esperado: 10, 9, 8, 7 ... 1
```

---

## Ejercicio 3

Dado un array de números, encontrar el número más grande.

```js
cost numeros = [4, 17, 3, 25, 8, 11];
let mayor = numeros[0]; // empezamos asumiendo que el primero es el mayor

// agregar el bucle for (usar .length para saber el largo del array)

console.log("El número mayor es: ", mayor); // Resultado esperado: 25
```

---

## Ejercicio 4

Dado un array de palabras, guardar en un nuevo array solo las que tengan más de 5 letras.

```js
const palabras = ["sol", "montaña", "mar", "elefante", "río", "cascada"];
const palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
  // Pista: usa .length en cada palabra y push() para agregar al nuevo array
}

console.log(palabrasLargas); // Resultado esperado: ["montaña", "elefante", "cascada"]
```

---

## Ejercicio 5

Dado un número, mostrar su tabla de multiplicar del 1 al 10.

```js
const numero = 7; // se puede cambiar este número
let multiplicador = 1;

while (multiplicador <= 10) {
  // Calcular el resultado e imprimirlo con formato "7 x 1 = 7"
  multiplicador++;
}

// Resultado esperado:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
```

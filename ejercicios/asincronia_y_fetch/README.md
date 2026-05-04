# Asincronía y Fetch API

> [!TIP]
> La api que se utilizará es [Pokeapi](https://pokeapi.co/).

## Ejercicio 1

Pedir datos y mostrarlos

Hacer una función que:

- Haga un `fetch` a una URL
- Convierta la respuesta a JSON
- Muestre el resultado en consola

Extra:

- Mostrar solo los primeros 3 elementos `.slice(1, 3)`

## Ejercicio 2

Pasar de consola a DOM

- Obtener una lista desde una API
- Mostrarla en el HTML como lista (`<ul>` o `<div>`)
- Cada elemento debe renderizar un campo (ej: nombre o título)

Bonus:

- Limpiar el contenedor antes de volver a renderizar

## Ejercicio 3

- Mostrar un mensaje: "Cargando..." antes del fetch
- Cuando llegan los datos:
  - ocultar el loading
  - mostrar los datos

Bonus:

- Simular delay con setTimeout para que se note el efecto. `setTimeOut(() => {}, 2000)`

## Ejercicio 4

Trabajar con fallos reales

- Hacer un fetch a una URL inválida o forzar error
- Manejar el error con:
  - `.catch` (promesas)
  - `try/catch` (async/await)
- Mostrar en pantalla: `"Ocurrió un error al cargar los datos"`

Bonus:

- Mostrar distintos mensajes según el tipo de error

## Ejercicio 5

- Hacer 2 llamadas:
  - Obtener un pokemon
  - Con el resultado, hacer otra llamada `https://pokeapi.co/api/v2/ability/{name or Id}`
- Mostrar el resultado final en pantalla

# Asincronía y Fetch API

> [!TIP]
> La api que se utilizará es [Pokeapi](https://pokeapi.co/).

## Ejercicio 1

Pedir datos y mostrarlos: `https://pokeapi.co/api/v2/pokemon/{pokemon}` (reemplazar `{pokemon}` por el nombre de un pokemon existente)

Hacer una función que:

- Haga un `fetch` a una URL
- Convierta la respuesta a JSON
- Muestre el resultado en consola

Extra:

- Usando el resultado del fetch mostrar por separado solo las tres primeras habilidades del pokemón `abilities.slice(1, 3)`

## Ejercicio 2

Pasar de consola a DOM

- Obtener una lista desde una API: `https://pokeapi.co/api/v2/pokemon` devuelve una lista de pokemones en `"results"`
- Renderizar cada nombre de pokemon en el HTML como lista (`<ul>` o `<div>`)
- Cada `li` debe tener un link que en el src tenga la url del pokemon. `<li><a src="url">pokemon</a></li>`

Bonus:

- Limpiar el contenedor antes de volver a renderizar

## Ejercicio 3

Usando el ejercicio anterior

- Renderizar en un parrafo un mensaje: "Cargando..." antes del fetch
- Cuando llegan los datos:
  - ocultar el loading
  - mostrar los datos

Bonus:

- Simular delay con setTimeout para que se note el efecto. `setTimeOut(() => {}, 2000)`

## Ejercicio 4

Trabajar con fallos reales y promesas

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
  - Con el resultado, navegar a otra página que haga otra llamada `https://pokeapi.co/api/v2/ability/{name or Id}`
- Mostrar el resultado final en pantalla

# Ejercicios de Interacción con el DOM

## Ejercicio 1 - Cambiar texto

Dado las siguientes etiquetas HTML

```html
<h1 id="titulo">Hola mundo</h1>
<button id="btn">Cambiar</button>
```

Al hacer click en el botón, cambiar el texto del `<h1>` a `"Texto cambiado"`.

## Ejercicio 2 - Toggle de clases

Dado las siguientes etiquetas HTML

```html
<p id="texto">Soy un texto</p>
<button id="btn">Toggle</button>
```

Agregar/quitar una clase `"activo"` al `<p>` al hacer click.

## Ejercicio 3 - Crear y manipular elementos

Dado las siguientes etiquetas HTML

```html
<input id="input" />
<button id="btn">Agregar</button>
<ul id="lista"></ul>
```

Cada click agrega un `<li>` con el texto del input.

## Ejercicio 4 - Eliminar elementos

Cada `<li>` creado en el ejercicio anterior debe eliminarse cuando se hace click sobre él.

> [!Tip]
> Al crear el elemento `<li>` agregar la captura del evento `"click"`.

## Ejercicio 5 - Contador

Dado las siguientes etiquetas HTML

```html
<h2 id="contador">0</h2>
<button id="sumar">+</button>
<button id="restar">-</button>
```

> [!TIP]
> Convertir el valor del `#contador` a numero `parseInt(contador.value)

Incrementar y decrementar el contador.

## Ejercicio 6 - Input en tiempo real

```html
<input id="input" />
<p id="preview"></p>
```

Mostrar en tiempo real lo que el usuario escribe

> [!TIP]
> Usar evento "input".

## Ejercicio 7 - To-Do list simple

Dado las siguientes etiquetas HTML

```html
<input id="input" />
<button id="btn">Agregar</button>
<ul id="lista"></ul>
```

Implementar:

1. agregar tarea
2. Marcar como completada (toggle class)
3. Eliminar tarea

## Ejercicio 8 - Delegación de eventos

Modificar el To-Do list:

En vez de agregar un `addEventListener` a cada `<li>`,
ponerlo en el `<ul>`.

> [!TIP]
> Usar `event.target`

## Ejercicio 9 - Renderizado completo

Modificar la manera de agregar `<li>` a la lista por un array `let tareas = [];`

> [!TIP]
> Por cada cambio:
>
> 1. Agregar contenido al array `tareas.push(input.value)`.
> 2. Limpiar contendio `lista.innerHTML = ""`.
> 3. Renderizar denuevo `.map()` (recomendación usar función de renderizado).

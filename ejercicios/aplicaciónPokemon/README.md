# Aplicación Pokemon

Desarrollar una aplicación web que permita crear listas de favoritos de pokemones.

La Aplicación debe tener:

- En la página de inicio (`index.html`) debe permitir buscar un pokemon para seleccionarlo (usando: `https://pokeapi.co/api/v2/pokemon?limit=20`)
- Cada pokemon de la lista debe permitir clickearlo para agregarlo en una lista de favoritos.
  - Cada pokemon agregado debe estár en la lista junto con su nombre, peso, altura y habilidades (consultar su información `https://pokeapi.co/api/v2/pokemon/{pokemon}`).
- Cada pokemon en la lista de favoritos debe permitir quitarlo de la lista.

Bonus:

- Al clickear en un pokemon en la lista de favoritos tiene que redirigir a una nueva página `pokemon.html` donde mostrar la información del pokemon seleccionado.

> [!tip]
> La url debe ser `pokemon?id={pokemon}`
> Desde `pokemon.html` usar:
>
> ```js
> const params = new URLSearchParams(window.location.search);
> // obtiene el nombre enviado por la url
> const pokemon = params.get("id");
> ```

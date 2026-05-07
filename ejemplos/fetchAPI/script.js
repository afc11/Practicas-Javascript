const nombre = document.querySelector(".nombre_pokemon");
const altura = document.querySelector(".altura");
const peso = document.querySelector(".peso");
const img = document.querySelector(".sprite");
const abilities = document.querySelector(".abilities");
const form = document.querySelector("form");
const input = document.getElementById("input");
const card = document.querySelector(".card");
const body = document.querySelector("body");

/* Elimino el contenedor card cuando se carga la página */
window.addEventListener("DOMContentLoaded", () => {
  card.remove();
});

/* Captura el evento submit del formulario */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* Llama a la función encargada de llamar a la API y obtener un pokemon */
  buscarPokemon(input.value);
});

function buscarPokemon(pokemon) {
  /* Utiliza el endpoint (url) que permite obtener información del pokemon ingresado
   * Fetch obtiene una respuesta en forma de promesa:
   * - Pendiente: en un inicio
   * - Cumplida: si recibe una respuesta exitosa
   * - Rechazada: si no recibe una respuesta exitosa
   */
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((res) => {
      /* Si se cumple la promesa */
      // if(res.ok === false)
      if (!res.ok) throw new Error("Error al llamar a la API");
      /* Se formatea la respuesta a un objeto JSON */
      return res.json();
    })
    .then((data) => {
      /* Usando la información */
      console.log(JSON.stringify(data, null, 4));
      cargarData(data);
    })
    .catch((error) => {
      console.error(error);
      /* En caso que la respuesta sea fallida elimina el card y agrega un mensaje de error*/
      card.remove();
      body.innerHTML += "<p style='color:red'>No se encontró el pokemón</p>";
    });
}

/* Separación de obtención de información y carga de datos */
function cargarData(data) {
  /* Vuelve a agregar el elemento card al body  */
  body.appendChild(card);

  nombre.textContent = data.name;
  altura.textContent = data.height;
  peso.textContent = data.weight;

  img.src = data.sprites.front_default;

  abilities.innerHTML = "";
  data.abilities.map((item) => {
    const li = document.createElement("li");
    li.textContent = item.ability.name;

    abilities.appendChild(li);
  });
}

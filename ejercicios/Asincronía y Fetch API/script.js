const lista = document.querySelector("#lista")

const cargarPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((rec) => {
if (!rec.ok)throw new Error("Error al llamar a la API");
            return rec.json();
        })   
        .then((data) => {
           const pokemons = data.results.slice(0, 3);
            console.log(pokemons);

            pokemons.map((pokemon) => {
                const li = document.createElement("li");
                li.textContent = pokemon.name;
                lista.appendChild(li);
            });

    });

        .catch((error) => console.error(error));

     }

     cargarPokemons();

     
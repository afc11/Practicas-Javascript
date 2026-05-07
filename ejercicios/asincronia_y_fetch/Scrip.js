const nombre = document.getElementById("nombre");
const abilities = document.getElementById("abilities");
const form = document.getElementById("form");
const input = document.getElementById("input");
const sprite = document.getElementById("sprite");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    abilities.innerHTML = "";
    cargarPokemon(input.value.toLowerCase());
});

const cargarPokemon = (pokemon) => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
.then((res) => {
    if (!res.ok) throw new Error("No se pudo cargar el pokemon");
    return res.json();
})

.then((data) => {
            console.log(data);

            nombre.textContent = data.name;
            sprite.src = data.sprites.front_default;

            data.abilities.slice(0, 3).map((item) => {
                const li = document.createElement("li");
                li.textContent = item.ability.name;
                abilities.appendChild(li);
            });
        })
        .catch((error) => console.error(error));
}
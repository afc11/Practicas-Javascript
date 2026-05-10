const resultado = document.getElementById("resultado");

const params = new URLSearchParams(window.location.search);
const habilidad = params.get("habilidad");

fetch("https://pokeapi.co/api/v2/ability/" + habilidad)
    .then((res) => {
        if (!res.ok) throw new Error("Habilidad no encontrada");
        return res.json();
    })
    .then((data) => {
        const p = document.createElement("p");
        p.textContent = "Habilidad: " + data.name;

        const p2 = document.createElement("p");
        p2.textContent = "Generación: " + data.generation.name;

        resultado.appendChild(p);
        resultado.appendChild(p2);
    })
    .catch((err) => console.error(err));
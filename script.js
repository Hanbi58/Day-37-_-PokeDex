const poke_container = document.getElementById("poke-container");

const COLORS = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

async function fetchPockmons(pockmon_count) {
  for (let i = 1; i <= pockmon_count; i++) {
    await getPockemon(i);
  }
}

async function getPockemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPockmonCard(data);
}

function createPockmonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const id = pokemon.id.toString().padStart(3, "0");

  const type = pokemon.types[0].type.name;
  const color = COLORS[type];
  pokemonEl.style.backgroundColor = color;
  const pokemonInnerHTML = `<div class="img-container" >
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.id
    }.png"
    alt=""
  /></div><div class="info">
  <span class="number">#${id}</span>
  <h3 class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
  <small class="type">Type: <span>${type}</span></small></div>`;

  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
}

fetchPockmons(100);

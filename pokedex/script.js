const pokemon_container = document.getElementById("pokemon_container");
const pokemon_numbers = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

async function fetchPokemons() {
    for (let i = 1; i <= pokemon_numbers; i++) {
        await getPokemon(i); 
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Failed to fetch Pokémon");
        }

        const pokemon = await response.json();

        createPokemonCard(pokemon);

    } catch (error) {
        console.error("Error fetching Pokémon data: ", error);
        throw error;
    }
}

async function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");

    const pokemon_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => pokemon_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];

    pokemonElement.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img_container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    pokemonElement.innerHTML = pokemonInnerHTML;
    pokemon_container.appendChild(pokemonElement);
}

fetchPokemons();

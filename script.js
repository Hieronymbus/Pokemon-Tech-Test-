import { pokemonArray } from "/data/pokemon.js";
let cardContainer = document.querySelector(".card-container");



pokemonArray.forEach(pokemon => {
    let cardHTML =  `<div class="card" id=${pokemon.id}>
                        <img class="card__image" src="${pokemon.sprite}"/>
                        <div class="card__content">
                            <h2 class="card__heading">${pokemon.name}</h2>
                            
                            <p class="card__text">Types: ${pokemon.types}</p>
                        </div>
                    </div>`;
    
    cardContainer.innerHTML += cardHTML;
});

document.querySelector(".card-container")
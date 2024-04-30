import { pokemonArray } from "/data/pokemon.js";
let cardContainer = document.querySelector(".card-container");
let cardHTML;

cardContainer.innerHTML += `<div>
<input type="text" placeholder="Enter name to search.." id="nameSearchInput">
<button id="nameSearchButton">Search</button>
</div>`;

pokemonArray.forEach(pokemon => {
    // how to make the names have capital start letter more efficiently??
    let name = pokemon.name.split("");
    name[0] = name[0].toUpperCase();
    let capitalName = name.join("");
    
    
    if(pokemon.types.length == 2 ){
        cardHTML =  `<div class="card" id=${pokemon.id}>
                        <img class="card__image" src="${pokemon.sprite}"/>
                        <div class="card__content">
                            <h2 class="card__heading">${capitalName}</h2>
                            
                            <p class="card__text">${capitalName}(#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon </p>
                        </div>
                    </div>`;
    } else {
         cardHTML =  `<div class="card" id=${pokemon.id}>
                        <img class="card__image" src="${pokemon.sprite}"/>
                        <div class="card__content">
                            <h2 class="card__heading">${capitalName}</h2>
                            
                            <p class="card__text">${capitalName}(#${pokemon.id}) is a ${pokemon.types[0]} type pokemon </p>
                        </div>
                    </div>`;
    };
    
    cardContainer.innerHTML += cardHTML;
});

function handleSearchByName (name) {
    let searchedArray = pokemonArray.filter(pokemon => {
        if (pokemon.name == name){
            return true
        } ;   
    });

    cardContainer.innerHTML
};




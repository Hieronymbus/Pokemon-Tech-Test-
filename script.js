import { pokemonArray } from "/data/pokemon.js";
let cardContainer = document.querySelector(".card-container");
let cardHTML;
let name;
cardContainer.innerHTML += `<div>
<input type="text" placeholder="Enter name to search.." id="nameSearchInput">
<button id="nameSearchButton">Search</button>
</div>`;

pokemonArray.forEach(pokemon => {
    // how to make the names have capital start letter more efficiently??
    name = pokemon.name.split("");
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



function handleSearchByName () {
    let nameSearched = document.getElementById("nameSearchInput").value
    console.log(nameSearched)
    if(pokemonArray.some(pokemon => pokemon.name === document.getElementById("nameSearchInput").value)){
        let searchedArray = pokemonArray.filter(pokemon => {
            if (pokemon.name == document.getElementById("nameSearchInput").value ){
                return true
            } ;   
        });
        
        ///////?????????????????????????
        console.log(searchedArray[0]);
        name = searchedArray[0].name.split("");
        name[0] = name[0].toUpperCase();
        let capitalName = name.join("");
        console.log(capitalName)
        if(searchedArray[0].types.length == 2 ){
            cardHTML =  `<div class="card" id=${searchedArray[0].id}>
                            <img class="card__image" src="${searchedArray[0].sprite}"/>
                            <div class="card__content">
                                <h2 class="card__heading">${capitalName}</h2>
                                
                                <p class="card__text">${capitalName}(#${searchedArray[0].id}) is a ${searchedArray[0].types[0]} & ${searchedArray[0].types[1]} type pokemon </p>
                            </div>
                        </div>`;
        } else {
             cardHTML =  `<div class="card" id=${searchedArray[0].id}>
                            <img class="card__image" src="${searchedArray[0].sprite}"/>
                            <div class="card__content">
                                <h2 class="card__heading">${capitalName}</h2>
                                
                                <p class="card__text">${capitalName}(#${searchedArray[0].id}) is a ${searchedArray[0].types[0]} type pokemon </p>
                            </div>
                        </div>`;
        };
    
        cardContainer.innerHTML = `<div>
        <input type="text" placeholder="Enter name to search.." id="nameSearchInput">
        <button id="nameSearchButton">Search</button>
        </div>`;
        cardContainer.innerHTML += cardHTML
        document.getElementById("nameSearchButton").addEventListener("click", handleSearchByName)
    } 
    else {
        alert("Pokemon not found, please check spelling or try another")
    }



    
};

document.getElementById("nameSearchButton").addEventListener("click", handleSearchByName)

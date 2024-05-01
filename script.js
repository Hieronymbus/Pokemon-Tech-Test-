import { pokemonArray } from "/data/pokemon.js";
let cardContainer = document.querySelector(".card-container");
let cardHTML;
let name;
cardContainer.innerHTML += `<div>
<input type="text" placeholder="Enter name to search.." id="nameSearchInput">
<button id="nameSearchButton">Search</button><br/>
<br/>
<input type="checkbox" id="normal" name="type" value="Normal"><label for="normal">Normal</label>
<input type="checkbox" id="fire" name="type" value="Fire"><label for="fire">Fire</label>
<input type="checkbox" id="water" name="type" value="Water"><label for="water">Water</label>
<input type="checkbox" id="electric" name="type" value="Electric"><label for="electric">Electric</label>
<input type="checkbox" id="grass" name="type" value="Grass"><label for="grass">Grass</label>
<input type="checkbox" id="ice" name="type" value="Ice"><label for="ice">Ice</label>
<input type="checkbox" id="fighting" name="type" value="Fighting"><label for="fighting">Fighting</label>
<input type="checkbox" id="poison" name="type" value="Poison"><label for="poison">Poison</label>
<input type="checkbox" id="ground" name="type" value="Ground"><label for="ground">Ground</label>
<input type="checkbox" id="flying" name="type" value="Flying"><label for="flying">Flying</label>
<input type="checkbox" id="psychic" name="type" value="Psychic"><label for="psychic">Psychic</label>
<input type="checkbox" id="bug" name="type" value="Bug"><label for="bug">Bug</label>
<input type="checkbox" id="rock" name="type" value="Rock"><label for="rock">Rock</label>
<input type="checkbox" id="ghost" name="type" value="Ghost"><label for="ghost">Ghost</label>
<input type="checkbox" id="dragon" name="type" value="Dragon"><label for="dragon">Dragon</label><br/>
<br>
<button id="resetPage">Reset Filters</button>
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
        <button id="nameSearchButton">Search</button><br/>
        <br/>
        <input type="checkbox" id="normal" name="type" value="Normal"><label for="normal">Normal</label>
        <input type="checkbox" id="fire" name="type" value="Fire"><label for="fire">Fire</label>
        <input type="checkbox" id="water" name="type" value="Water"><label for="water">Water</label>
        <input type="checkbox" id="electric" name="type" value="Electric"><label for="electric">Electric</label>
        <input type="checkbox" id="grass" name="type" value="Grass"><label for="grass">Grass</label>
        <input type="checkbox" id="ice" name="type" value="Ice"><label for="ice">Ice</label>
        <input type="checkbox" id="fighting" name="type" value="Fighting"><label for="fighting">Fighting</label>
        <input type="checkbox" id="poison" name="type" value="Poison"><label for="poison">Poison</label>
        <input type="checkbox" id="ground" name="type" value="Ground"><label for="ground">Ground</label>
        <input type="checkbox" id="flying" name="type" value="Flying"><label for="flying">Flying</label>
        <input type="checkbox" id="psychic" name="type" value="Psychic"><label for="psychic">Psychic</label>
        <input type="checkbox" id="bug" name="type" value="Bug"><label for="bug">Bug</label>
        <input type="checkbox" id="rock" name="type" value="Rock"><label for="rock">Rock</label>
        <input type="checkbox" id="ghost" name="type" value="Ghost"><label for="ghost">Ghost</label>
        <input type="checkbox" id="dragon" name="type" value="Dragon"><label for="dragon">Dragon</label><br/>
        <br>
        <button id="resetPage">Reset Filters</button>
        </div>`;
        cardContainer.innerHTML += cardHTML
        document.getElementById("nameSearchButton").addEventListener("click", handleSearchByName);
        document.getElementById("resetPage").addEventListener("click", handleRefresh);
    } 
    else {
        alert("Pokemon not found, please check spelling or try another")
    }



    
};

document.getElementById("nameSearchButton").addEventListener("click", handleSearchByName)

// function to reset page and clear search filters

function handleRefresh () {
    location.reload();
    console.log("hihi")
};

document.getElementById("resetPage").addEventListener("click", handleRefresh)


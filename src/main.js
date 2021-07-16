import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//console.log(data.pokemon[0].num);
//console.log(data.pokemon[0].size.height);

data.pokemon.forEach((element) => {
    let containerBox = document.getElementById("container");

    //Se establece el atributo para el estilo de los div
    containerBox.setAttribute("class", "containerCard");

    let boxCard = document.createElement("div");
    boxCard.setAttribute("class", "boxPokemon");

    //Se toma la imagen de la data y se añade al index
    let box = document.createElement("div");
    let imgBox = document.createElement("div");
    let imgPokemon = document.createElement("img");
    box.setAttribute("class", "box-Content");
    imgBox.setAttribute("class", "image-Pokemon");
    imgPokemon.src = element.img;
    imgBox.appendChild(imgPokemon);
    box.appendChild(imgBox);
    
    //Se toma el número del pokémon de la data y se añade al index
    let nameBox = document.createElement("div");
    let numPokemon = document.createElement("h2");
    let namePokemon = document.createElement("h2");
    nameBox.setAttribute("class", "name-NumPokemon");
    numPokemon.innerHTML = element.num;
    nameBox.appendChild(numPokemon);
    namePokemon.innerHTML = element.name;
    nameBox.appendChild(namePokemon);

    //Se toma el nombre del pokémon de la data y se añade al index

    box.appendChild(boxCard);
    box.appendChild(nameBox);




    containerBox.appendChild(box);


});

for (let i = 0; i < data.pokemon.length; i++) {

    //console.log(i);
    //Se crean los contenedores de cada tarjeta

}







//fetch 
// promesas
/*for (let i = 0; i < data.pokemon.length; i++) {
    let cardPokemon = document.createElement("SECTION");
    cardPokemon.setAttribute("class", "item");

    let imgPokemon = document.createElement("IMG");
    imgPokemon.src = data.pokemon[i].img;
    cardPokemon.appendChild(imgPokemon);

    let namePokemon = document.createElement("h4");
    namePokemon.innerHTML = data.pokemon[i].name;
    cardPokemon.appendChild(namePokemon);

    let numPokemon = document.createElement("h3");
    numPokemon.innerHTML = data.pokemon[i].num;
    cardPokemon.appendChild(numPokemon);

    cardPokemon.insertBefore(numPokemon, namePokemon);

    document.getElementById("cards").appendChild(cardPokemon);
}
*/
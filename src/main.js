import { example, filtrarPokemon, equisde } from './data.js';
import data from './data/pokemon/pokemon.js';


const dataPoke = data.pokemon;
console.log(example, data.pokemon);
console.log(equisde);

const bienvenida = () => {
   let pagBienvenida = document.getElementById("bienvenida");
   let pagListado = document.getElementById("pagListado");

   pagBienvenida.style.display="block";
   pagListado.style.display="none";
}

// Funciones que construyen la condición 
const filtroAtributoArreglo = (atributo, valor) => {
    return (pokemon) => (pokemon[atributo].includes(valor));
} 

const filtroAtributoObjeto = (atributo, atributo2, valor) => {
    return (pokemon) => (pokemon[atributo][atributo2]===valor);
}

const paginaListado = () => {
    
    let pagBienvenida = document.getElementById("bienvenida");
    let pagListado = document.getElementById("pagListado");
    const dataPoke = data.pokemon;

    pagBienvenida.style.display="none";
    pagListado.style.display="block";

    const eleccionTipo = document.getElementById("Tipo");
    template(dataPoke);

    eleccionTipo.addEventListener("change", (event) => {
        
        const resultado = event.target.value;
        console.log(resultado);
        
        if (resultado==="0") {
             template(dataPoke);
        } else if (resultado==="1") {
            let condicion = filtroAtributoArreglo("type", "normal");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="2") {
            let condicion = filtroAtributoArreglo("type", "grass");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="3") {
            let condicion = filtroAtributoArreglo("type", "fire");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="4") {
            let condicion = filtroAtributoArreglo("type", "water");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="5") {
            let condicion = filtroAtributoArreglo("type", "steel");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="6") {
            let condicion = filtroAtributoArreglo("type", "electric");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="7") {
            let condicion = filtroAtributoArreglo("type", "ice");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="8") {
            let condicion = filtroAtributoArreglo("type", "fighting");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="9") {
            let condicion = filtroAtributoArreglo("type", "poison");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="10") {
            let condicion = filtroAtributoArreglo("type", "rock");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="11") {
            let condicion = filtroAtributoArreglo("type", "flying");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="12") {
            let condicion = filtroAtributoArreglo("type", "psychic");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="13") {
            let condicion = filtroAtributoArreglo("type", "bug");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="14") {
            let condicion = filtroAtributoArreglo("type", "ground");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="15") {
            let condicion = filtroAtributoArreglo("type", "ghost");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="16") {
            let condicion = filtroAtributoArreglo("type", "dragon");
            template(filtrarPokemon(dataPoke,condicion));
        } else if (resultado==="17") {
            let condicion = filtroAtributoArreglo("type", "dark");
            template(filtrarPokemon(dataPoke,condicion));
        } 
    });
        
};



const template = (list) => {
    let listaPokemon = "";
    list.forEach((dataPoke) => {
        const card = ` 
        <div class="tarjetaPokemon">
        <h3 class="pokeNum"> '${dataPoke.num}'</h3>
        <h3 class="pokeNombre"> '${dataPoke.name}'</h3>
        <img class="pokeImg" src='${dataPoke.img}'>
        </div>`
        listaPokemon+= card;
        console.log(dataPoke.generation.name);
    });
    document.getElementById("listadoPokemon").innerHTML=listaPokemon;
}



bienvenida();


const botonJohto = document.getElementById("boton1");
botonJohto.addEventListener("click", paginaListado);

const botonKanto = document.getElementById("boton2");
botonKanto.addEventListener("click", paginaListado);

const botonAmbos = document.getElementById("boton3");
botonAmbos.addEventListener("click", paginaListado);

const botonVolver = document.getElementById("botonVolver");
botonVolver.addEventListener("click", bienvenida);




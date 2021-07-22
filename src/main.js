import { calculoEstadistico, filtrarRegion, ordenarFiltrar } from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPoke = calculoEstadistico(data.pokemon);

const bienvenida = () => {
    let pagBienvenida = document.getElementById("bienvenida");
    let pagListado = document.getElementById("pagListado");

    pagBienvenida.style.display = "block";
    pagListado.style.display = "none";
}

const paginaListado = (region) => {

    let pagBienvenida = document.getElementById("bienvenida");
    let pagListado = document.getElementById("pagListado");
    //const dataPoke = data.pokemon;

    pagBienvenida.style.display = "none";
    pagListado.style.display = "block";
    

    if (region === "johto") {
        let pokemonJohto = filtrarRegion(dataPoke, "johto");
        limpiarPokemon(dataPoke);
        template(pokemonJohto);


        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            template(ordenarFiltrar(pokemonJohto, tipo, order));
            
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            template(ordenarFiltrar(pokemonJohto, tipo, order));

        })
    }

    if (region === "kanto") {
        let pokemonKanto = filtrarRegion(dataPoke, "kanto");
        limpiarPokemon(dataPoke);
        template(pokemonKanto);

        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            template(ordenarFiltrar(pokemonKanto, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            template(ordenarFiltrar(pokemonKanto, tipo, order));
        })
    }


    if (region === "ambos") {
        limpiarPokemon(dataPoke);
        template(dataPoke);

        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            template(ordenarFiltrar(dataPoke, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            template(ordenarFiltrar(dataPoke, tipo, order));
        })
    }

};




    
    


/*const template = (list) => {
    let listaPokemon = "";
    list.forEach((dataPoke) => {
        const tarjetas = 
        ` 
        <div class="tarjetaPokemon">
            <div class="tarjetaIndividual" id="tarjetaIndividual">
                <h3 class="pokeNum"> #${dataPoke.num}</h3>
                <h3 class="pokeNombre"> ${dataPoke.name}</h3>
                <img class="pokeImg" src='${dataPoke.img}'>
                <button class="ver" id="myBtn">más</button>
            </div>
        
        </div>`


    


    });

    document.getElementById("listadoPokemon").innerHTML = listaPokemon;

   
};   */

const template = (dataPoke) => {
    for (let poke of dataPoke) {

        
        let tarjetaPokemon = document.createElement("div");
        tarjetaPokemon.setAttribute("class", "tarjetaPokemon");
        tarjetaPokemon.setAttribute("id", `${poke.num}`)

        let tarjetaIndividual = document.createElement("div");
        tarjetaIndividual.setAttribute("class", "tarjetaIndividual");
        tarjetaIndividual.setAttribute("id", "tarjetaIndividual");

        let numeroPoke = document.createElement("h3");
        numeroPoke.setAttribute("class", "pokeNum");
        numeroPoke.innerHTML=`${poke.num}`;

        let nombrePoke = document.createElement("h3");
        nombrePoke.setAttribute("class", "pokeNombre");
        nombrePoke.innerHTML=`${poke.name}`;

        let imagenPoke = document.createElement("img");
        imagenPoke.setAttribute("class", "pokeimg");
        imagenPoke.setAttribute("src",`${poke.img}`);

        tarjetaPokemon.appendChild(tarjetaIndividual);
        tarjetaIndividual.appendChild(numeroPoke);
        tarjetaIndividual.appendChild(nombrePoke);
        tarjetaIndividual.appendChild(imagenPoke);

        let contenidoPoke = document.getElementById("listadoPokemon");
        contenidoPoke.appendChild(tarjetaPokemon);
        
    }
}

const limpiarPokemon = (dataPoke) => {
    
    for (let poke of dataPoke){

        let tarjetaPokemon = document.getElementById(`${poke.num}`);
        if (tarjetaPokemon !== null){
            tarjetaPokemon.remove();
        }
        
    }
    // let tarjetaPokemon = document.getElementById("tarjetaPokemon");
    // tarjetaPokemon.remove();
    
    //let contenido2 = document.getElementById("contenido2");


    

    
    
    
    
}


//template(dataPoke);




const botonJohto = document.getElementById("johto");
botonJohto.addEventListener("click", () => paginaListado("johto"));

const botonKanto = document.getElementById("kanto");
botonKanto.addEventListener("click", () => paginaListado("kanto"));

const botonAmbos = document.getElementById("ambos");
botonAmbos.addEventListener("click", () => paginaListado("ambos"));

const botonVolver = document.getElementById("flechaVolver");
botonVolver.addEventListener("click", bienvenida);

bienvenida();
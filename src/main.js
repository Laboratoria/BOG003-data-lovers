import { example, calculoEstadistico, filtrarRegion, ordenarFiltrar } from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPoke = calculoEstadistico(data.pokemon);
//const dataPoke = data.pokemon;
console.log(example, dataPoke);
console.log(calcularSuma(data.pokemon));





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
        template(pokemonJohto);


        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            template(ordenarFiltrar(pokemonJohto, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            template(ordenarFiltrar(pokemonJohto, tipo, order));
        })
    }

    if (region === "kanto") {
        let pokemonKanto = filtrarRegion(dataPoke, "kanto");
        template(pokemonKanto);

        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            template(ordenarFiltrar(pokemonKanto, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            template(ordenarFiltrar(pokemonKanto, tipo, order));
        })
    }


    if (region === "ambos") {
        template(dataPoke);

        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            template(ordenarFiltrar(dataPoke, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            template(ordenarFiltrar(dataPoke, tipo, order));
        })
    }
}

const template = (list) => {
    let listaPokemon = "";
    list.forEach((dataPoke) => {
        const tarjetas = ` 
        <div class="tarjetaPokemon">
            <div class="tarjetaIndividual">
                <h3 class="pokeNum"> #${dataPoke.num}</h3>
                <h3 class="pokeNombre"> ${dataPoke.name}</h3>
                <img class="pokeImg" src='${dataPoke.img}'>
            </div>
        
        </div>`

        listaPokemon += tarjetas;

    });
    document.getElementById("listadoPokemon").innerHTML = listaPokemon;
};

template(dataPoke)

const botonJohto = document.getElementById("johto");
botonJohto.addEventListener("click", () => paginaListado("johto"));

const botonKanto = document.getElementById("kanto");
botonKanto.addEventListener("click", () => paginaListado("kanto"));

const botonAmbos = document.getElementById("ambos");
botonAmbos.addEventListener("click", () => paginaListado("ambos"));

const botonVolver = document.getElementById("flechaVolver");
botonVolver.addEventListener("click", bienvenida);

bienvenida();
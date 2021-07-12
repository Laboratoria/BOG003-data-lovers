import { example, filtrarTipo, filtrarRegion} from './data.js';
import data from './data/pokemon/pokemon.js';


const dataPoke = data.pokemon;
console.log(example, data.pokemon);


const bienvenida = () => {
   let pagBienvenida = document.getElementById("bienvenida");
   let pagListado = document.getElementById("pagListado");

   pagBienvenida.style.display="block";
   pagListado.style.display="none";
}

// Funciones que construyen la condición 
// const filtroAtributoArreglo = (tipo, generacion) => {
//     return (pokemon) => (pokemon[atributo].includes(tipo));
// } 

// const filtroAtributoObjeto = (atributo, atributo2, valor) => {
//     return (pokemon) => (pokemon[atributo][atributo2]===valor);
// }

const paginaListado = (region) => {
    
    let pagBienvenida = document.getElementById("bienvenida");
    let pagListado = document.getElementById("pagListado");
    const dataPoke = data.pokemon;

    pagBienvenida.style.display="none";
    pagListado.style.display="block";

    if (region === "johto"){
        let pokemonJohto = filtrarRegion(dataPoke, "johto");
        template(pokemonJohto);
        console.log(pokemonJohto);
        const eleccionTipo = document.getElementById("Tipo");
        

        eleccionTipo.addEventListener("change", (event) => {
        
            const resultado = event.target.value;
            console.log(resultado);
        
            if (resultado==="0") {
              template(pokemonJohto);
            } else {
            template(filtrarTipo(pokemonJohto,resultado));
            }      
       
        });

        

    } else if (region === "kanto"){
        let pokemonKanto = filtrarRegion(dataPoke, "kanto");
        template(pokemonKanto);
        const eleccionTipo = document.getElementById("Tipo");
        

        eleccionTipo.addEventListener("change", (event) => {
        
            const resultado = event.target.value;
            console.log(resultado);
        
            if (resultado==="0") {
              template(pokemonKanto);
            } else {
            template(filtrarTipo(pokemonKanto,resultado));
            }      
       
        });

    } else if (region === "ambos"){
        const eleccionTipo = document.getElementById("Tipo");
        template(dataPoke);
    
        eleccionTipo.addEventListener("change", (event) => {
            
            const resultado = event.target.value;
            console.log(resultado);
            
            if (resultado==="0") {
                  template(dataPoke);
            } else {
                template(filtrarTipo(dataPoke,resultado));
            }      
           
        });
    };

    // const eleccionTipo = document.getElementById("Tipo");
    // template(dataPoke);

    // eleccionTipo.addEventListener("change", (event) => {
        
    //     const resultado = event.target.value;
    //     console.log(resultado);
        
    //     if (resultado==="0") {
    //           template(dataPoke);
    //     } else {
    //         template(filtrarTipo(dataPoke,resultado));
    //     }      
       
    // });
};

const template = (list) => {
    let listaPokemon = "";
    list.forEach((dataPoke) => {
        const card = ` 
        <div class="tarjetaPokemon">
            <div class="tarjetaIndividual">
                <h3 class="pokeNum"> ${dataPoke.num}</h3>
                <h3 class="pokeNombre"> ${dataPoke.name}</h3>
                <img class="pokeImg" src='${dataPoke.img}'>
            </div>
            
        </div>`
        listaPokemon+= card;
        console.log(dataPoke.generation.name);
    });
    document.getElementById("listadoPokemon").innerHTML=listaPokemon;
}



bienvenida();


const botonJohto = document.getElementById("johto");
botonJohto.addEventListener("click", () => paginaListado("johto"));

const botonKanto = document.getElementById("kanto");
botonKanto.addEventListener("click", () => paginaListado("kanto"));

const botonAmbos = document.getElementById("ambos");
botonAmbos.addEventListener("click", () => paginaListado("ambos"));

const botonVolver = document.getElementById("botonVolver");
botonVolver.addEventListener("click", bienvenida);




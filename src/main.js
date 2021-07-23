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



const template = (listData) => {
    let listaPokemon = "";
    listData.forEach((dataPoke) => {
        const tarjetas = ` 

        <div class="tarjetaPokemon">
            <div class="tarjetaIndividual" id="tarjetaIndividual">
                <h3 class="pokeNum"> #${dataPoke.num}</h3>
                <h3 class="pokeNombre"> ${dataPoke.name}</h3>
                <img class="pokeImg" src='${dataPoke.img}'>
                <button class="ver" id="myBtn">más</button>
            </div>
        
        </div>`;



    


    });

    document.getElementById("listadoPokemon").innerHTML = listaPokemon;

   
};   */

const template = (dataPoke) => {
    for (let poke of dataPoke) {


        let tarjetaPokemon = document.createElement("div");
        tarjetaPokemon.setAttribute("class", "tarjetaPokemon");
        tarjetaPokemon.setAttribute("id", `${poke.num}`);
        tarjetaPokemon.addEventListener("click", () => modal(poke));

        let tarjetaIndividual = document.createElement("div");
        tarjetaIndividual.setAttribute("class", "tarjetaIndividual");
        tarjetaIndividual.setAttribute("id", "tarjetaIndividual");

        let numeroPoke = document.createElement("h3");
        numeroPoke.setAttribute("class", "pokeNum");
        numeroPoke.textContent = `${poke.num}`;

        let nombrePoke = document.createElement("h3");
        nombrePoke.setAttribute("class", "pokeNombre");
        nombrePoke.textContent = `${poke.name}`;

        let imagenPoke = document.createElement("img");
        imagenPoke.setAttribute("class", "pokeimg");
        imagenPoke.setAttribute("src", `${poke.img}`);

        tarjetaPokemon.appendChild(tarjetaIndividual);
        tarjetaIndividual.appendChild(numeroPoke);
        tarjetaIndividual.appendChild(nombrePoke);
        tarjetaIndividual.appendChild(imagenPoke);

        let contenidoPoke = document.getElementById("listadoPokemon");
        contenidoPoke.appendChild(tarjetaPokemon);

    }
}

const limpiarPokemon = (dataPoke) => {

    for (let poke of dataPoke) {

        let tarjetaPokemon = document.getElementById(`${poke.num}`);
        if (tarjetaPokemon !== null) {
            tarjetaPokemon.remove();
        }

    }
}
//src =`${poke.type}`+".gif"

const limpiarTarjeta = (dataPoke) => {

    for (let poke of dataPoke) {

        let contenidoModal = document.getElementById(`${poke}`);
        if (contenidoModal !== null) {
            contenidoModal.remove();
        }

    }
}



const modal = (poke) => {

    //for (let poke of dataPoke) {

        const divModal = document.getElementById("modal");

        //Lado A 
        const contenidoModal = document.createElement("div");
        contenidoModal.classList.add("content");
        contenidoModal.setAttribute("id", `${poke}`);
        contenidoModal.setAttribute("hiden", "");
        divModal.appendChild(contenidoModal);

        const encabezado = document.createElement("div");
        encabezado.classList.add("header");
        contenidoModal.appendChild(encabezado);

        const botonCerrar = document.createElement("div");
        botonCerrar.classList.add("close-btn");
        botonCerrar.innerHTML = `<img src="img/closebutton.png"> `;
        encabezado.appendChild(botonCerrar);

        const botonRotar = document.createElement("div");
        botonRotar.classList.add("rotar-btn");
        botonRotar.innerHTML = `<img src="img/rotarboton.png"> `;
        encabezado.appendChild(botonRotar);

        const cuerpoModalA = document.createElement("div");
        cuerpoModalA.classList.add("body");
        cuerpoModalA.setAttribute("id", "modal-body");

        const titulo = document.createElement("div");
        titulo.classList.add("title");
        cuerpoModalA.appendChild(titulo);

        const numeroPoke = document.createElement("h1");
        numeroPoke.textContent = `${poke.num}`;
        titulo.appendChild(numeroPoke);

        const textoTitulo = document.createElement("h1");
        textoTitulo.textContent = poke.name;
        titulo.appendChild(textoTitulo);

        const marco = document.createElement("div");
        marco.classList.add("marco");
        cuerpoModalA.appendChild(marco);
        const imagen = document.createElement("img");
        imagen.src = poke.img;
        marco.appendChild(imagen);
        contenidoModal.appendChild(cuerpoModalA);

        const tipo = document.createElement("div");
        tipo.classList.add("tipos");
    
        poke.type.forEach((pokeTipo)=>{
            cuerpoModalA.appendChild(tipo);
            const imagenTipo = document.createElement("img");
            imagenTipo.src = "img/"+pokeTipo+".gif";
            tipo.appendChild(imagenTipo);
        });

        const descripcion = document.createElement("div");
        descripcion.classList.add("descripcion");
        cuerpoModalA.appendChild(descripcion);
        descripcion.textContent = poke.about;

        const medidas = document.createElement("div");
        medidas.classList.add("medidas");
        cuerpoModalA.appendChild(medidas);
        const talla = document.createElement("div");
        talla.classList.add("talla");
        talla.textContent ="Height:"+ poke.size.height;
        medidas.appendChild(talla);
        
        const peso = document.createElement("div");
        peso.classList.add("peso");
        peso.textContent = "Weight:" +poke.size.weight;
        medidas.appendChild(peso);

        //Lado B

        const contenidoModalB = document.createElement("div");
        contenidoModalB.classList.add("content");
        contenidoModalB.setAttribute("id", `${poke}`);
        contenidoModalB.setAttribute("hiden", "");
        divModal.appendChild(contenidoModalB);

        const encabezadoB = document.createElement("div");
        encabezadoB.classList.add("header");
        contenidoModalB.appendChild(encabezadoB);

        const botonCerrarB = document.createElement("div");
        botonCerrarB.classList.add("close-btn");
        botonCerrarB.innerHTML = `<img src="img/closebutton.png"> `;
        encabezadoB.appendChild(botonCerrarB);

        const botonRotarB = document.createElement("div");
        botonRotarB.classList.add("rotar-btn");
        botonRotarB.innerHTML = `<img src="img/rotarboton.png"> `;
        encabezadoB.appendChild(botonRotarB);

        const cuerpoModalB = document.createElement("div");
        cuerpoModalB.classList.add("body");
        cuerpoModalB.setAttribute("id", "modal-body");

        const tituloB = document.createElement("div");
        tituloB.classList.add("title");
        cuerpoModalB.appendChild(tituloB);

        const estadisticosTitulo = document.createElement("h3");
        estadisticosTitulo.textContent = "Stats";
        cuerpoModalB.appendChild(estadisticosTitulo);

    
        const estadisticos = document.createElement("div");
        estadisticos.classList.add("estadisticos");
        cuerpoModalB.appendChild(estadisticos);
        contenidoModalB.appendChild(cuerpoModalB);

         
        const ataque = document.createElement("h3");
        ataque.textContent = "Attack:"+poke.stats["base-attack"];
        estadisticos.appendChild(ataque);

        const defensa = document.createElement("h3");
        defensa.textContent = "Defense:"+poke.stats["base-defense"];
        estadisticos.appendChild(defensa);

        const estamina = document.createElement("h3");
        estamina.textContent = "Stamina:"+poke.stats["base-stamina"];
        estadisticos.appendChild(estamina);

        // const promedio = document.createElement("h3");
        // promedio.textContent = "Promedio base:"+poke.stats["baseProm"];
        // estadisticos.appendChild(promedio);

        const cpMax = document.createElement("h3");
        cpMax.textContent = "Max-CP:"+poke.stats["max-cp"];
        estadisticos.appendChild(cpMax);

        const hpMax = document.createElement("h3");
        hpMax.textContent = "Max-HP:"+poke.stats["max-hp"];
        estadisticos.appendChild(hpMax);
        
        const resistenciaTitulo = document.createElement("h3");
        resistenciaTitulo.textContent = "Resistant";
        cuerpoModalB.appendChild(resistenciaTitulo);

        const resistencias = document.createElement("div");
        resistencias.classList.add("resistencias");
    
        poke.resistant.forEach((e)=>{
            cuerpoModalB.appendChild(resistencias);
            const imagenResistencias = document.createElement("img");
            imagenResistencias.src = "img/"+e+".gif";
            resistencias.appendChild(imagenResistencias);
        });

        const debilidadTitulo = document.createElement("h3");
        debilidadTitulo.textContent = "Weaknesses";
        cuerpoModalB.appendChild(debilidadTitulo);

        const debilidades = document.createElement("div");
        debilidades.classList.add("debilidades");
    
        poke.weaknesses.forEach((e)=>{
            cuerpoModalB.appendChild(debilidades);
            const imagenDebilidades = document.createElement("img");
            imagenDebilidades.src = "img/"+e+".gif";
            debilidades.appendChild(imagenDebilidades);
        });


        divModal.style.display = "block";

        botonCerrar.addEventListener("click", () => {
            document.getElementById("modal").style.display = "none";
        })

        botonRotar.addEventListener("click", () => {
            document.getElementsByClassName("content")[0].style.display = "none";
        })

        

        botonCerrar.addEventListener("click", () => limpiarTarjeta(dataPoke));
    //}


}
// if (type[0]=== "grass"){
//     modal.setAttribute("style", "backgrondgrass")
// }


template(dataPoke);

const botonJohto = document.getElementById("johto");
botonJohto.addEventListener("click", () => paginaListado("johto"));

const botonKanto = document.getElementById("kanto");
botonKanto.addEventListener("click", () => paginaListado("kanto"));

const botonAmbos = document.getElementById("ambos");
botonAmbos.addEventListener("click", () => paginaListado("ambos"));

const botonVolver = document.getElementById("flechaVolver");
botonVolver.addEventListener("click", bienvenida);

bienvenida();

import { calculoEstadistico, filtrarRegion, ordenarFiltrar } from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPoke = calculoEstadistico(data.pokemon);

//Esta función nos muestra la pantalla de bienvenida y nos oculta pagina listado.
const bienvenida = () => {
        let pagBienvenida = document.getElementById("bienvenida");
        let pagListado = document.getElementById("pagListado");

        pagBienvenida.style.display = "block";
        pagListado.style.display = "none";
    }
    //Esta funcion nos muestra la pantalla de pagina listado pokemon y nos oculta pagina bienvenida.
const paginaListado = (region) => {

    let pagBienvenida = document.getElementById("bienvenida");
    let pagListado = document.getElementById("pagListado");

    pagBienvenida.style.display = "none";
    pagListado.style.display = "block";

    /*En este bloque de código filtramos por region (johto, kanto y ambas).
    Despues se filtra por tipo y posteriormente se ordena el listado de pokemon que se despliega*/
    if (region === "johto") {
        let pokemonJohto = filtrarRegion(dataPoke, "johto");
        limpiarPokemon(dataPoke);
        mostrarTarjetas(pokemonJohto);



        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            mostrarTarjetas(ordenarFiltrar(pokemonJohto, tipo, order));

        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            mostrarTarjetas(ordenarFiltrar(pokemonJohto, tipo, order));

        })
    }

    if (region === "kanto") {
        let pokemonKanto = filtrarRegion(dataPoke, "kanto");
        limpiarPokemon(dataPoke);
        mostrarTarjetas(pokemonKanto);

        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            mostrarTarjetas(ordenarFiltrar(pokemonKanto, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            mostrarTarjetas(ordenarFiltrar(pokemonKanto, tipo, order));
        })
    }


    if (region === "ambos") {
        limpiarPokemon(dataPoke);
        mostrarTarjetas(dataPoke);

        document.getElementById("tipo").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            mostrarTarjetas(ordenarFiltrar(dataPoke, tipo, order));
        });

        document.getElementById("orden").addEventListener("change", () => {
            const tipo = document.getElementById("tipo").value;
            const order = document.getElementById("orden").value;

            limpiarPokemon(dataPoke);
            mostrarTarjetas(ordenarFiltrar(dataPoke, tipo, order));
        })
    }


};

/*En este bloque de codigo renderizamos las tarjetas pokemon, con su número, nombre e imagen
A su vez, se realiza un evento click para llamar a la tarjeta informativa (Modal) */
const mostrarTarjetas = (dataPoke) => {
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
            imagenPoke.setAttribute("class", "pokeImg");
            imagenPoke.setAttribute("src", `${poke.img}`);

            tarjetaPokemon.appendChild(tarjetaIndividual);
            tarjetaIndividual.appendChild(numeroPoke);
            tarjetaIndividual.appendChild(nombrePoke);
            tarjetaIndividual.appendChild(imagenPoke);

            let contenidoPoke = document.getElementById("listadoPokemon");
            contenidoPoke.appendChild(tarjetaPokemon);

        }
    }
    /*En este bloque de código realizamos una función para remover las tarjetas pokemon creadas */
const limpiarPokemon = (dataPoke) => {

    for (let poke of dataPoke) {

        let tarjetaPokemon = document.getElementById(`${poke.num}`);
        if (tarjetaPokemon !== null) {
            tarjetaPokemon.remove();
        }

    }
}
  /* En este bloque de código realizamos una función para remover las tarjetas informativas (modal) creadas */
const limpiarTarjeta = (dataPoke) => {

    for (let poke of dataPoke) {

        let contenidoModal = document.getElementById(`${poke}`);
        if (contenidoModal !== null) {
            contenidoModal.remove();
        }

    }
}


/* Este bloque de código crea elementos en el documeto correspondientes a la tarjeta informativa (modal)
    que tiene un lado A y un lado B con características distintas */ 
const modal = (poke) => {



    const divModal = document.getElementById("modal");

    // Contenido de la tarjeta informativa 
    const contenidoModal = document.createElement("div");
    contenidoModal.classList.add("contenidoModal");
    contenidoModal.setAttribute("id", `${poke}`);
    contenidoModal.setAttribute("hiden", "");
    divModal.appendChild(contenidoModal);

    // Encabezado de la tarjeta
    const encabezado = document.createElement("div");
    encabezado.classList.add("encabezado");
    contenidoModal.appendChild(encabezado);

    const botonCerrar = document.createElement("div");
    botonCerrar.classList.add("cerrar-btn");
    botonCerrar.innerHTML = `<img src="img/botoncerrar.png" class="imagenBtnCerrar"> `;
    encabezado.appendChild(botonCerrar);

    const botonRotarB = document.createElement("div");
    botonRotarB.classList.add("rotar-btnB");
    botonRotarB.innerHTML = `Side A`;
    encabezado.appendChild(botonRotarB);

    const botonRotar = document.createElement("div");
    botonRotar.classList.add("rotar-btn");
    botonRotar.innerHTML = `Side B`;
    encabezado.appendChild(botonRotar);

    // Contenido lado A de la tarjeta
    const cuerpoModalA = document.createElement("div");
    cuerpoModalA.classList.add("cuerpoModalA");
    cuerpoModalA.setAttribute("id", "modal-cuerpo");

    const titulo = document.createElement("div");
    titulo.classList.add("titulo");
    cuerpoModalA.appendChild(titulo);

    // Nombre y número del Pokémon
    const numeroPoke = document.createElement("h1");
    numeroPoke.classList.add("numeroPoke");
    numeroPoke.textContent = `#${poke.num}`;
    titulo.appendChild(numeroPoke);

    const textoTitulo = document.createElement("h1");
    textoTitulo.textContent = poke.name;
    titulo.appendChild(textoTitulo);

    //Imagen del Pokémon enmarcada
    const marco = document.createElement("div");
    marco.classList.add("marco");
    cuerpoModalA.appendChild(marco);
    
    const imagen = document.createElement("img");
    imagen.classList.add("imagenPokemonTarjeta")
    imagen.src = poke.img;
    marco.appendChild(imagen);
    contenidoModal.appendChild(cuerpoModalA);

    // Recuadro con tipos del Pokémon
    const tipo = document.createElement("div");
    tipo.classList.add("tipos");
 
    // Se le asigna la etiqueta style con un background diferente según el tipo del pokémon para la tarjeta informativa
    if (poke.type[0] === "grass") {
        contenidoModal.setAttribute("style", "background:linear-gradient(180deg, #DFF7E4 0%, #B9E7C3 32.81%, #88D799 68.23%, #1B8532 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "ghost") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E2FFE9 0%, #D9DAF9 0.01%, #B5BBF5 36.46%, #929BEC 65.62%, #6464E6 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "dark") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #000000 0%, #3D3E3C 0.01%, #C9C9C9 36.46%, #A6A6A6 65.62%, #0D130E 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "poison") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E3B1E4 0%, #F9CDFB 0.01%, #D590D7 36.46%, #CF6ED1 65.62%, #A32EA5 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "bug") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #CDD86B 0%, #F7FFB9 0.01%, #D4DE77 36.46%, #B7C545 65.62%, #89970E 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "dragon") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #CDD86B 0%, #F7FFB9 0.01%, #D4DE77 36.46%, #B7C545 65.62%, #89970E 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "ground") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E2FFE9 0%, #FBEDC4 0.01%, #F1D892 36.46%, #BA9A42 65.62%, #896C1F 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "flying") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #596FCC 0%, #DFE5FF 0.01%, #B1BFFA 36.46%, #7C8CD2 65.62%, #4456A8 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "electric") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #FFE797 1.04%, #FFDB7B 30.21%, #FEC11E 66.15%, #DFA20D 98.96%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "rock") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #EDD493 0%, #3A2F12 0.01%, #AD9043 36.46%, #95782D 65.62%, #201B0D 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "normal") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #D3D3D0 0%, rgba(237, 237, 237, 0.77823) 0.01%, #CACAC2 36.46%, #ABAAA1 65.62%, #757370 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "steel") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #D5D5D9 0%, #C4C4C4 0.01%, #96979D 36.46%, #89898C 65.62%, #3E3E40 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "fairy") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E2FFE9 0%, #FFFCFF 0.01%, #F7C7F7 36.46%, #E8ACE8 65.62%, #D18AD0 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "ice") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E2FFE9 0%, #E6FAFF 0.01%, #B6EEFB 36.46%, #96E4F5 65.62%, #6ED3F3 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "fire") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #CC2201 0%, #F3B7AC 0.01%, #D57E6E 36.46%, #CA563F 65.62%, #C11C00 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "water") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E2FFE9 0%, #ABD9FF 0.01%, #74BEFE 36.46%, #2A8EF0 65.62%, #386A9B 100%);");
        marco.setAttribute("style", "background-image: url(https://media.redadn.es/imagenes/pokemon-lets-go-pikachu-nintendo-switch_323799.jpg); background-position: left;");
    } else if (poke.type[0] === "fighting") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #E2FFE9 0%, #F2D4CA 0.01%, #B47661 36.46%, #924E37 65.62%, #6A240E 100%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    } else if (poke.type[0] === "psychic") {
        contenidoModal.setAttribute("style", "background: linear-gradient(180deg, #FFD2E2 1.04%, #FC99BB 30.21%, #FB77A5 66.15%, #F74784 98.96%);");
        marco.setAttribute("style", "background-image: url(https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg); background-position: center;");
    }

    /* Por medio de un bucle, se crean elementos en el HTML
        y asignamos a cada tipo una imagen que será mostrada en la tarjeta informativa*/
    poke.type.forEach((pokeTipo) => {
        cuerpoModalA.appendChild(tipo);
        const imagenTipo = document.createElement("img");
        imagenTipo.src = "img/" + pokeTipo + ".gif";
        imagenTipo.classList.add("imagenTipo")
        tipo.appendChild(imagenTipo);
    });
 
    // Texto descriptivo del Pokémon
    const descripcion = document.createElement("div");
    descripcion.classList.add("descripcion");
    cuerpoModalA.appendChild(descripcion);
    descripcion.textContent = poke.about;

    // Sección de medidas del Pokémon 
    const medidas = document.createElement("div");
    medidas.classList.add("medidas");
    cuerpoModalA.appendChild(medidas);

    const talla = document.createElement("div");
    talla.classList.add("talla");
    const tallaTitulo = document.createElement("h4");
    tallaTitulo.classList.add("tallaTitulo");
    tallaTitulo.textContent = "Height:";
    const tallaNum = document.createElement("h4");
    tallaNum.classList.add("tallaTitulo");
    tallaNum.textContent = poke.size.height;
    medidas.appendChild(talla);
    talla.appendChild(tallaTitulo);
    talla.appendChild(tallaNum);

    const peso = document.createElement("div");
    peso.classList.add("peso");
    const pesoTitulo = document.createElement("h4");
    pesoTitulo.classList.add("pesoTitulo");
    pesoTitulo.textContent = "Weight:";
    const pesoNum = document.createElement("h4");
    pesoNum.classList.add("pesoTitulo");
    pesoNum.textContent = poke.size.weight;
    medidas.appendChild(peso);
    peso.appendChild(pesoTitulo);
    peso.appendChild(pesoNum);

    //Contenido lado B de la tarjeta informativa

    const cuerpoModalB = document.createElement("div");
    cuerpoModalB.classList.add("cuerpoModalB");
    cuerpoModalB.setAttribute("hidden", "");
    cuerpoModalB.setAttribute("id", "modal-cuerpo");

    const tituloB = document.createElement("div");
    tituloB.classList.add("tituloB");
    cuerpoModalB.appendChild(tituloB);

    // Estadísticos del Pokémon (ataque, defensa, etc)
    const estadisticosTitulo = document.createElement("h3");
    estadisticosTitulo.textContent = "Stats";
    tituloB.appendChild(estadisticosTitulo);

     const estadisticos = document.createElement("div");
    estadisticos.classList.add("estadisticos");
    cuerpoModalB.appendChild(estadisticos);
    contenidoModal.appendChild(cuerpoModalB);

    const ataque = document.createElement("h3");
    ataque.textContent = "Attack:" + poke.stats["base-attack"];
    estadisticos.appendChild(ataque);

    const defensa = document.createElement("h3");
    defensa.textContent = "Defense:" + poke.stats["base-defense"];
    estadisticos.appendChild(defensa);

    const estamina = document.createElement("h3");
    estamina.textContent = "Stamina:" + poke.stats["base-stamina"];
    estadisticos.appendChild(estamina);

    const cpMax = document.createElement("h3");
    cpMax.textContent = "Max-CP:" + poke.stats["max-cp"];
    estadisticos.appendChild(cpMax);

    const hpMax = document.createElement("h3");
    hpMax.textContent = "Max-HP:" + poke.stats["max-hp"];
    estadisticos.appendChild(hpMax);

    // Recuadro de tipos a los que el Pokémon es resistente
    const resistenciaTitulo = document.createElement("h3");
    resistenciaTitulo.classList.add("resistenciaTitulo");
    resistenciaTitulo.textContent = "Resistant";
    cuerpoModalB.appendChild(resistenciaTitulo);

    const resistencias = document.createElement("div");
    resistencias.classList.add("resistencias");
    
    
    poke.resistant.forEach((e) => {
        cuerpoModalB.appendChild(resistencias);
        const imagenResistencias = document.createElement("img");
        imagenResistencias.src = "img/" + e + ".gif";
        imagenResistencias.classList.add("imgResistencias");
        resistencias.appendChild(imagenResistencias);
    });

    // Recuadro con tipos a los que el Pokémon es vulnerable

    const debilidadTitulo = document.createElement("h3");
    debilidadTitulo.classList.add("debilidadTitulo");
    debilidadTitulo.textContent = "Weaknesses";
    cuerpoModalB.appendChild(debilidadTitulo);

    const debilidades = document.createElement("div");
    debilidades.classList.add("debilidades");

    poke.weaknesses.forEach((e) => {
        cuerpoModalB.appendChild(debilidades);
        const imagenDebilidades = document.createElement("img");
        imagenDebilidades.src = "img/" + e + ".gif";
        debilidades.appendChild(imagenDebilidades);
    });


    // Recuadros con las evoluciones anteriores y/o posteriores del Pokémon 
    const evoluciones = document.createElement("div");
    evoluciones.classList.add("evoluciones");

    const divPrevolucion = document.createElement("div");
    const prevolucionImagen = document.createElement("img");


    divPrevolucion.appendChild(prevolucionImagen);

    const divEvolucion = document.createElement("div");
    const evolucionImagen = document.createElement("img");


    divEvolucion.appendChild(evolucionImagen);

    evoluciones.appendChild(divPrevolucion);
    evoluciones.appendChild(divEvolucion);

    if ("prev-evolution" in poke.evolution) {
        const textoPrevolucion = document.createElement("h3");
        textoPrevolucion.textContent = "Pre-evolution";
        divPrevolucion.insertBefore(textoPrevolucion, prevolucionImagen);
        const laPrevolucion = poke.evolution["prev-evolution"][0]["num"];
        prevolucionImagen.src = "https://www.serebii.net/pokemongo/pokemon/" + laPrevolucion + ".png";
        prevolucionImagen.classList.add("prevolucionImg");


    }
    if ("next-evolution" in poke.evolution) {
        const textoEvolucion = document.createElement("h3");
        textoEvolucion.textContent = "Next-evolution";
        divEvolucion.insertBefore(textoEvolucion, evolucionImagen);
        const laEvolucion = poke.evolution["next-evolution"][0]["num"];
        
        evolucionImagen.src = "https://www.serebii.net/pokemongo/pokemon/" + laEvolucion + ".png";
        evolucionImagen.classList.add("evolucionImg");
    }

    cuerpoModalB.appendChild(evoluciones);

    //Fin lado B

    divModal.style.display = "block";

    // Se le asignan eventos click a los botones de cerrar y cambiar de lado A y B a la tarjeta 
    botonCerrar.addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    })

    botonRotar.addEventListener("click", () => {
        document.getElementsByClassName("cuerpoModalA")[0].style.display = "none";
        document.getElementsByClassName("cuerpoModalB")[0].style.display = "block";
        document.getElementsByClassName("rotar-btnB")[0].removeAttribute("style");
        document.getElementsByClassName("rotar-btn")[0].setAttribute("style", "background: rgba(140, 131, 131, 0.26)");
    });

    botonRotarB.addEventListener("click", () => {
        document.getElementsByClassName("cuerpoModalA")[0].style.display = "block";
        document.getElementsByClassName("cuerpoModalB")[0].style.display = "none";
        document.getElementsByClassName("rotar-btn")[0].removeAttribute("style");
        document.getElementsByClassName("rotar-btnB")[0].setAttribute("style", "background: rgba(140, 131, 131, 0.26)");
    });

    botonCerrar.addEventListener("click", () => limpiarTarjeta(dataPoke));
    //}


}



// Se hace el llamado de funciones, ya sea directo o por medio de clicks


mostrarTarjetas(dataPoke);

const botonJohto = document.getElementById("johto");
botonJohto.addEventListener("click", () => paginaListado("johto"));

const botonKanto = document.getElementById("kanto");
botonKanto.addEventListener("click", () => paginaListado("kanto"));

const botonAmbos = document.getElementById("ambos");
botonAmbos.addEventListener("click", () => paginaListado("ambos"));

const botonVolver = document.getElementById("flechaVolver");
botonVolver.addEventListener("click", bienvenida);

bienvenida();


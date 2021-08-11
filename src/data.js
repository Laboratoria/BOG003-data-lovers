export const calculoEstadistico = (datos) => {
    /* Esta función calcula el promedio y la desviación estandar de las estadísticas base para cada
        Pokémon y los asigna como nuevas llaves a la data que retorna la función */

    return datos.map((dato) => {
        const ataque = Number(dato.stats["base-attack"]);
        const defensa = Number(dato.stats["base-defense"]);
        const estamina = Number(dato.stats["base-stamina"]);

        let datoProm = (ataque + defensa + estamina) / 3;
        let datoDesviacion = (((ataque - datoProm) ** 2 + (defensa - datoProm) ** 2 + (estamina - datoProm) ** 2) / 2) ** (1 / 2);

        dato["baseDesviacion"] = datoDesviacion.toFixed(3);
        dato["baseProm"] = datoProm.toFixed();

        return dato;


    });
};

export const ordenarFiltrar = (datos, tipo, order) => {
    /* Esta función filtra y ordena al mismo tiempo según los argumentos que se le den, 
        llama a las funciones ordenar y filtrar según sea necesario  */

    let definitivo = datos;

    if (tipo !== "0") {
        definitivo = filtrarTipo(definitivo, tipo);
    }

    if (order !== "") {
        definitivo = ordenarPokemon(definitivo, order, "asc");
    }

    if (order === "baseDesviacion") {
        definitivo = ordenarPokemon(definitivo, order, "asc");
    }

    if (order === "baseProm") {
        definitivo = ordenarPokemon(definitivo, order, "desc");
    }


    return definitivo;

}

export const filtrarTipo = (datos, tipo) => {
    /*Esta función filtra los Pokémon segun su tipo */ 
    return datos.filter((dato) => (dato.type.includes(tipo)));
}

export const filtrarRegion = (datos, region) => {
     /*Esta función filtra los Pokémon segun su región */ 
    return datos.filter((dato => (dato.generation.name === region)));
}


export const ordenarPokemon = (datos, atributo, orden) => {
    /* Esta función ordena los datos numéricamente o alfabéticamente
        en orden ascendente y por promedio y desviación, descendente y ascendente, respectivamente */

    let ordenArreglo = datos;

    if (atributo === "name" || atributo === "num") {

        if (orden === "asc") {
            ordenArreglo.sort((a, b) => {

                if (a[atributo] > b[atributo]) {
                    return 1;
                }
                if (a[atributo] < b[atributo]) {
                    return -1;
                }

                return 0;
            });
        } else if (orden === "desc") {
            ordenArreglo.sort((a, b) => {

                if (a[atributo] > b[atributo]) {
                    return -1;
                }
                if (a[atributo] < b[atributo]) {
                    return 1;
                }
                return 0;
            });
        }

    } else if (atributo === "baseProm" || atributo === "baseDesviacion") {
        if (orden === "asc") {
            ordenArreglo.sort((a, b) => {

                if (Number(a[atributo]) > Number(b[atributo])) {
                    return 1;
                }
                if (Number(a[atributo]) < Number(b[atributo])) {
                    return -1;
                }

                return 0;
            });
        } else if (orden === "desc") {
            ordenArreglo.sort((a, b) => {

                if (Number(a[atributo]) > Number(b[atributo])) {
                    return -1;
                }
                if (Number(a[atributo]) < Number(b[atributo])) {
                    return 1;
                }
                return 0;
            });
        }

    }
    return ordenArreglo;

};
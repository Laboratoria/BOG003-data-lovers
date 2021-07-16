// estas funciones son de ejemplo

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return ('OMG');
};

export const calculoEstadistico = (datos) => {

    //     const ataque = datos.map((dato)=> {
    //         return dato.stats["base-attack"]
    //     });
    //     const defensa = datos.map((dato)=> {
    //      return dato.stats["base-defense"]
    //     });
    //     const estamina = datos.map((dato)=> {
    //      return dato.stats["base-stamina"]
    //     });

    //     let arreglo1 = [ataque, defensa, estamina];
    //     let arreglo2=[];
        
    //     for (let i=0; i < arreglo1.length; i++){
    //         for (let j=0; j < arreglo1[i].length; j++){
    //             let suma = parseInt(arreglo1[0][j], 10)+parseInt(arreglo1[1][j], 10)+parseInt(arreglo1[2][j], 10);
    //             arreglo2[j]=suma;
    //         }
    
    //     }
    // return arreglo2;
    return datos.map((dato)=> {
        const ataque = Number(dato.stats["base-attack"]);
        const defensa = Number(dato.stats["base-defense"]);
        const estamina = Number(dato.stats["base-stamina"]);

        let datoSuma = (ataque + defensa + estamina);
        dato["baseSuma"] = datoSuma.toFixed();
        let datoProm = (ataque + defensa + estamina)/3;
        let datoDesviacion = (((ataque - datoProm)**2 + (defensa - datoProm)**2 + (estamina-datoProm)**2)/2)**(1/2);
        
        dato["baseDesviacion"] = datoDesviacion.toFixed(3);
        if (dato["baseDesviacion"].length < 6){
            dato["baseDesviacion"] = "0"+ dato["baseDesviacion"];
        }
        dato["baseProm"] = datoProm.toFixed();
        if (dato["baseProm"].length < 3){
            dato["baseProm"] = "0"+ dato["baseProm"];
        }
    

        return dato;


    });
};

export const calcularProm = (datos) => {

    const ataque = datos.map((dato)=> {
        return dato.stats["base-attack"]
    });
    const defensa = datos.map((dato)=> {
     return dato.stats["base-defense"]
    });
    const estamina = datos.map((dato)=> {
     return dato.stats["base-stamina"]
    });

    let arreglo1 = [ataque, defensa, estamina];
    let arreglo2=[];
    
    for (let i=0; i < arreglo1.length; i++){
        for (let j=0; j < arreglo1[i].length +1; j++){
            let prom = (parseInt(arreglo1[0][j], 10)+parseInt(arreglo1[1][j], 10)+parseInt(arreglo1[2][j], 10))/3;
        
            arreglo2[j]=prom.toFixed();
        }

    }
return arreglo2;
};

export const ordenarFiltrar = (datos, tipo, order) => {

    console.log(datos, tipo, order);

    let definitivo = datos;

    if (tipo !== "0") {
        definitivo = filtrarTipo(datos, tipo);
    }

    if (order !== "" ) {
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
    return datos.filter((dato) => (dato.type.includes(tipo)));
}

export const filtrarRegion = (datos, region) => {
    return datos.filter((dato => (dato.generation.name === region)));
}

export const ordenarPokemon = (datos, atributo, orden) => {

    let ordenArreglo = datos;
    if (orden === "asc") {
        datos.sort((a, b) => {

            if (a[atributo] > b[atributo]) {
                return 1;
            }
            if (a[atributo] < b[atributo]) {
                return -1;
            }
            // si son iguales
            return 0;
        });
    } else if (orden === "desc") {
        datos.sort((a, b) => {

            if (a[atributo] > b[atributo]) {
                return -1;
            }
            if (a[atributo] < b[atributo]) {
                return 1;
            }
            // si son iguales
            return 0;
        });

    }
    return ordenArreglo;

};

// export const ordenarPokemon2 = (datos, atributo1, atributo2, orden) => {

//     let ordenArreglo = datos;
//     if (orden === "asc") {
//         datos.sort((a, b) => {

//             if (a[atributo1][atributo2] > b[atributo1][atributo2]) {
//                 return 1;
//             }
//             if (a[atributo1][atributo2] < b[atributo1][atributo2]) {
//                 return -1;
//             }
//             // si son iguales
//             return 0;
//         });
//     } else if (orden === "desc") {
//         datos.sort((a, b) => {

//             if (a[atributo1][atributo2] > b[atributo1][atributo2]) {
//                 return -1;
//             }
//             if (a[atributo1][atributo2] < b[atributo1][atributo2]) {
//                 return 1;
//             }
//             // si son iguales
//             return 0;
//         });

//     }
//     return ordenArreglo;

//
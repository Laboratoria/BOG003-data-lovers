// estas funciones son de ejemplo

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return ('OMG');
};

export const ordenarFiltrar = (datos, tipo, order) => {

    console.log(datos, tipo, order);

    let definitivo = datos;

    if (tipo !== "0") {
        definitivo = filtrarTipo(datos, tipo);
    }

    if (order !== "") {
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

export const ordenarPokemon2 = (datos, atributo1, atributo2, orden) => {

    let ordenArreglo = datos;
    if (orden === "asc") {
        datos.sort((a, b) => {

            if (a[atributo1][atributo2] > b[atributo1][atributo2]) {
                return 1;
            }
            if (a[atributo1][atributo2] < b[atributo1][atributo2]) {
                return -1;
            }
            // si son iguales
            return 0;
        });
    } else if (orden === "desc") {
        datos.sort((a, b) => {

            if (a[atributo1][atributo2] > b[atributo1][atributo2]) {
                return -1;
            }
            if (a[atributo1][atributo2] < b[atributo1][atributo2]) {
                return 1;
            }
            // si son iguales
            return 0;
        });

    }
    return ordenArreglo;

};
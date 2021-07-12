// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return('OMG');
};

export const filtrarTipo = (datos, tipo) => {
  return datos.filter((dato) => (dato["type"].includes(tipo)));
}

export const filtrarRegion = (datos, region) => {
  return datos.filter((dato => (dato["generation"]["name"]===region)));
}


// export const filtrarPokemon = (datos, condicion) => {
//   return datos.filter(condicion); 
// }

// export const filtroPoke = (datos, condicion) => {
//   let arrayvacio = [];
//   for (let i=0, i < datos.length, i++){
//     for (let j=0, j<datos[i].)
//   }
// }
 

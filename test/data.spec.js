import { calculoEstadistico, ordenarFiltrar, filtrarTipo, filtrarRegion, ordenarPokemon } from '../src/data.js';
//import pokemon from '../src/data/pokemon/pokemon.js';
import data from '../src/data/pokemon/pokemon.js';

const entrada = [
    { num: "001", name: "bulbasaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } },
    { num: "002", name: "charmander", type: ["fire"], generation: { "num": "generation i", "name": "kanto" } },
    { num: "003", name: "venusaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } },
    { num: "004", name: "abra", type: ["psychic"], generation: { "num": "generation i", "name": "kanto" } },
    { num: "005", name: "grimer", type: ["poison"], generation: { "num": "generation i", "name": "kanto" } },
    { num: "006", name: "ho-oh", type: ["fire", "flying"], generation: { "num": "generation ii", "name": "johto" } }
]

const entradaDos = [
    { num: "001", name: "bulbasaur", "stats": { "base-attack": "118", "base-defense": "111", "base-stamina": "128" } },
    { num: "002", name: "charmander", "stats": { "base-attack": "116", "base-defense": "93", "base-stamina": "118" } },
    { num: "003", name: "venusaur", "stats": { "base-attack": "198", "base-defense": "189", "base-stamina": "190" } },
    { num: "004", name: "abra", "stats": { "base-attack": "195", "base-defense": "82", "base-stamina": "93" } },
    { num: "005", name: "grimer", "stats": { "base-attack": "135", "base-defense": "90", "base-stamina": "190" } },
    { num: "006", name: "ho-oh", "stats": { "base-attack": "239", "base-defense": "244", "base-stamina": "214" } }
]

//Verificando las funciones.

describe('calculoEstadistico', () => {
    it('is a function', () => {
        expect(typeof calculoEstadistico).toBe('function');
    });
    const salidaCalculo = [
        { num: "001", name: "bulbasaur", baseDesviacion: "8.544", baseProm: "119", "stats": { "base-attack": "118", "base-defense": "111", "base-stamina": "128" } },
        { num: "002", name: "charmander", baseDesviacion: "13.892", baseProm: "109", "stats": { "base-attack": "116", "base-defense": "93", "base-stamina": "118" } },
        { num: "003", name: "venusaur", baseDesviacion: "4.933", baseProm: "192", "stats": { "base-attack": "198", "base-defense": "189", "base-stamina": "190" } },
        { num: "004", name: "abra", baseDesviacion: "62.308", baseProm: "123", "stats": { "base-attack": "195", "base-defense": "82", "base-stamina": "93" } },
        { num: "005", name: "grimer", baseDesviacion: "50.083", baseProm: "138", "stats": { "base-attack": "135", "base-defense": "90", "base-stamina": "190" } },
        { num: "006", name: "ho-oh", baseDesviacion: "16.073", baseProm: "232", "stats": { "base-attack": "239", "base-defense": "244", "base-stamina": "214" } }
    ]
    it("deberia calcular los atributos baseDesviacion y baseProm", () => {
        expect(calculoEstadistico(entradaDos)).toEqual(salidaCalculo);
    })
});

describe('ordenarFiltrar', () => {
    it('is a function', () => {
        expect(typeof ordenarFiltrar).toBe('function');
    });
    const salidaOrdenarFiltrar = [
        { num: "002", name: "charmander", type: ["fire"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "006", name: "ho-oh", type: ["fire", "flying"], generation: { "num": "generation ii", "name": "johto" } }
    ]
    it("deberia retornar los pokemon tipo fuego y ordenados por su numero", () => {
        expect(ordenarFiltrar(entrada, "fire", "num")).toEqual(salidaOrdenarFiltrar);
    })
});

describe("filtrarTipo", () => {
    it("deberia ser una funcion", () => {
        expect(typeof filtrarTipo).toBe('function')
    });
    const salidaTipo = [
        { num: "001", name: "bulbasaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "003", name: "venusaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } }
    ]
    it("deberia retornar un array filtrado por tipo", () => {
        expect(filtrarTipo(entrada, "grass")).toEqual(salidaTipo);
    })
})

describe('filtrarRegion', () => {
    it('is a function', () => {
        expect(typeof filtrarRegion).toBe('function');
    });
    const salidaRegion = [
        { num: "001", name: "bulbasaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "002", name: "charmander", type: ["fire"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "003", name: "venusaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "004", name: "abra", type: ["psychic"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "005", name: "grimer", type: ["poison"], generation: { "num": "generation i", "name": "kanto" } }
    ]
    it("Deberia retornar los pokemon de kanto", () => {
        expect(filtrarRegion(entrada, "kanto")).toEqual(salidaRegion);
    })
});

describe('ordenarPokemon', () => {
    it('is a function', () => {
        expect(typeof ordenarPokemon).toBe('function');
    });
    const salidaOrdenar = [
        { num: "004", name: "abra", type: ["psychic"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "001", name: "bulbasaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "002", name: "charmander", type: ["fire"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "005", name: "grimer", type: ["poison"], generation: { "num": "generation i", "name": "kanto" } },
        { num: "006", name: "ho-oh", type: ["fire", "flying"], generation: { "num": "generation ii", "name": "johto" } },
        { num: "003", name: "venusaur", type: ["grass", "poison"], generation: { "num": "generation i", "name": "kanto" } }
    ]
    it("Deberia retornar los pokemon ordenados alfabeticamente", () => {
        expect(ordenarPokemon(entrada, "name", "asc")).toEqual(salidaOrdenar);
    })

});

describe('pokemon', () => {
    it('Deberia ser objeto', () => {
        expect(typeof data).toBe('object');
    });
});
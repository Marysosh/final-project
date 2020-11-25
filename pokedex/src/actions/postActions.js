export const addPokeCards = (allPokemon) => {
    return {
        type: 'ADD_POKECARDS',
        pokeCards: allPokemon
    }
}

export const currentPokemon = (allPokemon) => {
    return {
        type: 'CURRENT_POKEMON',
        currentPokemon: allPokemon
    }
}

export const addCatchDate = (id) => {
    return {
        type: 'ADD_CATCHDATE',
        id
    }
}
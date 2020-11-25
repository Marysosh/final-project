const initState = {
    pokeCards: [],
    currentPokemon: [],
    pokeCatchDates:[],
    colors: {
        normal: ' brown lighten-4 waves-effect waves-light btn-small',
        fighting: 'red darken-3 waves-effect waves-light btn-small',
        flying: ' deep-purple lighten-3 waves-effect waves-light btn-small',
        poison: 'purple lighten-1 waves-effect waves-light btn-small',
        ground: 'amber lighten-3 waves-effect waves-light btn-small',
        rock: ' brown lighten-1 waves-effect waves-light btn-small',
        bug: 'light-green waves-effect waves-light btn-small',
        ghost: 'indigo darken-3 waves-effect waves-light btn-small',
        steel: 'grey lighten-1 waves-effect waves-light btn-small',
        fire: 'orange darken-2 waves-effect waves-light btn-small',
        water: 'blue darken-1 waves-effect waves-light btn-small',
        grass: 'green waves-effect waves-light btn-small',
        electric: 'yellow waves-effect waves-light btn-small',
        psychic: 'pink lighten-1 waves-effect waves-light btn-small',
        ice: 'cyan lighten-3 waves-effect waves-light btn-small',
        dragon: 'deep-purple accent-2 waves-effect waves-light btn-small',
        dark: 'grey darken-3 waves-effect waves-light btn-small',
        fairy: 'pink lighten-3 waves-effect waves-light btn-small',
    }
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_POKECARDS': {
            return {
                ...state,
                pokeCards: { ...state.pokeCards,
                    [action.pokeCards.id]:action.pokeCards }
            }
        }
        case 'CURRENT_POKEMON': {
            return {
                ...state,
                currentPokemon: action.currentPokemon
            }
        }
        case 'ADD_CATCHDATE': {
            let pokeCatchDates = state.pokeCatchDates;
            let today = new Date();
            let date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear()
            pokeCatchDates[action.id] = date;
            return {
                ...state,
                pokeCatchDates
            }
        }
    }
    return state
}

export default rootReducer
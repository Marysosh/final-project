import React, { Component } from 'react';
import fetch from 'node-fetch';
import Cards from './Cards';
import { connect } from 'react-redux';
import { addPokeCards } from '../actions/postActions';

class Caught extends Component {

    addPokeCards = (allPokemon) => {
        this.props.addPokeCards(allPokemon)
    }

    componentDidMount() {
        for (let i=1; i <= 20; i++) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                .then(res => res.json()) 
                .then(allPokemon => { 
                    this.addPokeCards(allPokemon)
                })
        }
    }
    
    render() {
        let component = this;
        const filteredPokeCards= Object.keys(this.props.pokeCatchDates).reduce(function(map, obj) { 
            map[obj] = component.props.pokeCards[obj];
            return map; 
        }, {}); 

        return (
            <div className="container">
                <h4 className="center">Caught Pokemon</h4>
                <div className="row">
                    <Cards pokeCards={filteredPokeCards}/>
                </div>
            </div>
        )
    } 

}

const mapStateToProps = (state) => {
    return {
        pokeCards: state.pokeCards,
        pokeCatchDates: state.pokeCatchDates
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPokeCards: (allPokemon) => { dispatch(addPokeCards(allPokemon))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Caught)
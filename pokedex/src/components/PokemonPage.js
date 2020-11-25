import React, { Component } from 'react';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PokemonPage extends Component {

    componentDidMount() {
            fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.card_id)
                .then(res => res.json()) 
                .then(allPokemon => { 
                    this.setState({currentPokemon: allPokemon});
                })
        }
    
    render() {
        let getPokemon = () => {
        const ID = this.state.currentPokemon.id;
        const pokeCard = this.state.currentPokemon;

        const cardTypes = Object.keys(pokeCard.types).map(type => {
            return (
                <div class={this.props.colors[pokeCard.types[type].type.name] }>{pokeCard.types[type].type.name} </div>
            )
        });

        const catchDate = (this.props.pokeCatchDates[ID]) ? (
            <h5>Catch date: {this.props.pokeCatchDates[ID]}</h5>
        ) : (<h5>Is not caught yet...</h5>);
            
        return ( 
            <div className="row">
                <div className="col s12 offset-m4 m4">
                    <div className="pokeCard card">
                        <div className="card-image">
                            <img src={'https://pokeres.bastionbot.org/images/pokemon/' + ID + '.png'} alt="Pokemon"></img>
                        </div>
                        <div className="card-content">
                            <Link to={'/' + ID}>
                                <span className="card-title">{'#' + pokeCard.id + ' ' + pokeCard.name[0].toUpperCase() + pokeCard.name.slice(1)}</span>
                            </Link>
                            <div>{cardTypes}</div>
                            <div>{catchDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
        };
        let pokemonState = this.state ? 
            getPokemon() : ( <div className="center">No cards yet</div> );

        return (
            <div>{pokemonState}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokeCatchDates: state.pokeCatchDates,
        colors: state.colors

    }
}

export default connect(mapStateToProps)(PokemonPage)
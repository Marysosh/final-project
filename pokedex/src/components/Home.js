import React, { Component } from 'react';
import fetch from 'node-fetch';
import Cards from './Cards';
import { connect } from 'react-redux';
import { addPokeCards } from '../actions/postActions';
import ScrollUpButton from "react-scroll-up-button"; 

class Home extends Component {

    addPokeCards = (allPokemon) => {
        this.props.addPokeCards(allPokemon)
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }


    trackScrolling = () => {
        const wrappedElement = document.getElementById('cards-container');
        if (this.isBottom(wrappedElement)) {
            if (!this.state.hasMore) return;
            let currentPage = this.state.page;
            for (let i=currentPage*20-19; i <= currentPage*20; i++) {  
                fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                    .then(res => res.json()) 
                    .then(allPokemon => {
                        if (allPokemon) {
                            this.addPokeCards(allPokemon);
                        }
                    })
                    .catch(()=>{
                        this.setState({page: currentPage, hasMore: false});
                    });
            }
            this.setState({...this.state, page: currentPage+1});
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);

        for (let i=1; i <= 20; i++) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                .then(res => res.json()) 
                .then(allPokemon => {
                    if (allPokemon) {
                        this.addPokeCards(allPokemon);
                    }
                });
        }

        this.setState({hasMore: true, page: 2});
    }

    componentWillUnmount() {
        document.removeEventListener('scroll',this.trackScrolling);
    }

    render() {
        return (
            <div className="container">
            <h4 className="center">Catch them all!</h4>
                <div className="row" id="cards-container">
                    <Cards pokeCards={this.props.pokeCards}/>
                </div>
                <div>
                    <ScrollUpButton style={{backgroundColor: 'darkBlue'}}/>
                </div>
            </div>
        )
    } 

}

const mapStateToProps = (state) => {
    return {
        pokeCards: state.pokeCards,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPokeCards: (allPokemon) => { dispatch(addPokeCards(allPokemon))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
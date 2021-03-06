import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCatchDate} from '../actions/postActions'


class Card extends Component {

    pokemonCaught = (e) => {
        this.props.addCatchDate(e.target.parentElement.id);
        e.target.style='opacity: 50%; width: 100%';
        e.target.parentElement.className += "btn-floating blue darken-4 right bottom disabled";
    }

    render () {
        let ID = this.props.cardID;
        let pokeCard = this.props.pokeCards[ID];
        let cardTypes = Object.keys(pokeCard.types).map(type => {
            return (
                 <h6 className="blue-text text-darken-4" key={pokeCard.id + type}>{pokeCard.types[type].type.name} </h6>
            )
        });
        
        return (
            <div className="col s12 m4 l3 ">
                <div className="pokeCard card small hoverable" key={'key'}>
                
                    <Link to={'/' + pokeCard.id}>
                        <div className="card-image">
                            <img src={'https://pokeres.bastionbot.org/images/pokemon/' + pokeCard.id + '.png'} alt="Pokemon"></img>
                        </div>
                    </Link>
                
                    <div className="card-content">     
                
                        <Link to={'/' + pokeCard.id}><span className="card-title">{pokeCard.name[0].toUpperCase() + pokeCard.name.slice(1)}</span></Link>
                
                        <a onClick={this.pokemonCaught} id={pokeCard.id} className={'btn-floating blue darken-4 right bottom' + 
                        (this.props.pokeCatchDates[pokeCard.id] ? ' disabled' : ' pulse')}>
                            <img src="https://psv4.userapi.com/c856428/u85219118/docs/d3/906fb83fe4b1/pokeball.png?extra=DAi3ZfXHzm5e74cp7_1xaSmtFosw_cc6Y-Q8elccJp8VBeZGaD2hBmuJFXRFkbE9MUkcvrAiBxzB9sHxq2ve0lNgVlm5hAoOGBXgQBzHgPALgFWvfgIgheappCxeEqhB7r2E2sjX9pTNUC074t3vRfTHDw" 
                                 style={{width: '100%', opacity: this.props.pokeCatchDates[pokeCard.id] ? '50%' : '100%'}}/>
                            {/* Catch! */}
                        </a>
                            
                        <div>{cardTypes}</div>
                    </div>
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
        addCatchDate: (id) => { dispatch (addCatchDate(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
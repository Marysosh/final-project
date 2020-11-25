import React from 'react';
import Card from './Card';

const Cards = (props) => {

    const cards = props.pokeCards ? Object.keys(props.pokeCards).map(card=>{
        return <Card cardID={card} key={card + 39}/>;
    }) : (<div className="center">No cards yet</div>)
    return (
        <div>{cards}</div>
    )
}

export default Cards
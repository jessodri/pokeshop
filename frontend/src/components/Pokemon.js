import React from 'react';

function Pokemon(props) {
    const monsters = props.monsters.map(monster => {
        return (
        <li className="collection-item avatar">
            <img src={monster.sprite} alt="" className="circle" />
            <span className="title">{monster.name}</span>
            <p>Species: {monster.species}</p> 
            <p>Type: {monster.type.join(", ")}</p> 
            <p>Price: ${(monster.price/100).toFixed(2)}</p>
        </li> 
        )
    })
    return monsters;
}

export default Pokemon;
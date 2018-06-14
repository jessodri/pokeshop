import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './components/Pokemon.js';
import Pokemons from './demo_data/pokemon.json'; // Just for testing purposes 

// ReactDOM.render(<Pokemon monsters={Pokemons}/>, document.querySelector('ul.collection'));

const uri = 'http://localhost:3000'

// pokeCollection.addEventListener('click', deletePokemon);

fetchPokemon()
    .then(data => 
        ReactDOM.render(
        <Pokemon monsters={data}/>, document.querySelector('ul.collection')
    ))
    .catch( err => console.log(err))

async function fetchPokemon() {
    let response = await fetch(uri + '/pokemon');
    let pokemon = response.json();
    return pokemon;
}

ReactDOM.render(
    <Pokemon monsters={data}/>, document.querySelector('ul.collection')
)
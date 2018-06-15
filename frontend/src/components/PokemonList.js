import React from 'react'

function PokemonList(props) {
    const pokemon = props.pokemons[0]
    console.log(pokemon.name)
    return <p>{pokemon.name}</p>
}

export default PokemonList
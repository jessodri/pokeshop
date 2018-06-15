import React from 'react'
import PokemonList from './PokemonList.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: [ {
                "name": "Sparky",
                "species": "Pikachu",
                "type": [ "Electric" ],
                "sprite": "https://pokeres.bastionbot.org/images/pokemon/25.png",
                "CP": 1000,
                "price": 3000000
              }, 
              {
                "name": "Sparky",
                "species": "Pikachu",
                "type": [ "Electric" ],
                "sprite": "https://pokeres.bastionbot.org/images/pokemon/25.png",
                "CP": 1000,
                "price": 3000000
              }, 
              {
                "name": "Sparky",
                "species": "Pikachu",
                "type": [ "Electric" ],
                "sprite": "https://pokeres.bastionbot.org/images/pokemon/25.png",
                "CP": 1000,
                "price": 3000000
              }, 
              {
                "name": "Sparky",
                "species": "Pikachu",
                "type": [ "Electric" ],
                "sprite": "https://pokeres.bastionbot.org/images/pokemon/25.png",
                "CP": 1000,
                "price": 3000000
              }
              ],

        }
    }

    render() {
        return ( 
            <PokemonList pokemons={this.state.pokemon}/>
        )

    }

}

export default App
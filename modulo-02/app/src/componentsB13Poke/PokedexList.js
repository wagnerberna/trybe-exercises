import React, { Component } from 'react';
import PokemonCard from './PokemonCard'

class Pokedex extends Component {
  render() {
    const { pokemonsData } = this.props;
    return(
      <>
        <div>
        {/* <p>Console: array / pos0 - name</p>
        {console.log(pokemonsData)}
        {console.log(pokemonsData[0])}
        {console.log(pokemonsData[0].name)} */}
        <h3>Resumo Nomes - Tipos:</h3>
        {pokemonsData.map((el) => (` ${el.name} - ${el.type} /`))}
        </div>
        <div>
          <h3>CARDS:</h3>
          <ul>
            {pokemonsData.map(el => {
            return <PokemonCard pokemonCard={el} />
          })}
          </ul>
        </div>
      </>
    );
  }
}

export default Pokedex;
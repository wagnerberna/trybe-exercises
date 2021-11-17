import React, { Component } from 'react';

class PokemonCard extends Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemonCard;
    return(
      <li key={id}>
        <h3>Nome:{name}</h3>
        <p> Tipo: {type} </p>
        <p>{`Peso Médio: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        Imagem:<img src={image} alt={name} />
      </li>
    );
  }
}

export default PokemonCard;

import React from 'react';

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonCard;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default PokemonCard;
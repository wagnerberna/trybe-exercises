import React, { Component } from 'react';

class BikeCard extends Component {
  render() {
    const { name, color, price, picture } = this.props.bikeCardProps;

    return (
      <section className='bike-Card'>
          <h2>Lista de Bikes:</h2>
          <h3>{name}</h3>
          <img className='img' src={picture} alt="imagem bike"/> <br/>
          <span>Cor: {color} </span>
          <span>R$ {price}</span>
      </section>
    );
  }
}

export default BikeCard;
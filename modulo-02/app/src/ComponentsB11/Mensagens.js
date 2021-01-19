import React, { Component } from 'react';

class Saudacao extends Component {
  render() {
    const comprador = {
      nome: 'Wagner',
      sobrenome: 'Berna',
      idade: 39,
    }
    const bikePromo = {
      name: 'Monark Barra Circular (Raiz)',
    color: 'Azul',
    price: 998,
    picture: 'https://cdn11.bigcommerce.com/s-95wmf4s84x/images/stencil/1280x1280/products/6677/5703/90021-71_ALLEZ-E5-SKYBLU-TARBLK_HERO__78511.1593961430.jpg?c=1'
    }

    return (
      <section>
        {`Bem vindo, ${comprador.nome} ${comprador.sobrenome},
        A soma da sua compra é ${soma(10,5)}`}
        <div>
          <h2>Nossa Bike em promoção é:</h2>
          <h3>{bikePromo.name}</h3>
          <img className='img' src={bikePromo.picture} alt="imagem bike"/> <br/>
          <span>Cor: {bikePromo.color} </span>
          <span>R$ {bikePromo.price}</span>
        </div>
      </section>
    );
  }
}

 const soma = (a, b) => a + b;

export default Saudacao;

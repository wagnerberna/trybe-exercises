import React, { Component } from 'react';

import './B12.css';

class B12 extends Component {
  constructor() {
    super()

    this.handleonChangeNome = this.handleonChangeNome.bind(this)

    this.state = {
      nome: '',
      sobrenome: '',
      idade: 0,
      descricao: ''
    }
  }

  // uma função para cada estado:
  handleonChangeNome(event) {
    this.setState({ nome: event.target.value })
  }

  render() {
    //desestrutura os estados
    // const { nome, sobrenome, idade, descricao } = this.state;

    return(
      <section>
      <h1>Formulário de Cadastro:</h1>
      <form className="forms">
        <label>
          Nome:
          <input
            name="nome"
            type="text"
            value={this.state.nome}
            onChange={this.handleonChange}
          />
        </label>
        <label>
          Sobrenome:
          <input 
            name="sobrenome"
            type="text"
            value={this.state.sobrenome}
            onChange={this.handleonChange}
          />
        </label>
        <label>
          Idade:
          <input 
            name="idade"
            type="number"
            value={this.state.idade}
            onChange={this.handleonChange}
          />
        </label>
        <label>
          Sua descrição:
          <textarea
            name="descricao"
            value={this.state.descricao}
            onChange={this.handleonChange}
          />
        </label>
      </form> 
      </section>
    );
  }
}

export default B12;
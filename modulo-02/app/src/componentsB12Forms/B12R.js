import React, { Component } from 'react';

import './B12.css';

class B12R extends Component {
  constructor() {
    super()

    this.handleonChange = this.handleonChange.bind(this)

    this.state = {
      nome: '',
      sobrenome: '',
      idade: 0,
      descricao: ''
    }
  }

  // Função Genérica
  //desestruturando o evento pegando o target
  handleonChange({target}) {
    //desestruturando o target
    const { name, value } = target;
    // console.log(name, value);

    // função para manipular o estado
    this.setState({ 
      //pega o name e valor do target e joga para o estado
      [name]: value
    })
  }

  render() {
    const { nome, sobrenome, idade, descricao } = this.state;

    return(
      <section>
      <h1>Formulário de Cadastro:</h1>
      <h2>- Refatorado</h2>
      <form className="forms">
        <label>
          Nome:
          <input
            name="nome"
            type="text"
            value={nome}
            onChange={this.handleonChange}
          />
        </label>
        <label>
          Sobrenome:
          <input 
            name="sobrenome"
            type="text"
            value={sobrenome}
            onChange={this.handleonChange}
          />
        </label>
        <label>
          Idade:
          <input 
            name="idade"
            type="number"
            value={idade}
            onChange={this.handleonChange}
          />
        </label>
        <label>
          Sua descrição:
          <textarea
            name="descricao"
            value={descricao}
            onChange={this.handleonChange}
          />
        </label>
      </form> 
      </section>
    );
  }
}

export default B12R;
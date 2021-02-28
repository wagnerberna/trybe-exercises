import React, { Component } from 'react';
import Login from './Login';

class Register extends Component {
  constructor(){
    super()
    this.state = {
      inputLogin:"",
      inputPassword:"",
      inputAge:""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}){
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    // const { inputLogin } = this.state;
    // const { fazerLogin } = this.props;
    return(
      <>
      <h3>Novo Cadastro</h3>
      <form className="forms">
        <label>
          Nome de Usuário:
          <input
          name="inputLogin"
          type="text"
          value={ this.state.inputLogin }
          onChange={ this.handleChange }
          />
        </label>
        <label>
          Senha:
          <input
          name="inputPassword"
          type="text"
          value={ this.state.inputPassword }
          onChange={ this.handleChange }
          />
        </label>
                <label>
          Idade:
          <input
          name="inputAge"
          type="number"
          value={ this.state.inputAge}
          onChange={ this.handleChange }
          />
        </label>
        <br/>
        <button
        type="button"
        onClick={ () => this.props.fazerLogin(this.state.inputLogin) }
        >Login</button>
      </form>
      </>
    );
  }
}

export default Register;
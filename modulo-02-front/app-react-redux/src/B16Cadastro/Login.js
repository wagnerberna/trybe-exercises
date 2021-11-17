import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginDados as loginDadosAction } from '../redux/action/index'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      inputLogin:"",
      inputPassword:""
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
      <h3>Faça seu Login</h3>
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

const mapDispatchToProps = (dispatch) => ({
  fazerLogin: (nome) => dispatch(loginDadosAction(nome))
})

export default connect(null, mapDispatchToProps)(Login);

// export default Login;
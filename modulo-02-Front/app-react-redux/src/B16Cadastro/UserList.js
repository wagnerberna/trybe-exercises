import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  render() {
    const { nome, logado } = this.props;
    return (
      <>
        <h3>Lista de Usuários Cadastrados</h3>
        <ol>
          <li>{nome} Estado:{logado}</li>
        </ol>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.userEstado.username,
  logado: state.userEstado.isLogged,
});

export default connect (mapStateToProps)(UserList);
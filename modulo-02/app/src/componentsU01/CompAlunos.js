import React, { Component } from 'react';

class Alunos extends Component {
  render() {
    const { aluno, nota } = this.props
    const status = this.props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return(
      <div>
      <h3>Aluno / Status</h3>
      <p>
        Nome: { aluno } 
        Nota: { nota } 
        Status: { status }
      </p>
      </div>
    );
  }
}
export default Alunos;
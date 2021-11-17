import React, { Component } from 'react';
import CompAlunos from './CompAlunos';
import './U01.css'

class U01 extends Component {
  render() {
    return(
      // Importando 2x o comp passando props diferentes
      <section className="u01">
        <h1>Notas Alunos:</h1>
        <CompAlunos aluno="Wagner" nota={6.5} />
        <CompAlunos aluno="Aline" nota={7.5} />
      </section>
    );
  }
}

export default U01;
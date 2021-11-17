import React, { Component } from 'react';

import './B11.css';
import Header from './Header';
import SaudacaoInicial from './Mensagens';
import ListaBikes from './ListaBikes';
import { bikesData } from './data';

class B11 extends Component {
  render() {
    return (
      <>
      <Header />
      <SaudacaoInicial />
      <ListaBikes listaBikesProps={bikesData} />
      </>
    );
  }
}

// {acessoDiretoBikes(bikes)}

// function acessoDiretoBikes(bikes) {
//   return console.log(bikes)
  // console.log(bikes[0].name)
// }

export default B11;

import React, { Component } from 'react';
import './App.css';
import Header from './ComponentsB11/Header';
import SaudacaoInicial from './ComponentsB11/Mensagens';
import ListaBikes from './ComponentsB11/ListaBikes';
import { bikesData } from './ComponentsB11/data';

class App extends Component {
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

export default App;

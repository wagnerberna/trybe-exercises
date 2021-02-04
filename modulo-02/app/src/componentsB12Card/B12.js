import React, { Component } from 'react';
import  './B12.css';
import pokemonsData from './data'
import PokedexList from './PokedexList'

function B12() {
  return (
    <div>
      <h1> Pokedex </h1>
      <PokedexList pokemonsData={pokemonsData} />
    </div>
  );
}

export default B12;
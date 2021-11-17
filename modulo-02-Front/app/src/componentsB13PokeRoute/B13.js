import React from 'react';
import './App.css';
import './index.css';
import pokeData from './data';
import PokedexList from './PokedexList';

function B13PokeRoute() {
  return (
    <div className="B13PokeRoute">
      <h1> Pokedex </h1>
      <PokedexList pokeData={pokeData} />
    </div>
  );
}

export default B13PokeRoute;
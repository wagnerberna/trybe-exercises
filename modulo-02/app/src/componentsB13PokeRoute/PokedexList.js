import React from 'react';
import PokemonCard from './PokemonCard';

class PokedexList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: 0
    }
  }

  //função se o número form menor q o array pokedata se for o último el do array volta o estado para 0, senão pega o estado anterior e add 1.
  nextPokemon = (selectedPokemon) => {
    if(selectedPokemon < this.props.pokeData.length -1) {
      this.setState(prevState => ({
      selectedPokemon: prevState.selectedPokemon + 1
      }))
    } else {
        this.setState({
        selectedPokemon: 0
        })
    }
  }

  // MAP para retornar os tipos de pokemons 
  // C/ filter P/ não repetir usando o tipo, posição, e array
  // indexOf apenas a 1ª ocorrência de cada tipo é salva no array
  listTypes = () => {
    return this.props.pokeData.map((el) => el.type)
      .filter((type, index, self) => {
        return self.indexOf(type) === index
      })
  }
  
  render() {
    const { pokeData } = this.props;
    const { selectedPokemon } = this.state;
    return (
      <div className="pokedex">
        {/* card recebe a posição selected do state */}
        <PokemonCard pokemonCard={pokeData[selectedPokemon]} />
        {/* botão next pokemon */}
        <button onClick={() => this.nextPokemon(selectedPokemon)}>Próximo Pokemon</button>
        {/* map P/ criar botões dos tipos, mas fica repetido */}
        {/* {pokeData.map((el) => <button key={el.id}>{el.type}</button> )} */}
        {/* MAP C/ Filter para não repetir botões */}
        {pokeData.map((el) => <button key={el.id}>{el.type}</button> )}
      </div>
    );
  }
}

export default PokedexList;
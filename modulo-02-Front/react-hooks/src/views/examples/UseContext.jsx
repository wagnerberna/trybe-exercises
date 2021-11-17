import React, { useContext, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    const contextMovies = useContext(DataContext);

        function AddMovie(movie) {
            contextMovies.setState({
                ...contextMovies.state, 
                movie,
            })
            console.log(contextMovies.state);
            // Não deu certo
        }   

    function viewMovies(AllMovies) {
        return AllMovies.map((el) => {
            console.log(el.title)
            console.log(el.storyline)
        })
    }

    function filterMovieByName(name) {
        const filterMovie = contextMovies.state.filter((el) => el.title === name);
        return console.log(filterMovie);
    }

    const newMovie = {
        title: "Batman",
        storyline: "Coringa toma Gotam"
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">

            </div>
            
            <div className="center">
                <button className="btn"
                onClick={() => console.log(contextMovies.state)}
                > 
                Lista dos Filmes
                </button>
            </div>

            <div className="center">
                <button className="btn"
                onClick={() => console.log(contextMovies.state[1].title)}
                > 
                Título Array Pos X
                </button>
            </div>

             <div className="center">
                <button className="btn"
                onClick={() => filterMovieByName("Ghost In The Shell")}
                > 
                Filtrar Filme
                </button>
            </div>

            <div className="center">
                <button className="btn"
                onClick={() => viewMovies(contextMovies.state)}
                > 
                Título / Sinopse
                </button>
            </div>

            <div className="center">
                <button className="btn"
                onClick={() => AddMovie(newMovie)}
                > 
                Adicionar Filme
                </button>
            </div>


        </div>
    )
}

export default UseContext;

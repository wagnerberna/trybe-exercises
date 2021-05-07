import React from 'react';
import PageTitle from '../../components/layout/PageTitle';

import { MoviesContext } from '../../../src/contextMovies/movieContext';

const UseContextP = (props) => {
    console.log('teste');
    return (
        // <h1>bla bla bla</h1>
        <MoviesContext.Consumer>
            {(value) => {

        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">

            </div>
            
            <div className="center">
                <button className="btn"
                onClick={() => console.log(value.moviesState)}
                > 
                Lista dos Filmes
                </button>
            </div>
        </div>
            }}
        </MoviesContext.Consumer>
    )
}

export default UseContextP;

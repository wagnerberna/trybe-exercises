import React, { useContext, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import MoviesContext from '../../data/movieContext';

import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    // const { dataMovies } = useContext(MoviesContext);

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
                onClick={() => console.log()}
                > 
                Lista dos Filmes
                </button>
            </div>


        </div>
    )
}

export default UseContext;

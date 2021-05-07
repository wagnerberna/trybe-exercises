import React, { useState, createContext } from 'react';
import  dataMovies from './Data';

const initialState = {
dataMovies
}

export const MoviesContext = createContext(initialState);

export const MoviesProvider = (props) => {

  const[moviesState, setMovies] = useState(MoviesContext);

  return (
    <MoviesContext.Provider value ={ {moviesState, setMovies} }>
      { props.children }
    </MoviesContext.Provider>
  )
}

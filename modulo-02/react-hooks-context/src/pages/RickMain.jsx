import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import ContextMain from '../contextMain/ContextMain';
import RickTable from '../components/RickTable';
import RickCard from '../components/RickCard';
import NavBar from '../components/NavBar';

function RickMain() {
  const { login, logged, resultRickAPI } = useContext(ContextMain);
  return(
    <section>
      {(!logged) ? <Redirect to='/' /> : false }

      <h1>Rick and Morty Principal</h1>
      <h2>{`Bem Vindo ${ login.email }`}</h2>
      <NavBar />
      <RickTable RickArray= { resultRickAPI } />
      <RickCard RickArray= { resultRickAPI } />
    </section>
  )
}

export default RickMain;
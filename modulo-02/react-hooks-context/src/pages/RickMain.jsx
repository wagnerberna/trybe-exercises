import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import ContextMain from '../contextMain/ContextMain';
import RickTable from '../components/RickTable';
import RickCard from '../components/RickCard';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import BtnLogout from '../components/BtnLogout';

function RickMain() {
  const { login, logged, rickFiltered } = useContext(ContextMain);
  return(
    <section>
      {(!logged) ? <Redirect to='/' /> : false }

      <h1>Rick and Morty Principal</h1>
      <h2>{`Bem Vindo ${ login.email }`}</h2>
      <BtnLogout />
      <SearchBar />
      <RickTable RickArray= { rickFiltered } />
      <RickCard RickArray= { rickFiltered } />
    </section>
  )
}

export default RickMain;
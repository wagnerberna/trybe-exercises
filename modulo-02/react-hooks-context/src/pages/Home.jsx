import React from 'react';

import Header from '../components/Header';
import Login from '../components/Login';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <main>
      <Header />
      <Login />
      <NavBar />
    </main>
  )
}

export default Home;
import React, { Component } from 'react';
import NavBar from './NavBar'

class Header extends Component {
  render(){
    return(
      <header className='Header'>
        <h4>Cursos</h4>
        <NavBar />
      </header>
    );
  }
}

export default Header;
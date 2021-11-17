import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './B13.css';

class NavBar extends Component {
  render(){
    return(
        <nav className="NavBar">
          <Link to="/Agenda">Agenda</Link>
          <Link to="/Aulas">Aulas ao Vivo</Link>
          <Link to="/Gabaritos">Gabaritos</Link>
          <Link to="/Talks">Trybe Talks</Link>
        </nav>
    );
  }
}

export default NavBar;
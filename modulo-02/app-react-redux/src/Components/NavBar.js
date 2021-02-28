import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <ul>
          <li><Link to="/B16Cadastro/Home">B16 - Cadastro</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
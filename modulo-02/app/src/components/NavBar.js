import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>  
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/componentsU01/U01">-U-01</Link></li>
          <li><Link to="/componentsB11/B11">-Bloco 11</Link></li>
         <li>
            <Link to="/componentsB12Forms/B12">-Bloco 12 - Forms</Link>
            <Link to="/componentsB12Forms/B12R">-Bloco 12 Refatorado - Forms</Link>
            <Link to="/componentsB12Card/B12">-Bloco 12 - Card </Link>
          </li>
          <li>
            <Link to="/componentsB13API/B13Dog">-Bloco 13 - API - Dog </Link>
            <Link to="/componentsB13API/B13DogR">-Bloco 13 - API - Dog Refatorado </Link>
            <Link to="/componentsB13Pai/B13Pai">-Bloco 13 - Pai - Filho </Link>
            <Link to="/componentsB13Route/B13">-Bloco 13 - Route - Aula </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
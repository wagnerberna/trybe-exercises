import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <ul>  
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/componentsU01/U01">-U-01</Link></li>
          <li><Link to="/componentsB11/B11">-B11</Link></li>
         <li>
            <Link to="/componentsB12Forms/B12">-B12 Forms</Link>
            <Link to="/componentsB12Forms/B12R">-B12 Ref. Forms</Link>
            <Link to="/componentsB12Card/B12">-B12 Poke Card </Link>
          </li>
          <li>
            <Link to="/componentsB13API/B13Dog">-B13 API Dog </Link>
            <Link to="/componentsB13API/B13DogR">-B13 API Dog Ref. </Link>
            <Link to="/componentsB13Pai/B13Pai">-B13 Pai Filho </Link>
            <Link to="/componentsB13Route/B13">-B13 Route Aula </Link>
            <Link to="/componentsB13RouteD/B13RD">-B13 Route Dynamic Aula </Link>
            <Link to="/componentsB13PokeRoute/B13">-B13 Poke Route </Link>
            <Link to="/componentsB13Rev/B13Rev">-B13 Revisão </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
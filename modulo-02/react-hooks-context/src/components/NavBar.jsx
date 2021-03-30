import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return(
    <nav className="NavBar">
      <Link to="/"> Sair </Link>
    </nav>
  )
}

export default NavBar;
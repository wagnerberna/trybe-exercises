import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContentLinks extends Component {
  render() {
    return (
      <nav>
        <Link to="/Teste">Teste</Link>
        <Link to="/ComponentsB11/B11">Bloco 11</Link>
        <Link to="/ComponentsB12/B12">Bloco 12</Link>
        <Link to="/ComponentsB12/B12R">Bloco 12 Refatorado</Link>
      </nav>
    );
  }
}

export default ContentLinks;
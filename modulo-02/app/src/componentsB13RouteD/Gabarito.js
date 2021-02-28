import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gabarito extends Component {
  render(){
    // acessa a props do router, match Objeto con inf. da rota, parâmetros contentDay do arquivo content
    // this.props.match.params.contentDay
    // desestruturando objeto dentro de objeto
    const { match: { params: { contentDay } } } = this.props;

    return(
      <h1>Gabarito do Dia
         { contentDay }
      </h1>
    );
  }
}

Gabarito.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      contentDay: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Gabarito;
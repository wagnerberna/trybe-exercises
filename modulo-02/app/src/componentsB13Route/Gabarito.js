import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gabarito extends Component {
  render(){
    const { availableGabaritosDias } = this.props;
    // console.log(availableGabaritosDias)
    return(
      <section>
        <h1>Gabarito</h1>
        <ul>
          {availableGabaritosDias.map(el => (
          <li key={ el }>{el}</li>
        ))}
        </ul>
      </section>
    );
  }
}

Gabarito.propTypes ={
  availableGabaritosDias: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Gabarito;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Gabaritos extends Component {
  render(){
    const { availableGabaritosDias } = this.props;
    // console.log(availableGabaritosDias)
    return(
      <section>
        <h1>Gabarito</h1>
        <ul>
          {availableGabaritosDias.map(el => (
          <li key={ el }>
          <Link to={ `/Gabarito/${el}` }>{el}</Link>
          {/* {console.log(el)} */}
          </li>
        ))}
        </ul>
      </section>
    );
  }
}

Gabaritos.propTypes ={
  availableGabaritosDias: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Gabaritos;
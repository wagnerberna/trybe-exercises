import React, { Component } from 'react';
import BikeCard from './BikeCard';

class ListaBikes extends Component {
  render() {
    const { listaBikesProps } = this.props;
    return (
      <>
      {listaBikesProps.map(el => {
        return <BikeCard bikeCardProps={el} />
      })}
      </>
    );
  }
}

export default ListaBikes;
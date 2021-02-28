import React from 'react';

class PeopleList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.people.map((person) => <li>{`${person.name} - ${person.age}`}</li>)}
      </ul>
    );
  }
}

export default PeopleList;

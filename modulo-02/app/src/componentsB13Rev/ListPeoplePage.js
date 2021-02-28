import React from 'react';
import PeopleList from './PeopleList';

class ListPeoplePage extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     people: [],
  //   }
  // }

  render() {
    return (
      <section>
        <h2> Página de lista </h2>
        <PeopleList people={this.props.people} />
      </section>
    );
  }
}
// comparar o Virtual DOM com o DOM real

export default ListPeoplePage;
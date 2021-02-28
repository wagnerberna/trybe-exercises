import React from 'react';

// import QuestionList from '../components/QuestionList';


class NewPersonPage extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: [],
    }
  }
  render() {
    const { questions } = this.state;
    return (
      <div>New</div>
    );
  }
}
// comparar o Virtual DOM com o DOM real

export default NewPersonPage;

import React from 'react';


class EditPersonPage extends React.Component {
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

export default EditPersonPage;

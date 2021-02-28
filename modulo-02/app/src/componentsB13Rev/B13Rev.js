import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import EditPersonPage from './EditPersonPage.js';
import NewPersonPage from './NewPersonPage.js';
import ListPeoplePage from './ListPeoplePage.js';

class B13Rev extends Component {
    constructor() {
    super();
    
    this.state = {
      people: [{ name: 'Ícaro', age: 24, id: 0 }, 
      { name: 'Maria Clara', age: 25, id: 1 }],
    }
    
    this.addPerson = this.addPerson.bind(this);
  }
  
  addPerson(person) {
    this.setState({
      people: [...this.state.people, person]
    });
  }

  render() {
    return(
      <main className="App">
        <h1>Lista de pessoas</h1>
        <BrowserRouter>
        <Link to="/new">Adicionar pessoa </Link>
          <Switch>
            <Route path="/edit/:id" component={EditPersonPage} />
            <Route path="/new" render={(props) => <NewPersonPage {...props} addPerson={this.addPerson} />} />
            <Route path="/" render={(props) => <ListPeoplePage {...props} people={this.state.people} />} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default B13Rev;
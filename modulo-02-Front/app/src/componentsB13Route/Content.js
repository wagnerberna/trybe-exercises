import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Agenda from './Agenda';
import Aulas from './Aulas';
import Gabarito from './Gabarito';
import Talks from './Talks';

class Content extends Component {
  constructor() {
    super();
    // Criando variável da classe com os dias de gabarito:
    // dentro do construtor pois vai ser reaproveitado em vários componentes
    this.gabaritosDias = ['12.1', '12.2', '13.1', '13.2'];
    // console.log(this.gabaritosDias);
  }
  // Gabarito usar a props render C/ Arrow (Callback)
  // render recebe como props a var gabaritosDias
  render(){
    return(
      <main>
        <Switch>
          <Route path="/Agenda" component={ Agenda } />
          <Route path="/Aulas" component={ Aulas } />
          <Route path="/Talks" component={ Talks } />
          <Route path="/Gabarito"
            render={ (props) => 
              (<Gabarito { ...props } availableGabaritosDias={ this.gabaritosDias } />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Content;
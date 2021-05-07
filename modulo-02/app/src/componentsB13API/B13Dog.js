import React, { Component } from 'react';

// localStorage armazena URL das imagens dos dogs
class B13Dog extends Component {
  constructor(props) {
    console.log('1-construtor')
    super(props);
    this.state = {
      dogAtual: "",
      localStorage: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveDog = this.saveDog.bind(this);
  }

  //execulta após a montagem dos componentes após carregar o render
  componentDidMount() {
    console.log('3-DidMount')
    this.fetchDog();
  }

  // API - fetch - usafunção .json para conversão do resultado
  // retorna um objeto (com "message" e "status")
  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(res => this.setState({ dogAtual: res}));
  }

  // componente que havalia se atulização deve ou não acontecer
  // se o próximo dog inclui "terrier" no link retorna falso
  // senão vdd e realiza a atualização
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogAtual.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  // executar uma ação após o componente ser atualizado
  // exibe um alerta com a raça do dog
  // split pega entre a 4ª e ª5 barra da URL
  // Armazenar no estado localStorage
  componentDidUpdate() {
    // localStorage.setItem("dogURL", this.state.dogAtual.message);
    const dogRaca = this.state.dogAtual.message.split("/")[4];
      alert(dogRaca);
  }

  // salvar dog no State "LocalStorage" C/ Spread
  saveDog() {
    this.setState(({ dogAtual, localStorage }) => ({
      localStorage: [...localStorage, dogAtual]
    }))
    console.log(localStorage)
  }

  render() {
    console.log('2-Render')
    const { dogAtual, localStorage } = this.state;
    // se dogAtual vazio retorna loading
    // o didMount chama o fetch e depois executa o render novamente.
    if (dogAtual === "") return "loading...";
    return (
      <div>
        <h3>Dog Atual:</h3>
          <button onClick={this.fetchDog}>New Dog</button>
          <button onClick={this.saveDog}>Salve Dog</button>
          <div>
            <img src={dogAtual.message} alt="dog" />
            {console.log(dogAtual.message)}
          </div>
        <h3>List Saved Dogs:</h3>
          <ol>
            {localStorage.map((el, index) => (<li key={index}><img src={el.message} alt="dog" /></li>))}
          </ol>
      </div>
    );
  }
}

export default B13Dog;
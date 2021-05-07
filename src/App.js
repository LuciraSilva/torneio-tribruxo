import { Component } from "react";
import Message from "./components/Message";
import Button from "./components/Button";
import "./styles/App.css";
class App extends Component {
  state = {
    screen: 1,
    chars: [],
    isFighting: [],
  };
  handleStart = () => {
    this.setState({ screen: 2 });
  };
  handleChars = () => {
    const { chars } = this.state;
    let fighters = [];

    for (let i = 0; fighters.length < 4; i++) {
      let char = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      let fighterSameHouse = fighters.some((fighter) => fighter.house === chars[char].house);
      if (!fighterSameHouse) {
        fighters.push(chars[char]);
      }
    }
    this.setState({isFighting: fighters, screen: 3});
  };

  componentDidMount = () => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => this.setState({ chars: response }));
  };
  render() {
    const { screen } = this.state;
    return (
      <div className="App">
        {screen === 1 ? (
          <>
            <Message>Bem-vindo(a) ao torneio tribruxo!</Message>
            <Button handleClick={this.handleStart}>Iniciar Jogo</Button>
          </>
        ) : screen === 2 ? (
          <>
            <Message>Escolha sua casa!!!</Message>
            <Button handleClick={this.handleChars}>Gerar bruxos</Button>
          </>
        ) : screen === 3 ? (
          <>
            <Message>imgs</Message>
            <Button handleClick={this.handleStart}>1, 2, 3... fighting</Button>
          </>
        ) : (
          screen === 4 && (
            <>
              <Message>Vencedor</Message>
              <Button handleClick={this.handleGenerationChar}>
                Gerar bruxos
              </Button>
            </>
          )
        )}
      </div>
    );
  }
}

export default App;

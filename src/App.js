import { Component } from "react";
import CardConteiner from "./components/CardConteiner";
import Card from "./components/Card";
import Button from "./components/Button";
import "./styles/App.css";
class App extends Component {
  state = {
    screen: 1,
    chars: [],
    isFighting: [],
    winner: "",
  };
  handleStart = () => {
    this.setState({ screen: 2 });
  };
  handleChars = () => {
    const { chars } = this.state;
    let fighters = [];

    for (let i = 0; fighters.length < 4; i++) {
      let char = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      let fighterSameHouse = fighters.some(
        (fighter) => fighter.house === chars[char].house
      );
      if (!fighterSameHouse) {
        fighters.push(chars[char]);
      }
    }
    this.setState({ isFighting: fighters, screen: 3 });
  };
  generateWinner = () => {
    const { isFighting } = this.state;
    let winner = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    this.setState({ screen: 4, winner: isFighting[winner] });
  };

  componentDidMount = () => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => this.setState({ chars: response }));
  };
  render() {
    const { screen, isFighting, winner } = this.state;
    return (
      <div className="App">
        {screen === 1 ? (
          <>
            <h1>Bem-vindo(a) ao torneio tribruxo!</h1>
            <Button handleClick={this.handleStart}>Iniciar Jogo</Button>
          </>
        ) : screen === 2 ? (
          <>
            <Button handleClick={this.handleChars}>Gerar bruxos</Button>
          </>
        ) : screen === 3 ? (
          <>
            <CardConteiner isFighting={isFighting} />

            <Button handleClick={this.generateWinner}>
              1, 2, 3... fighting
            </Button>
          </>
        ) : (
          screen === 4 && (
            <>
              <Card
                name={winner.name}
                house={winner.house}
                image={winner.image}
              />
              <h2 id="winner">Vencedor(a)</h2>
            </>
          )
        )}
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import Message from "./components/Message";
import Button from "./components/Button";
import "./styles/App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Message>Bem-vindo(a) ao torneio tribruxo!</Message>
      <Button>iniciar jogo</Button>
      </div>
    );
  }
}

export default App;

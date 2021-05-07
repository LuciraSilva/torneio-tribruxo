import { Component } from "react";
import Card from "../Card";
import "./styles.css";
class CardConteiner extends Component {
  state = {
    fighters: this.props.isFighting,
  };
  render() {
    const { fighters } = this.state;
    return (
      <div className="card-conteiner">
        {fighters.map((fighter) => (
          <Card
            key={fighter.name}
            name={fighter.name}
            house={fighter.house}
            image={fighter.image}
          />
        ))}
      </div>
    );
  }
}
export default CardConteiner;

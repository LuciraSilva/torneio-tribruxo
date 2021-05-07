import { Component } from "react";
import "./styles.css";
export default class Card extends Component {
  state = {
    name: this.props.name,
    house: this.props.house,
    image: this.props.image,
  };
  render() {
    const { name, house, image } = this.state;
    return (
      <div className="card">
        <h3>{name}</h3>
        <p>{house}</p>
        <img src={image} alt={name} />
      </div>
    );
  }
}

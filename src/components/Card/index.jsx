import { Component } from "react";
export default class Card extends Component {
  state = {
    name: this.props.name,
    house: this.props.house,
  };
  render() {
    const { name, house } = this.state;
    return (
      <div className="card">
        <h3>{name}</h3>
        <p>{house}</p>
        <img src="" alt={name} />
      </div>
    );
  }
}

import { Component } from "react";
import "./styles.css";
export default class Card extends Component {
  state = {
    name: this.props.name,
    house: this.props.house,
  };
  render() {
    const { name, house } = this.state;
    return (
      <div className="card">
        <h3>Harry Potter</h3>
        <p>Griffyndor</p>
        <img
          src="https://photo-baomoi.zadn.vn/w700_r1/2020_07_18_106_35727836/0fc15074f83711694826.jpg"
          alt={name}
        />
      </div>
    );
  }
}

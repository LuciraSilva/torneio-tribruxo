import { Component } from "react";
import "./styles.css";
export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick} className="buttons">{this.props.children}</button>
    );
  }
}

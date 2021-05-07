import { Component } from "react";

expor default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.children}</button>
    );
  }
}

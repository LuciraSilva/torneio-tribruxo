import { Component } from "react";

export default class Message extends Component {
    render() {
        return(
            <h2>{this.props.children}</h2>
        );
    }
}
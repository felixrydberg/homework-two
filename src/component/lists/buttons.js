import { Component } from "react";

export default class Buttons extends Component {
    buttons = this.props.list.map((item) => <button data-type={item}>{item.toUpperCase()}</button>)
    render() {

        return <>{this.buttons}</> 
    }
}
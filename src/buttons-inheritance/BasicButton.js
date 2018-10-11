import React from "react";
import 'bulma/css/bulma.css';

export default class BasicButton extends React.Component {
    constructor() {
        super();
        this.className = "is-light";
    }

    clickHandler = () => {
        console.log(`hola: mi clase es ${this.className}`)
    }

    render() {
        return (
            <button style={{ minWidth: 150 }} className={this.className + " button"} onClick={this.clickHandler}>||{this.props.children}||</button>
        )
    }
}
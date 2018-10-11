import React from "react";
import 'bulma/css/bulma.css';
import BasicButton from "./BasicButton";

export default class OrangeButton extends BasicButton {
    constructor() {
        super();
        this.className = "is-warning";
    }

    render () {
        return super.render();
    }
}
import 'bulma/css/bulma.css';
import BasicButton from "./BasicButton";

export default class RedButton extends BasicButton {
    constructor() {
        super();
        this.className = "is-danger";
    }

    render () {
        return super.render();
    }
}
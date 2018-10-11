import React from "react";
import 'bulma/css/bulma.css';
import BasicButton from "./BasicButton";

export default class BuyMobilePhoneWidget extends React.Component {
    render () {
        return (<div><img src="https://assets.pcmag.com/media/images/363653-nokia-lumia-635-t-mobile.jpg?width=673&height=1000" width="100"></img><BasicButton className="is-danger">{this.props.children}</BasicButton></div>
        )
    }
}
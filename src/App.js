import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

// area de herencia - comentar / descomentar según necesitéis
import BasicButton from './buttons-inheritance/BasicButton';
import RedButton from './buttons-inheritance/RedButton';
import OrangeButton from './buttons-inheritance/OrangeButton';

// area de composición - comentar / descomentar según necesitéis
// import BuyMobilePhoneWidget from './buttons-composition/BuyMobilePhoneWidget';
// import BasicButton from './buttons-composition/BasicButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/* area de herencia - comentar / descomentar según necesitéis */}
          <div style={{ marginTop: 50 }}>
            <BasicButton>Botón básico</BasicButton>
            <RedButton>Botón rojo</RedButton>
            <OrangeButton>Botón naranja</OrangeButton>
          </div>

          {/* area de composición - comentar / descomentar según necesitéis */}
          <div style={{marginTop: 50}}>
            {/* <BasicButton>Hola! soy un basic button</BasicButton>
            <BuyMobilePhoneWidget>Buy Microsoft phone</BuyMobilePhoneWidget>
            <BuyMobilePhoneWidget>Buy Iphone phone</BuyMobilePhoneWidget> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;

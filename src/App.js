import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsArray: [],
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    },
    this.enableDisabledButton);
  }

  handleSaveButton(e) {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardsArray,
    } = this.state;

    this.setState({
      cardsArray: [...cardsArray,
        {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        },
      ],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  enableDisabledButton = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attrMaximo = 90;
    const attrMaximoTotal = 210;
    const arrayVerificador = [];

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > attrMaximoTotal) {
      arrayVerificador.push(false);
    }

    Object.entries(this.state).forEach(([chave, valor]) => {
      if (valor === '') {
        arrayVerificador.push(false);
      }

      if (chave.includes('cardAttr')
      && (Number(valor) < 0
      || Number(valor) > attrMaximo
      || Number(valor) === ''
      )) {
        arrayVerificador.push(false);
      }
    });

    if (arrayVerificador.includes(false)) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleInputChange }
          onSaveButtonClick={ this.handleSaveButton }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

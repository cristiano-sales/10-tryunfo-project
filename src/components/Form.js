// Ref.: Leonardo Vogel
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (

      <form className="form">
        <Input
          type="text"
          testid="name-input"
          label="Nome da Carta:"
          id="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          type="textarea"
          testid="description-input"
          label="Descrição da Carta:"
          id="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr1-input"
          label="Atributo 1:"
          id="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr2-input"
          label="Atributo 2:"
          id="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr3-input"
          label="Atributo 3:"
          id="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          testid="image-input"
          label="Imagem:"
          id="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          type="select"
          testid="rare-input"
          label="Raridade  da Carta:"
          id="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <Input
          type="checkbox"
          testid="trunfo-input"
          label="Super Trunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        /> }
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

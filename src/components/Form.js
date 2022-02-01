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
      //  hasTrunfo,
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
          id="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          type="textarea"
          testid="description-input"
          label="Descrição da Carta:"
          id="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr1-input"
          label="Atributo 1:"
          id="attr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr2-input"
          label="Atributo 2:"
          id="attr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr3-input"
          label="Atributo 3:"
          id="attr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          testid="image-input"
          label="Imagem:"
          id="image"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          type="select"
          testid="rare-input"
          label="Raridade  da Carta:"
          id="rare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        <Input
          type="checkbox"
          testid="trunfo-input"
          label="Super Trunfo"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
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
  //  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

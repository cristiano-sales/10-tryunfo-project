// Ref.: Leonardo Vogel
import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <Input
          type="text"
          testid="name-input"
          label="Nome da Carta:"
          id="name"
        />
        <Input
          type="textarea"
          testid="description-input"
          label="Descrição da Carta:"
          id="description"
        />
        <Input
          type="number"
          testid="attr1-input"
          label="Atributo 1:"
          id="attr1"
        />
        <Input
          type="number"
          testid="attr2-input"
          label="Atributo 2:"
          id="attr2"
        />
        <Input
          type="number"
          testid="attr3-input"
          label="Atributo 3:"
          id="attr3"
        />
        <Input
          type="text"
          testid="image-input"
          label="Imagem:"
          id="image"
        />
        <Input
          type="select"
          testid="rare-input"
          label="Raridade  da Carta:"
          id="rare"
        />
        <Input
          type="checkbox"
          testid="trunfo-input"
          label="Super Trunfo"
          id="trunfo"
        />
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>

    );
  }
}

export default Form;

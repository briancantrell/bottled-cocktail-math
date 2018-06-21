import React from 'react';
import { connect } from 'react-redux';

function Ingredient({ id, name, quantity, units, dispatch }) {
  let nameInput, quantityInput, unitInput;
  return(
    <label>
      <input size="5" value={quantity} ref={node => {
        quantityInput = node
      }}
      onChange={() => {
        dispatch({
          type: 'UPDATE_INGREDIENT',
          id: id,
          name: nameInput.value,
          quantity: quantityInput.value,
          units: unitInput.value
        })
      }}
    />
    <select readOnly value={units} ref={node => {
      unitInput = node
    }}>
      <option value="oz">Oz</option>
    </select>

    <input value={name} ref={node => {
      nameInput = node
    }}
    onChange={() => {
      dispatch({
        type: 'UPDATE_INGREDIENT',
        id: id,
        name: nameInput.value,
        quantity: quantityInput.value,
        units: unitInput.value
      })
    }}
  />
  <button onClick={ () => { dispatch({type: "REMOVE_INGREDIENT", id: id}) }}>remove</button>
  </label>
  )
}

export default connect()(Ingredient);

import React from 'react';
import UnitPicker from 'components/unit_picker'

function Ingredient({ id, name, quantity, units, dispatch }) {
  let nameInput, quantityInput
  return(
    <label>
      <input size="5" value={quantity} ref={node => {
        quantityInput = node
      }}
      onChange={() => {
        dispatch({
          type: 'UPDATE_INGREDIENT',
          id: id,
          quantity: quantityInput.value
        })
      }}
    />

  <UnitPicker
    units={ units }
    onChange={ (unitVal) => {
      dispatch({
        type: 'UPDATE_INGREDIENT',
        id: id,
        units: unitVal
      })
      }
    }
  />

    <input value={name} ref={node => {
      nameInput = node
    }}
    onChange={() => {
      dispatch({
        type: 'UPDATE_INGREDIENT',
        id: id,
        name: nameInput.value,
      })
    }}
  />
  <button onClick={ () => { dispatch({type: "REMOVE_INGREDIENT", id: id}) }}>remove</button>
  </label>
  )
}

export default Ingredient;

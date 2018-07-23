import React from 'react';
import UnitPicker from 'components/unit_picker'
import QuantityContainer from 'containers/quantity_container'
import IngredientNameContainer from 'containers/ingredient_name_container'

function Ingredient({ id, name, quantity, units, dispatch }) {
  return(
    <li>
      <QuantityContainer value={ quantity } id={ id } size={ 2 } />

      <UnitPicker
        currentUnits={ units }
        availableUnits={ ["oz", "ml", "dashes", "ct"] }
        onChange={ (unitVal) => {
          dispatch({
            type: 'UPDATE_INGREDIENT',
            id: id,
            units: unitVal
          })
          }
        }
      />

      <IngredientNameContainer value={name} id={ id } />

      <button
        onClick={ () => { dispatch({type: "REMOVE_INGREDIENT", id: id}) }}
      >
        X
      </button>
    </li>
  )
}

export default Ingredient;

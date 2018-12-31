import React from 'react';
import UnitPicker from 'components/unit_picker'
import QuantityContainer from 'containers/quantity_container'
import IngredientNameContainer from 'containers/ingredient_name_container'

function Ingredient({ id, name, quantity, units, dispatch, onUnitPickerChange }) {
  return(
    <div className="form-row">
      <QuantityContainer value={ quantity } id={ id } size={ 2 } />

      <UnitPicker
        currentUnits={ units }
        availableUnits={ ["oz", "ml", "dashes", "ct"] }
        onChange={ onUnitPickerChange }
      />

      <IngredientNameContainer 
        value={name} 
        id={ id } 
      />

      <button
        onClick={ () => { dispatch({type: "REMOVE_INGREDIENT", id: id}) }}
      >
        X
      </button>
    </div>
  )
}

export default Ingredient;

import React from 'react'
import { connect } from 'react-redux'
import IngredientNameContainer from 'containers/ingredient_name_container'
import QuantityContainer from 'containers/quantity_container'

function Ingredient({ id, name, quantity, units, dispatch}) {
  let unitInput;
  return(
    <li>
      <QuantityContainer value={ quantity } id={ id } size={ 2 } />
      <select readOnly value={units} ref={node => {
        unitInput = node
      }}>
        <option value="oz">Oz</option>
      </select>

      <IngredientNameContainer value={name} id={ id } />

      <button
        onClick={ () =>
          { dispatch({type: "REMOVE_INGREDIENT", id: id}) }}>X
        </button>
  </li>
  )
}

export default connect()(Ingredient);

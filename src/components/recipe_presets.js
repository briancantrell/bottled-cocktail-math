import React from 'react';
import { connect } from 'react-redux'

function RecipePresets({ recipes, dispatch }) {
  return(
    <select 
      className={ "component" }
      onChange={ (e) => {
          dispatch({"type": "RECIPE_PRESET"})
      }}
    >
      { recipes.map( (recipe) => {
        return(
          <option value={ recipe.key }>
            { recipe.name }
          </option>
        )
      }
      )}
    </select>
  )
}
export default connect()(RecipePresets);


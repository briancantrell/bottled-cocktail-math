import React from 'react';
import { connect } from 'react-redux';

function AddIngredient({dispatch}) {
  return(
    <button
        onClick={() => {
          dispatch({
            type: 'ADD_INGREDIENT'
          })
        }}
      >Add ingredient
    </button>
  )
}

export default connect()(AddIngredient);

import React from 'react';
import { connect } from 'react-redux';
import { ADD_INGREDIENT } from '../actions/index'

function AddIngredient({dispatch}) {
  return(
    <div className="form-row test">
      <button
          onClick={() => {
            dispatch({
              type: ADD_INGREDIENT
            })
          }}
        >Add ingredient
      </button>
    </div>
  )
}

export default connect()(AddIngredient);

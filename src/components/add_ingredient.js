import React from 'react';
import { connect } from 'react-redux';

function AddIngredient({dispatch}) {
  return(
    <div className="form-row">
      <button
          onClick={() => {
            dispatch({
              type: 'ADD_INGREDIENT'
            })
          }}
        >Add ingredient
      </button>
    </div>
  )
}

export default connect()(AddIngredient);

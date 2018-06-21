import React from 'react';
import Ingredient from '../containers/ingredient';
import { connect } from 'react-redux';

class IngredientList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.ingredients.map(ingredient =>
                                    <li key={ingredient.id}>
                                    <Ingredient
                                      id={ingredient.id}
                                      name={ingredient.name}
                                      units={ingredient.units}
                                      quantity={ingredient.quantity} />
                                 </li>
                                 )}
     </ul>

    )
  }
}

const mapStateToProps = (state) => {
    return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(IngredientList);

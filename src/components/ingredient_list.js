import React from 'react';
import IngredientContainer from '../containers/ingredient_container';
import { connect } from 'react-redux';

class IngredientList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.ingredients.map(ingredient =>
                                    <li key={ingredient.id}>
                                    <IngredientContainer
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

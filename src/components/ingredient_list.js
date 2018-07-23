import React from 'react';
import IngredientContainer from 'containers/ingredient_container';
import { connect } from 'react-redux';

class IngredientList extends React.Component {
  render() {
    const ingredients = this.props.ingredients
    return (
      <ul>
        {ingredients.map(ingredient =>
                         <IngredientContainer
                           key={ ingredient.id }
                           id={ingredient.id}
                           name={ingredient.name}
                           units={ingredient.units}
                           quantity={ingredient.quantity} />
                        )}
                      </ul>

    )
  }
}

const mapStateToProps = (state) => {
    return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(IngredientList);

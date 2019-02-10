import { connect } from 'react-redux';
import Ingredient from '../components/ingredient';
import { UpdateIngredientUnits, RemoveIngredient } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onUnitPickerChange: (e) => {
      dispatch(
        UpdateIngredientUnits(
          e.target.id,
          e.target.value
        )
      )
    },
    onRemoveClick: (e) => {
      dispatch(
        RemoveIngredient(e.target.id)
      )
    }
  }
}
const mapStateToProps = (state) => { 
  return state
}

const IngredientContainer = connect(
  mapStateToProps,
	mapDispatchToProps,
)(Ingredient);

export default IngredientContainer;
import { connect } from 'react-redux';
import Ingredient from '../components/ingredient';
import { UpdateIngredientUnits } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onUnitPickerChange: (e) => {
      dispatch(
        UpdateIngredientUnits(
          Number(e.target.id),
          e.target.value
        )
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
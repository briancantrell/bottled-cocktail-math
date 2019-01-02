import { connect } from 'react-redux'
import TextInput from 'components/text_input'
import { UpdateIngredientQuantity } from '../actions/index'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (e) => {
      dispatch(
        UpdateIngredientQuantity(
          Number(e.target.id),
          Number(e.target.value),
        )  
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);

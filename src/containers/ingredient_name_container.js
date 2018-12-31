import { connect } from 'react-redux'
import TextInput from 'components/text_input'
import { UpdateIngredientName } from '../actions/index'

const mapStateToProps = (state) => {
  return { }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (e) => {
      dispatch(
        UpdateIngredientName(
          Number(e.target.id),
          e.target.value,
        ) 
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);


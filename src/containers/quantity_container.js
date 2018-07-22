import { connect } from 'react-redux'
import TextInput from 'components/text_input'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (e) => {
      dispatch({
        type: 'UPDATE_INGREDIENT',
        quantity: e.target.value,
        id: e.target.id
      })
  }
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);

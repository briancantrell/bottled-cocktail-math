import { connect } from 'react-redux'
import Bottles from 'components/bottles'

const mapStateToProps = (state) => {
  let { bottleSize, bottleCount } = state.bottles
  return { bottleSize: bottleSize, bottleCount: bottleCount }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBottleCountChange: (e) => {
      dispatch({
				type: 'UPDATE_BOTTLE_COUNT',
				bottleCount: e.target.value,
			})
    },
    onBottleSizeChange: (e) => {
      dispatch({
				type: 'UPDATE_BOTTLE_SIZE',
				bottleCount: e.target.value,
			})
    }
	}
}

const BottlesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Bottles)

export default BottlesContainer

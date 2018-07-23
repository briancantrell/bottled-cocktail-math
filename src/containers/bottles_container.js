import { connect } from 'react-redux'
import Bottles from 'components/bottles'

const mapStateToProps = (state) => {
  let { bottleSize, bottleCount, bottleUnit } = state.bottles
  return {
    bottleSize: bottleSize,
    bottleCount: bottleCount,
    bottleUnit: bottleUnit
  }
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
				bottleSize: e.target.value,
			})
    },
    onBottleUnitChange: (e) => {
      dispatch({
				type: 'UPDATE_BOTTLE_UNIT',
				bottleUnit: e,
			})
    }
	}
}

const BottlesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Bottles)

export default BottlesContainer

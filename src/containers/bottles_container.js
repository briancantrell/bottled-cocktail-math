import { connect } from 'react-redux'
import Bottles from 'components/bottles'
import { UpdateBottleSize, UpdateBottleCount, UpdateBottleUnits } from '../actions/bottles';

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
      dispatch(
        UpdateBottleCount(
          Number(e.target.value)
        )
			)
    },
    onBottleSizeChange: (e) => {
      dispatch(
        UpdateBottleSize(
          Number(e.target.value)
        )
      )
    },
    onBottleUnitChange: (e) => {
      dispatch( 
        UpdateBottleUnits(
          e.target.value
        )
      )
    }
	}
}

const BottlesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Bottles)

export default BottlesContainer

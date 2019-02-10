import { connect } from 'react-redux'
import Totals from '../components/totals'

const mapStateToProps = (state) => {
  return {
    ingredientTotals: state.ingredientTotals, 
    formattedDrinkVolume: state.formattedDrinkVolume, 
    drinksPerBottle: state.drinksPerBottle, 
    totalServings: state.totalServings,
  }
}

export default connect(mapStateToProps)(Totals)
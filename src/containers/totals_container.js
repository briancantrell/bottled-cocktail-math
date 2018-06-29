import { connect } from 'react-redux'
import Totals from '../components/totals'

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    bottles: state.bottles,
    dilutionProfile: state.dilutionProfile
  }
}

const TotalsContainer = connect(mapStateToProps)(Totals)

export default TotalsContainer



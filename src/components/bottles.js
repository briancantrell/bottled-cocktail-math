import React from 'react'
import PropTypes from 'prop-types'
import UnitPicker from 'components/unit_picker'

function Bottles({ bottleSize, bottleCount, bottleUnit, onBottleSizeChange, onBottleCountChange, onBottleUnitChange }) {
  return(
    <div className="bottle-input">
      <label>
        Bottle count:
        <input
          className="bottle-count-input"
          value={ bottleCount }
          onChange={ onBottleCountChange }
        />
      </label>

      <label>
        Bottle size:
        <div className="form-row">
          <input
            className="bottle-size-input"
            value={ bottleSize }
            onChange={ onBottleSizeChange }
            size={ 3 }
          />
          <UnitPicker
            currentUnits={ bottleUnit }
            availableUnits={ ["ml", "oz"] }
            onChange={ onBottleUnitChange }
          />
        </div>
      </label>
    </div>
  )
}

Bottles.propTypes = {
  bottleSize: PropTypes.string,
  bottleCount: PropTypes.string,
}

export default Bottles

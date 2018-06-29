import React from 'react'
import PropTypes from 'prop-types'

function Bottles({ bottleSize, bottleCount, onBottleSizeChange, onBottleCountChange }) {
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
        <input
          className="bottle-size-input"
          value={bottleSize}
					onChange={ onBottleSizeChange }
				/>
      </label>
    </div>
  )
}

Bottles.propTypes = {
  bottleSize: PropTypes.string,
  bottleCount: PropTypes.string,
}

export default Bottles;

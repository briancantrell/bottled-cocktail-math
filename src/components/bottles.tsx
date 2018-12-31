import * as React from 'react'
import * as PropTypes from 'prop-types'
import UnitPicker from './unit_picker'

interface BottleSpec {
  bottleSize: number;
  bottleCount: number;
  bottleUnit: string;
  id?: number;
}

interface BottleComponent extends BottleSpec {
  onBottleSizeChange(event: any) : void;
  onBottleCountChange(event: any) : void;
  onBottleUnitChange(event: any) : void;
}

function Bottles({ 
  bottleSize, 
  bottleCount, 
  bottleUnit, 
  onBottleSizeChange, 
  onBottleCountChange, 
  onBottleUnitChange,
  id 
}: BottleComponent ) {
  return(
    <div className="bottle-input">
      <label>
        Bottle count:
        <input
          className="bottle-count-input"
          value={ bottleCount }
          onChange={ onBottleCountChange } />
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
            id= { id }
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
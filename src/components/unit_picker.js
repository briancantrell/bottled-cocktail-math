import React from 'react'

function UnitPicker({ currentUnits, availableUnits, onChange }) {
  let unitInput
  const unitOptions = [
    { value: "oz", name: "oz" },
    { value: "ml", name: "ml" },
    { value: "ct", name: "count" },
    { value: "dashes", name: "dashes" }
  ].filter( unit => availableUnits.indexOf(unit.value) !== -1 )
  return(
    <select
      value={currentUnits}
      ref={node => {
        unitInput = node
      }}
      onChange={ () => { onChange(unitInput.value) }}
    >
      { unitOptions.map( (unitOption) => {
        return <option 
          value={ unitOption.value }
          key={ unitOption.value }
        >
            { unitOption.name }
          </option>
      })}
    </select>
  )
}
export default UnitPicker


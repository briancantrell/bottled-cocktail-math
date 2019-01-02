import React from 'react'

function UnitPicker({ currentUnits, availableUnits, onChange, id }) {
  let unitInput
  const unitOptions = [
    { value: "oz", name: "oz" },
    { value: "ml", name: "ml" },
    { value: "ct", name: "count" },
    { value: "dashes", name: "dashes" }
  ].filter( unit => availableUnits.indexOf(unit.value) !== -1 )
  return(
    <select
      className="unit-picker"
      value={currentUnits}
      id= { id }
      onChange={ (e) => { onChange(e) }}
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
import React from 'react'

function UnitPicker({ units, onChange }) {
  let unitInput
  return(
    <select readOnly
      value={units}
      ref={node => {
        unitInput = node
      }}
      onChange={ () => { onChange(unitInput.value) }}
    >
      <option value="oz">oz</option>
      <option value="ml">ml</option>
      <option value="ct">count</option>
      <option value="dashes">dashes</option>
    </select>
  )
}
export default UnitPicker


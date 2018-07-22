import React from 'react';

function TextInput({ value, changeHandler, id, size=20 }) {
  return(
    <input
      size={ size }
      value={ value }
      id= { id }
      onChange={ changeHandler }
      className={"component"}
    />
  )
}
export default TextInput;

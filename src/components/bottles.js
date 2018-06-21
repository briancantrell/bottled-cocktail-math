import React from 'react';
import { connect } from 'react-redux';

function Bottles({ bottleSize, bottleCount, dispatch }) {
  let bottleCountInput, bottleSizeInput;
  return(
    <div className="bottle-input">
      <label>
        Bottle count:
        <input value={bottleCount} ref={node => {
          bottleCountInput = node
        }}
        onChange={(event) => {
          dispatch({
            type: 'UPDATE_BOTTLES',
            bottleCount: bottleCountInput.value,
            bottleSize: bottleSizeInput.value
          })
        }}
      />
      </label>

      <label>
        Bottle size:
        <input value={bottleSize} ref={node => {
          bottleSizeInput = node
        }}
        onChange={(event) => {
          dispatch({
            type: 'UPDATE_BOTTLES',
            bottleCount: bottleCountInput.value,
            bottleSize: bottleSizeInput.value
          })
        }}
      />
      </label>
    </div>
  )
}

const mapStateToProps = (state) => {
  let { bottleSize, bottleCount } = state.bottles;
  return { bottleSize: bottleSize, bottleCount: bottleCount };
};

export default connect(mapStateToProps)(Bottles);

import React from 'react';
import { connect } from 'react-redux';

function DilutionProfile({ dilutionProfile, dispatch }) {
  let dilutionInput;
  return(
    <label>
      Dilution profile:
      <select className="dilution-profile"
        value={dilutionProfile} ref={node => {
        dilutionInput = node
      }}
        onChange={(event) => {
          dispatch({
            type: 'UPDATE_DILUTION_PROFILE',
            dilutionProfile: dilutionInput.value
          })
        }}
    >
        <option value="built">Built</option>
        <option value="stirred">Stirred</option>
        <option value="shaken">Shaken</option>
        <option value="none">No dilution</option>
      </select>
    </label>
  )
}
const mapStateToProps = (state) => {
  return { dilutionProfile: state.dilutionProfile };
};
export default connect(mapStateToProps)(DilutionProfile);

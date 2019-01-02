const dilutionProfile = (state = "shaken", action) => {
  switch (action.type) {
    case 'UPDATE_DILUTION_PROFILE':
      return action.dilutionProfile
    default:
      return state;
  }
}

export default dilutionProfile;
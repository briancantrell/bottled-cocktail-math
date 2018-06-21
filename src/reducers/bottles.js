const bottles = (state = {bottleSize: 187, bottleCount: 3}, action) => {
  switch (action.type) {
    case 'UPDATE_BOTTLES':
      return {
        bottleSize: action.bottleSize,
        bottleCount: action.bottleCount
      };
    default:
      return state;
  }
}

export default bottles;

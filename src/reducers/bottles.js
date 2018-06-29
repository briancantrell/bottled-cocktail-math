const bottles = (state = {bottleSize: "187", bottleCount: "3"}, action) => {
  switch (action.type) {
    case 'UPDATE_BOTTLE_SIZE':
      return {
        ...state,
        bottleSize: action.bottleSize,
      }
    case 'UPDATE_BOTTLE_COUNT':
      return {
        ...state,
        bottleCount: action.bottleCount,
      }
    default:
      return state
  }
}

export default bottles

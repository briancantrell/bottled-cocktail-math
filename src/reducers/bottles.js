const bottles = (state = {bottleSize: "187", bottleCount: "3", bottleUnit: "ml"}, action) => {
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
    case 'UPDATE_BOTTLE_UNIT':
      return {
        ...state,
        bottleUnit: action.bottleUnit,
      }
    default:
      console.log(state)
      return state
  }
}

export default bottles

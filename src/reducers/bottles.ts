import { BottleAction, UPDATE_BOTTLE_SIZE, UPDATE_BOTTLE_COUNT, UPDATE_BOTTLE_UNITS } from '../actions/bottles'

const bottles = (state = {bottleSize: 187, bottleCount: 3, bottleUnit: "ml"}, action: BottleAction) => {
  switch (action.type) {
    case UPDATE_BOTTLE_SIZE:
      return {
        ...state,
        bottleSize: action.value,
      }
    case UPDATE_BOTTLE_COUNT:
      return {
        ...state,
        bottleCount: action.value,
      }
    case UPDATE_BOTTLE_UNITS:
      return {
        ...state,
        bottleUnit: action.value,
      }
    default:
      return state
  }
}

export default bottles

import { manhattan } from '../cocktail_ingredients'
import * as actions from '../actions/index'

let idCounter = manhattan.length
interface RecipeIngredient {
  id: number;
  name: string;
  units: string;
  quantity: number;
}

interface IngredientReducerFunc {
  (state: RecipeIngredient[], action: actions.IngredientAction): any
}

let ingredients_reducer: IngredientReducerFunc;
ingredients_reducer = (state = manhattan, action): RecipeIngredient[] => {  
  switch (action.type) {
    case actions.UPDATE_INGREDIENT_QUANTITY:
      // TODO: find a way to do this without id matching
      return state.map((ingredient) => {
        if(ingredient.id === action.id) {
          return {
            ...ingredient,
            quantity: action.value,
          }
        }else{ return ingredient }
      })
    case actions.UPDATE_INGREDIENT_NAME:
      return state.map((ingredient) => {
        if(ingredient.id === action.id) {
          return {
            ...ingredient,
            name: action.value,
          }
        }else{ return ingredient }
      })
    case actions.UPDATE_INGREDIENT_UNITS:
      return state.map((ingredient) => {
        if(ingredient.id === action.id) {
          return {
            ...ingredient,
            units: action.value,
          }
        }else{ return ingredient }
      })

    default:
      return state
  }
}

export default ingredients_reducer
import { manhattan } from '../cocktail_ingredients'
import * as actions from '../actions/index'
import { RecipeIngredient } from '../types/ingredient';
import uuidv1 from 'uuid/v1';

interface IngredientReducerFunc {
  (state: RecipeIngredient[], 
    action: actions.IngredientAction): 
      RecipeIngredient[]
}

let ingredients_reducer: IngredientReducerFunc;
ingredients_reducer = (state = manhattan, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return state.concat([{name: "", units: "", quantity: 0, id: uuidv1()}])
    
    case actions.REMOVE_INGREDIENT:
      return state.filter((ingredient) => {
        console.log(action, ingredient)
        return ingredient.id !== action.id
      })

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
import { manhattan } from '../cocktail_ingredients'

let idCounter = manhattan.length;

const ingredients = (state = manhattan, action) => {
  switch (action.type) {
    case 'UPDATE_INGREDIENT':
      console.log(action);
      let updated_state = state.map( (ingredient) => {
        if(parseInt(ingredient.id) === parseInt(action.id)) {
          return({
            ...ingredient,
            ...action
          })
        }else{
          return ingredient
        }
      })
      console.log(updated_state);
      return updated_state;
    case 'ADD_INGREDIENT':
      return [
      ...state,
      {
        quantity: 0,
        units: "oz",
        name: "",
        id: idCounter+=1
      }
    ]
    case 'REMOVE_INGREDIENT':
      return state.filter( (ingredient) => ingredient.id !== action.id );

    default:
      return state;
  }
}

export default ingredients;

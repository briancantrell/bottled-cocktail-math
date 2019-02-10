import * as actions from '../actions/index'
import { RecipeIngredient } from '../types/ingredient';
import { ozToMl, mlToOz, toBatchFriendlyUnits } from '../utils/units'
import { ingredientsWithDilution } from '../utils/dilution'

function totalIngredients (ingredients, totalServings) {
  return ingredients.map( (ingredient) => {
    let ingredientInBatchUnits = toBatchFriendlyUnits(ingredient)

    return {
      ...ingredientInBatchUnits,
      quantity: ingredientInBatchUnits.quantity * totalServings,
    }
  })
}

function bottleSizeToMl(bottles) {
  if(bottles.bottleUnit === "oz") {
    return ozToMl(bottles.bottleSize)
  }else{
    return bottles.bottleSize
  }
}

function calculateTotals(ingredients, dilutionProfile, bottles) {
  const ingredientsInBatchUnits = ingredients.map(toBatchFriendlyUnits)
  const ingredientsWithWater = ingredientsWithDilution(
    ingredientsInBatchUnits,
    dilutionProfile
  )

  const drinkVolume = ingredientsWithWater.reduce(
    (total, ingredient) => { return total + ingredient.quantity }, 0
  )

  const bottleSizeInMl = bottleSizeToMl(bottles)
  const drinksPerBottle = Math.floor(bottleSizeInMl / drinkVolume)
  const formattedDrinkVolume = mlToOz(drinkVolume).toFixed(1)
  const totalServings = drinksPerBottle * bottles.bottleCount

  return {
    ingredientTotals: totalIngredients(ingredientsWithWater, totalServings),
    drinksPerBottle,
    formattedDrinkVolume,
    totalServings: totalServings,
  }
}

interface TotalReducerFunc {
  (state: any, action: any): {
    ingredientTotals: RecipeIngredient[];
    formattedDrinkVolume: number;
    drinksPerBottle: number;
    totalServings: number;
  }
}

let totalReducer: TotalReducerFunc;
totalReducer = (state = { dilutionProfile: "shaken", bottles: 1, ingredients: []}, action) => {
    
    switch (action.type) {
      default:
        const totals = calculateTotals(
          state.ingredients, 
          state.dilutionProfile, 
          state.bottles
        )
        
        return {
          ...state,
          ...totals,
        }
    }
}

export default totalReducer
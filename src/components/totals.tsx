import React from 'react'
import { ozToMl, mlToOz, toBatchFriendlyUnits } from '../utils/units'
import { ingredientsWithDilution } from '../utils/dilution'
import { RecipeIngredient } from '../types/ingredient';


// TODO: move all this logic to src/reducers/totals.ts
function totalIngredients (ingredients, totalServings) {
  return ingredients.map( (ingredient) => {
    let ingredientInBatchUnits = toBatchFriendlyUnits(ingredient)

    return {
      ...ingredientInBatchUnits,
      quantity: ingredientInBatchUnits.quantity * totalServings,
    }
  })
}

function ingredientLine(ingredient: RecipeIngredient) {
  const quantityString = `${Math.round(ingredient.quantity)} ${ingredient.units}`
  return(
    <li key={ingredient.id}>
      <span className="quantity">{quantityString}</span> <span>{ingredient.name}</span>
    </li>
  )
}

function Totals({ ingredients, bottles, dilutionProfile }) {
  const ingredientsInBatchUnits = ingredients.map(toBatchFriendlyUnits)
  const ingredientsWithWater = ingredientsWithDilution(
    ingredientsInBatchUnits,
    dilutionProfile
  )

  let drinkVolume = ingredientsWithWater.reduce(
    (total, ingredient) => { return total + ingredient.quantity }, 0
  )

  let bottleSizeInMl = 0
  if(bottles.bottleUnit === "oz") {
    bottleSizeInMl = ozToMl(bottles.bottleSize)
  }else{
    bottleSizeInMl = bottles.bottleSize
  }

  let drinksPerBottle = Math.floor(bottleSizeInMl / drinkVolume)
  let formattedDrinkVolume = mlToOz(drinkVolume).toFixed(2)
  
  let totalServings = drinksPerBottle * bottles.bottleCount
  let ingredientTotals = totalIngredients(ingredientsWithWater, totalServings)

  return(
    <div className="totals">
      <ul className="batch-quantities">
        <li>
          <strong>Batch Quantities</strong>
        </li>

        {ingredientTotals.map( (ingredient) => {
          return ingredientLine(ingredient)
        })}
      </ul>
      <ul className="serving-info">
        <li>
          <strong>Serving Info</strong>
        </li>
        <li className="border-top">
           <span className="quantity">{formattedDrinkVolume} oz</span><span>drink volume</span>
        </li>
        <li>
           <span className="quantity">{drinksPerBottle}</span><span>drinks per bottle</span>
        </li>
        <li>
          <span className="quantity">{totalServings}</span><span>total servings</span> 
        </li>
      </ul>
    </div>
  )
}

export default Totals

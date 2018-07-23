import React from 'react'
import { ozToMl, mlToOz, toBatchFriendlyUnits } from 'utils/units'

import { ingredientsWithDilution } from 'utils/dilution'

function totalIngredients (ingredients, totalServings) {
  return ingredients.map( (ingredient) => {
    let ingredientInBatchUnits = toBatchFriendlyUnits(ingredient)

    return {
      ...ingredientInBatchUnits,
      quantity: ingredientInBatchUnits.quantity * totalServings,
    }
  })
}

function ingredientLine(ingredient) {
  const ingredientString = `${Math.round(ingredient.quantity)} ${ingredient.units} ${ingredient.name}`
  return <li key={ingredient.id}>{ingredientString}</li>
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
  let formattedDrinkVolume = Number.parseFloat(
    mlToOz(drinkVolume)
  ).toPrecision(2)
  let totalServings = drinksPerBottle * bottles.bottleCount
  let ingredientTotals = totalIngredients(ingredientsWithWater, totalServings)

  return(
    <ul className="totals">
			<li>
				<strong>Batch quantities</strong>
			</li>

      {ingredientTotals.map( (ingredient) => {
        return ingredientLine(ingredient)
      })}

			<li>
				<strong>Serving info</strong>
			</li>
      <li className="border-top">
        Drink volume: <strong className="drinkVolume">{formattedDrinkVolume} oz</strong>
      </li>
      <li>
        Drinks per bottle: <strong className="drinksPerBottle">{drinksPerBottle}</strong>
      </li>
      <li>
        Total servings: <strong className="totalServings">{totalServings}</strong>
      </li>
    </ul>
  )
}

export default Totals

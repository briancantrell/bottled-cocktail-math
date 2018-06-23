import React from 'react'
import { mlToOz, ozToMl } from 'utils/units'
import { ingredientsWithDilution } from 'utils/dilution'

function totalIngredients (ingredients, totalServings) {
  return ingredients.map( (ingredient) => {
    let normalizedQuantity=  ozToMl(ingredient.quantity)

    return {
      name: ingredient.name,
      quantity: normalizedQuantity * totalServings,
      units: "ml",
      id: ingredient.id
    }
  })
}

function ingredientLine(ingredient) {
  const ingredientString = `${Math.round(ingredient.quantity)} ${ingredient.units} ${ingredient.name}`
  return <li key={ingredient.id}>{ingredientString}</li>
}

function Totals({ ingredients, bottles, dilutionProfile }) {
  ingredients = ingredientsWithDilution(ingredients, dilutionProfile)

  let drinkVolume = ingredients.reduce((total, ingredient) =>
                                       total + ozToMl(ingredient.quantity), 0)

  let drinksPerBottle = Math.floor(bottles.bottleSize / drinkVolume)
  let formattedDrinkVolume = Number.parseFloat(mlToOz(drinkVolume)).toPrecision(2)
  let totalServings = drinksPerBottle * bottles.bottleCount
  let ingredientTotals = totalIngredients(ingredients, totalServings)

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

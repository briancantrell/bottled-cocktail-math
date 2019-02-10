import React from 'react'
import { RecipeIngredient } from '../types/ingredient';

function ingredientLine(ingredient: RecipeIngredient) {
  const quantityString = `${ingredient.quantity} ${ingredient.units}`
  return(
    <li key={ingredient.id}>
      <span className="quantity">{quantityString}</span> <span>{ingredient.name}</span>
    </li>
  )
}

function Totals({ ingredientTotals, formattedDrinkVolume, drinksPerBottle, totalServings }) {
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
           <span className="quantity drink-volume">{formattedDrinkVolume} oz</span><span>drink volume</span>
        </li>
        <li>
           <span className="quantity drinks-per-bottle">{drinksPerBottle}</span><span>drinks per bottle</span>
        </li>
        <li>
          <span className="quantity total-servings">{totalServings}</span><span>total servings</span> 
        </li>
      </ul>
    </div>
  )
}

export default Totals
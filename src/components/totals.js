import React from 'react';
import { connect } from 'react-redux';
import { mlToOz, ozToMl } from '../utils/units';

function Totals({ ingredients, bottles, dilutionProfile }) {
  const dilutionMap = {
    "built": 0.24,
    "stirred": 0.36,
    "shaken": 0.56,
    "none": 0,
  }

  let drinkVolumeWithoutWater = ingredients.reduce( (total, ingredient) =>
                                       total + ozToMl(ingredient.quantity)
                                       , 0)

  const waterPerDrink = drinkVolumeWithoutWater * dilutionMap[dilutionProfile];

  ingredients = [
    ...ingredients,
    {
      name: "Water",
      quantity: waterPerDrink,
      units: "ml",
      id: "water"
    }
  ]

  let drinkVolumeWithWater = drinkVolumeWithoutWater + waterPerDrink;
  let drinksPerBottle = Math.floor(bottles.bottleSize / drinkVolumeWithWater);
  let totalServings = drinksPerBottle * bottles.bottleCount;

  let ingredientTotals = ingredients.map( (ingredient) => {
    let normalizedQuantity;
    if (ingredient.units === "oz") {
      normalizedQuantity =  ozToMl(ingredient.quantity);
    }else{
      normalizedQuantity =  ingredient.quantity;
    }

    return {
      name: ingredient.name,
      quantity: normalizedQuantity * totalServings,
      units: "ml",
      id: ingredient.id
    };
  });

  return(
    <ul className="totals">
			<li>
				<strong>Batch quantities</strong>
			</li>
			
      {ingredientTotals.map( (ingredient) => {
        return <li key={ingredient.id}>
            {Math.round(ingredient.quantity)} {ingredient.units} {ingredient.name}
          </li>;
      })}

			<li>
				<strong>Serving info</strong>
			</li>
      <li className="border-top">
        Drink volume: <strong>{Number.parseFloat(mlToOz(drinkVolumeWithWater)).toPrecision(2)} oz</strong>
      </li>
      <li>
        Drinks per bottle: <strong>{drinksPerBottle}</strong>
      </li>
      <li>
        Total servings: <strong>{totalServings}</strong>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    bottles: state.bottles,
    dilutionProfile: state.dilutionProfile
  };
};

export default connect(mapStateToProps)(Totals);


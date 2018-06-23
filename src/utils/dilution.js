import { mlToOz, ozToMl } from 'utils/units'
export const ingredientsWithDilution = (ingredients, dilutionProfile) => {
  const dilutionMap = {
    "built": 0.24,
    "stirred": 0.36,
    "shaken": 0.56,
    "none": 0,
  }

  let drinkVolumeWithoutWater = ingredients.reduce( (total, ingredient) =>
                                       total + ozToMl(ingredient.quantity)
                                       , 0)

  const waterPerDrink = drinkVolumeWithoutWater * dilutionMap[dilutionProfile]

  const ingredientsWithWater = [
    ...ingredients,
    {
      name: "Water",
      quantity: mlToOz(waterPerDrink),
      units: "oz",
      id: "water"
    }
  ]

  return ingredientsWithWater.filter((ingredient) =>
                                     ingredient.quantity > 0
                                    )
}

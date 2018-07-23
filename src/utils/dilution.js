export const ingredientsWithDilution = (ingredients, dilutionProfile) => {
  const dilutionMap = {
    "built": 0.24,
    "stirred": 0.36,
    "shaken": 0.56,
    "none": 0,
  }

  let drinkVolumeWithoutWater = ingredients.reduce( (total, ingredient) =>
                                       total + ingredient.quantity
                                       , 0)

  const waterPerDrink = drinkVolumeWithoutWater * dilutionMap[dilutionProfile]

  const ingredientsWithWater = [
    ...ingredients,
    {
      name: "Water",
      quantity: waterPerDrink,
      units: "ml",
      id: "water"
    }
  ]

  return ingredientsWithWater.filter((ingredient) =>
                                     ingredient.quantity > 0
                                    )
}

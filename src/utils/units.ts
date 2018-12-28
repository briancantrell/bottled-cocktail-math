export const toBatchFriendlyUnits = (ingredient: { units: String, quantity: number }): {units: String, quantity: number} => {
  switch(ingredient.units) {
    case "ml":
      return ingredient
    case "ct":
      return {
        ...ingredient,
        units: "ml",
        quantity: 0
      }
    case "oz":
      return {
        ...ingredient,
        units: "ml",
        quantity: ozToMl(ingredient.quantity)
      }
    case "dashes":
      return {
      ...ingredient,
      units: "ml",
      quantity: dashesToMl(ingredient.quantity)
    }
    default:
      return ingredient
  }
}

const dashesToMl = (dashes: number): number => {
  return dashes * 0.72;
}

export const ozToMl = (oz: number): number => {
  return oz * 29.5735;
}

export const mlToOz = (ml: number): number => {
  return ml / 29.5735;
}
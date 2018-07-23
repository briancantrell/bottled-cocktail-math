export const toBatchFriendlyUnits = (ingredient) => {
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

export const dashesToMl = (dashes) => {
  return dashes * 0.72;
}

export const ozToMl = (oz) => {
  return oz * 29.5735;
}

export const mlToOz = (ml) => {
  return ml / 29.5735;
}


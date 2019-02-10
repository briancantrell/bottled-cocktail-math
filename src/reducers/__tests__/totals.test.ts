import { manhattan } from '../../cocktail_ingredients'
import totalReducer  from '../totals'

describe("manhattan test results", () => {
  it("calculates totals & drink info correctly", () => {
    const totalState = totalReducer({
      dilutionProfile: "shaken",
      bottles: {bottleSize: 177, bottleUnit: "ml", bottleCount: 3},
      ingredients: manhattan,
    }, "MY_ACTION")

    expect(totalState.drinksPerBottle).toEqual(1)
    expect(totalState.formattedDrinkVolume).toEqual("4.7")
    expect(totalState.totalServings).toEqual(3)
    
    expect(totalState.ingredientTotals[0]).toMatchObject({
      name: "Whiskey",
      quantity: 177,
      units: "ml"
    })

    expect(totalState.ingredientTotals[1]).toMatchObject({
      name: "Sweet vermouth",
      quantity: 90,
      units: "ml"
    })

    expect(totalState.ingredientTotals[2]).toMatchObject({
      name: "Bitters",
      quantity: 3,
      units: "ml"
    })

    expect(totalState.ingredientTotals[3]).toMatchObject({
      name: "Water",
      quantity: 150,
      units: "ml"
    })
  })
})
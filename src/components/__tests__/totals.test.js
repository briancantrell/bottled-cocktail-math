import React from 'react'
import { shallow } from 'enzyme'
import Totals from '../totals'
import { manhattan } from '../../cocktail_ingredients'

describe("manhattan test results", () => {
	const bottles = {
		bottleSize: 187,
		bottleCount: 3,
	}

	const component = shallow(
		<Totals
			ingredientTotals={manhattan}
			formattedDrinkVolume={"4.8"}
			drinksPerBottle={1}
			totalServings={3}
		/>,
  )

	it("renders the details passed to it", () => {
		expect(component.find(".drink-volume").text()).toEqual("4.8 oz")
		expect(component.find(".drinks-per-bottle").text()).toEqual("1")
		expect(component.find(".total-servings").text()).toEqual("3")
	})
})

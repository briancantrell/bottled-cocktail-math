import React from 'react'
import { shallow } from 'enzyme'
import Totals from 'components/totals'
import recipes from 'cocktail_ingredients'

describe("manhattan test results", () => {
	const bottles = {
		bottleSize: 187,
		bottleCount: 3,
	}

  const manhattan = recipes.manhattan
	const component = shallow(
		<Totals
			ingredients={manhattan.ingredients}
			bottles={bottles}
			dilutionProfile={manhattan.dilutionProfile}
		/>,
	)

	it("calculates the correct batch quantities", () => {
		expect(component.contains("177 ml Whiskey")).toBeTruthy()
		expect(component.contains("89 ml Sweet vermouth")).toBeTruthy()
		expect(component.contains("149 ml Water")).toBeTruthy()
	})

	it("calculates the correct serving info", () => {
		expect(component.find(".drinkVolume").text()).toEqual("4.7 oz")
		expect(component.find(".drinksPerBottle").text()).toEqual("1")
		expect(component.find(".totalServings").text()).toEqual("3")
	})
})

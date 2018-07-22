import React from 'react'
import { shallow } from 'enzyme'
import Totals from 'components/totals'
import { manhattan } from 'cocktail_ingredients'

describe("manhattan test results", () => {
	const bottles = {
		bottleSize: 187,
		bottleCount: 3,
	}

	const component = shallow(
		<Totals
			ingredients={manhattan}
			bottles={bottles}
			dilutionProfile={"shaken"}
		/>,
	)

	it("calculates the correct batch quantities", () => {
		expect(component.contains("177 ml Whiskey")).toBeTruthy()
		expect(component.contains("89 ml Sweet vermouth")).toBeTruthy()
		expect(component.contains("151 ml Water")).toBeTruthy()
		expect(component.contains("4 ml Bitters")).toBeTruthy()
	})

	it("calculates the correct serving info", () => {
		expect(component.find(".drinkVolume").text()).toEqual("4.8 oz")
		expect(component.find(".drinksPerBottle").text()).toEqual("1")
		expect(component.find(".totalServings").text()).toEqual("3")
	})
})

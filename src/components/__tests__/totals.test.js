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
			ingredients={manhattan}
			bottles={bottles}
			dilutionProfile={"shaken"}
		/>,
  )
  // console.log(component.debug())

	it("calculates the correct batch quantities", () => {
		expect(component.contains("177 ml")).toBeTruthy()
		
		expect(component.contains("89 ml")).toBeTruthy()
		expect(component.contains("151 ml")).toBeTruthy()
		expect(component.contains("4 ml")).toBeTruthy()
	})

	it("calculates the correct serving info", () => {
		expect(component.find(".drink-volume").text()).toEqual("4.8 oz")
		expect(component.find(".drinks-per-bottle").text()).toEqual("1")
		expect(component.find(".total-servings").text()).toEqual("3")
	})
})

import React from 'react'
import { mount } from 'enzyme'
import TextInput from '../text_input'

describe("bottles component", () => {

  const onchange = jest.fn()

	const component = mount(
		<TextInput
			value={ "187" }
			changeHandler={ onchange }
		/>,
	)

	it("renders successfully", () => {
		expect(component.find(".component")).toExist()
	})

	it("calls onchange", () => {
    component.find(".component").simulate("change")
    expect(onchange).toBeCalled();
	})
})


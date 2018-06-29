import React from 'react'
import { mount } from 'enzyme'
import Bottles from 'components/bottles'

describe("bottles component", () => {

  const bottleSizeChangeMock = jest.fn()
  const bottleCountChangeMock = jest.fn()

	const component = mount(
		<Bottles
			bottleSize={ "187" }
			bottleCount={ "2" }
      onBottleSizeChange={bottleSizeChangeMock}
      onBottleCountChange={bottleCountChangeMock}
		/>,
	)

	it("renders successfully", () => {
		expect(component.find(".bottle-input")).toExist()
	})

	it("handles bottleSize user input", () => {
    component.find(".bottle-size-input").simulate("change")
    expect(bottleSizeChangeMock).toBeCalled();
	})

	it("handles bottleCount user input", () => {
    component.find(".bottle-count-input").simulate("change")
    expect(bottleCountChangeMock).toBeCalled();
	})
})

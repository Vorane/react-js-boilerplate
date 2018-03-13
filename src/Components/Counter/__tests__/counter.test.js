import React from "react"
import { shallow, mount } from "enzyme"
import Counter from "../../Counter"

describe("dummy counter tests", () => {
	it("test sum ", () => {
		const wrapper = mount(<Counter />)
		const actual = wrapper.find("h1").text()
		const expected = "App"

		expect(actual).toEqual(expected)
		// expect(1+2).toBe(3)
	})
})
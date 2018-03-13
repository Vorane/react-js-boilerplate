/* global  it, describe, expect */
import React from "react"
import { mount } from "enzyme"
import Counter from "../../Counter"

describe("Counter component tests", () => {
	it("check if counter component will mount ", () => {
		const wrapper = mount(<Counter />)
		const actual = wrapper.find("h1").text()
		const expected = "App"

		expect(actual).toEqual(expected)
	})
})

/* global  it, describe */
import React from "react"
import { mount } from "enzyme"
import App from "../../App"

describe("App  tests", () => {
	it("test if the App will mount ", () => {
		mount(<App />)
	})
})

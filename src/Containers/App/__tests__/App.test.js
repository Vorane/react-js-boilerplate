import React from "react"
import { shallow } from "enzyme"
import App from "../App"

jest.dontMock("../App")

test("App component should render as expected", () => {
	const component = shallow(<App />)
		.is(".foo")
		.toBe(true)
	console.log(component)
})

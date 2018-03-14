/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Header from "../../Header"

describe("Header component tests", () => {
	it("compnent can render without children ", function() {		
		expect(shallow(<Header />))
	})
	it("Component renders children passed ", function() {
		const testHeader = <h1 />
		expect(shallow(<Header children={testHeader} />).contains(testHeader)).toBe(
			true
		)
	})
	it("Must render the wrapper div ", function() {
		expect(shallow(<Header />).contains(<div />)).toBe(true)
	})
})

/* global  it, describe, expect */
import React from "react"
import ReactDOM from "react-dom"
import App from "../Containers/App"

import { Provider } from "react-redux"

import store from "../Store/configureStore"

describe("App", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div")
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			div
		)
	})
})

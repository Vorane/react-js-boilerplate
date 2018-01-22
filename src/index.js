import { render } from "react-dom"
import React from "react"
import { Provider } from "react-redux"

import styles from "./app.css"

import App from "./Containers/App"
import store from "./Store/configureStore"

render(
	<Provider store={store}>
		<App  />
	</Provider>,
	document.getElementById("app")
)

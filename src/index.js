import { render } from "react-dom"
import React from "react"
import { Provider } from "react-redux"

import './app.css'

import App from "src/Containers/App"
import store from "src/Store/configureStore"

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
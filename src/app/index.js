import { render } from "react-dom"
import React from "react"
import { Provider } from "react-redux"

import App from "./Containers/App"
import store from "./Store/configureStore"

// import 'semantic-ui-css/semantic.min.css';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
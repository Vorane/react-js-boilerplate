# React Boilerplate
This is a simple, opinionated boilerplate to help quickly setup a react-redux appliaction

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* npm
* node js

### Installing
clone the repo
```
git clone https://github.com/muneneevans/react-js-bolierplate.git
```

install node modules
```
npm install
```
## Folder Structure
After creation, your project should look like this:

```
react-boilerplate/
    dist/
        app/    
    node_modules/
    src/
        app/
            Components/
            Containers/
            Services/
            Store/
                confitureStore.js
                rootReducer.js
            index.js
        index.html
    package.json
    readme.md
    webpack.config.js
```

## Running the tests

run test

```
npm test
```

## Buidling the project

run build
```
npm start
```

## Adding Actions/ActionTypes/Reducer
The store is split up into domains as follow
```
    Store/
        Domain1/
            actionTypes.js
            actions.js
            reducer.js
            selectors.js
        Domain2/
            actionTypes.js
            actions.js
            reducer.js
            selectors.js
        configureStore.js
        rootReducer.js
```

Example
```
    Store/
        Posts/
            actionTypes.js
            actions.js
            reducer.js
            selectors.js
        Comments/
            actionTypes.js
            actions.js
            reducer.js
            selectors.js
        configureStore.js
        rootReducer.js
```

## Combining reducers
All reducers are combined in the rootReducer

```javascript
import { combineReducers } from "redux"

import domain1Reducer from './Domain1/reducer'
import domain2Reducer from './Domain2/reducer'

const rootReducer = combineReducers({
     domain1Reducer, domain2Reducer
})

export default rootReducerconst rootReducer = combineReducers({
     productReducer, sessionReducer
})

export default rootReducer
```

## Configure the Store
The configureStore.js is already configured to accept the root reducer as the default store

## Built With

* [Node](https://nodejs.org/) - The web framework used
* [React](https://facebook.github.io/react/) - Componenet builder
* [Redux](http://redux.js.org/) - Js Flux management
* [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable.git) - compiling scripts
* [Webpack](https://webpack.js.org/) - Dependency Management
* [Babel](https://babeljs.io/) - compiling scripts

## Authors

* **Evans Munene** - *Initial work* - [Vorane](https://github.com/muneneevans)

See also the list of [contributors](https://github.com/muneneevans/react-js-bolierplate/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* God
* [Vorane Development Team](http://www.vorane.com)
* etc

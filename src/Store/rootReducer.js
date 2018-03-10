import { combineReducers } from "redux"

//import reducers from domains
import shared from "./Shared/reducers"
const rootReducer = combineReducers({
	shared: shared
})

export default rootReducer

import * as types from "./actionTypes"
import Immutable from "seamless-immutable"
import { combineReducers } from "redux"

const initialState = Immutable({})

export const firstSharedReducer = (state = initialState, action = {}) => {
	switch (action.type) {
	case types.SAMPLE_ACTION_TYPE:
		return state
	default:
		return state
	}
}
export const secondSharedReducer = (state = initialState, action = {}) => {
	switch (action.type) {
	default:
		return state
	}
}

export default combineReducers({
	sR1: firstSharedReducer,
	sR2: secondSharedReducer
})

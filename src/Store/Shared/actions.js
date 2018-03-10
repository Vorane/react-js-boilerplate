import * as types from "./actionTypes"

export const sampleAction = () => {
	return dispatch => {
		dispatch({ type: types.SAMPLE_ACTION_TYPE })
	}
}

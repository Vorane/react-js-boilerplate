/* global  it, describe, expect */
import * as types from "../actionTypes"
import { firstSharedReducer } from "../reducers"

describe("test the sample reducers", () => {
	it("should add an items to list of items", () => {
		const action = { type: types.SAMPLE_ACTION_TYPE, name: "evans" }
		const expected = { items: ["evans"] }

		expect(firstSharedReducer({}, action)).toEqual(expected)
	})
})

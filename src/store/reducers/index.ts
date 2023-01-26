import type { Reducer, AnyAction } from 'redux'

const initialState = {}

const reducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer

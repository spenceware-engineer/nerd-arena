import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as rootReducer from './reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))

import { createStore, combineReducers } from 'redux'
import todoReducer from './todoReducer'
import loadingReducer from './loading'


let store = createStore(combineReducers({todoReducer, loadingReducer}))

export default store;
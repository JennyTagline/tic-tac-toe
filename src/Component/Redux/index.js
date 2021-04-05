import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducer/rootReducer'
import playerReducer from './Reducer/playerReducer'
import modalReducer from './Reducer/modalReducer'
import thunk from 'redux-thunk'

const mainReducer = combineReducers({ playerReducer, rootReducer, modalReducer })

export const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))
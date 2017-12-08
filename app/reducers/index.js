/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campusReducer from './campusReducer'

export default combineReducers({
  campuses: campusReducer
})

export * from './campusReducer'

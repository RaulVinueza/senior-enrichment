/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import campusReducer from './campusReducer'
import studentReducer from './studentReducer'

export default combineReducers({
  campuses: campusReducer,
  students: studentReducer
})

export * from './campusReducer'
export * from './studentReducer'

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './utils/history'

const rootReducer = combineReducers({
  // home: homeReducer
  router: connectRouter(history)
})

export default rootReducer

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './utils/history'
import showcaseReducer from './components/Showcase/reducer'

const rootReducer = combineReducers({
  showcase: showcaseReducer,
  router: connectRouter(history)
})

export default rootReducer

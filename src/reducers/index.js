import { combineReducers } from 'redux'

import helloWorldReducer from './helloWorldReducer'
import userReducer from './userReducer'
// import routerReducer from 'react-router-redux'

const rootReducer = combineReducers({
  helloWorld: helloWorldReducer,
  user: userReducer
  // router: routerReducer
})

export default rootReducer

import { combineReducers } from 'redux'

import helloWorldReducer from './helloWorldReducer'

const rootReducer = combineReducers({
  // user: usersReducer,
  // stars: starsReducer,
  // constellation: constellationReducer,
  // myConstellations: myConstellationsReducer,
  // showConstellation: showConstellationReducer,
  // lines: linesReducer,
  // highlighted: highlightedReducer,
  // listUsers: listUsersReducer
  helloWorld: helloWorldReducer
})

export default rootReducer

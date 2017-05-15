import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import reviewReducer from './reviewReducer'
import amazonReducer from './amazonReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  reviews: reviewReducer,
  amazon: amazonReducer
})

export default rootReducer

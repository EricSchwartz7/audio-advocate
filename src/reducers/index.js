import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import ratingReducer from './ratingReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  ratings: ratingReducer
})

export default rootReducer

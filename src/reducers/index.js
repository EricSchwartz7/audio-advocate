import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import ratingReducer from './ratingReducer'
import reviewReducer from './reviewReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  ratings: ratingReducer,
  reviews: reviewReducer
})

export default rootReducer

import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import reviewReducer from './reviewReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  reviews: reviewReducer
})

export default rootReducer

export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload
    case 'FETCH_PRODUCT':
      return action.payload
    case 'SORT_PRICE':
      return action.payload
    case 'SORT_PRICE_HIGH':
      return action.payload
    case 'SORT_RATING':
      return action.payload
    case 'SORT_NUM_REVIEWS':
      return action.payload
    default:
      return state
  }
}

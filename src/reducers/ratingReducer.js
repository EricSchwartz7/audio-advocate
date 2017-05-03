export default (state={}, action) => {
  switch (action.type) {
    case 'FETCH_RATINGS':
      return action.payload
    default:
      return state
  }
}

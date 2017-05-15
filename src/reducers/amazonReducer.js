export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_AMAZON':
      return action.payload
    default:
      return state
  }
}

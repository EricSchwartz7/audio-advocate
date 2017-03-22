export default (state={}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.payload.data
    default:
      return state
  }
}

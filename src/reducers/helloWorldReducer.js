export default (state="", action) => {
  switch (action.type) {
    case 'HELLO_WORLD':
      return 'Hello World'
    default:
      return state
  }
}

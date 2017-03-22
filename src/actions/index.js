import axios from 'axios'
// import { push } from 'react-router-redux'


axios.defaults.baseURL = "http://localhost:3000/api/v1"
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const helloWorld = () => {
  return {
    type: 'HELLO_WORLD',
  }
}

export const createUser = (user) => {  // call on Rails API to hit the Create action
  const response = axios.post('/signup', user)  // user is object with form data
    .then( (userData) => {  // userData includes jwt token and other Rails info
      sessionStorage.setItem('jwt', userData.data.jwt) // send jwt token to session storage
      // browserHistory.push("/home") // alters the URL in browser
      return userData // sets the response to equal username
    })
  return {
    type: 'LOG_IN',
    payload: response // sending username as payload to the reducer
  }
}

export const logInUser = (user) => {  // call on Rails API to match and decode token
  const response = axios.post('/login', user)
    .then( (userData) => {
      sessionStorage.setItem('jwt', userData.data.jwt)
      if (userData.status === 200){
        // browserHistory.push("/sky")
      }
      return userData
    })
  return {
    type: 'LOG_IN',
    payload: response
  }
}

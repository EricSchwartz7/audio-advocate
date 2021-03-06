import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:3000/api/v1"
axios.defaults.baseURL = "https://audio-advocate-api.herokuapp.com/api/v1"
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

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

export const fetchUsername = () => {
  var token = sessionStorage.getItem('jwt');
  axios.defaults.headers.common['AUTHORIZATION'] = token;
  const response = axios.get('/active');
  return {
    type: 'LOG_IN',
    payload: response
  }
}

export const fetchData = () => {
  const response = axios.get('/products').then( products => products.data )
  return {
    type: 'FETCH_DATA',
    payload: response
  }
}
export const fetchReviews = (productID) => {
  const response = axios.get('/reviews/' + productID).then( reviews => reviews.data )
  return {
    type: 'FETCH_REVIEWS',
    payload: response
  }
}
export const fetchProduct = (productID) => {
  const response = axios.get('/product/' + productID).then( product => product.data )
  return {
    type: 'FETCH_PRODUCT',
    payload: response
  }
}
export const fetchAmazon = (productID) => {
  const response = axios.get('/amazon/' + productID).then( amazon => amazon.data )
  return {
    type: 'FETCH_AMAZON',
    payload: response
  }
}
export const sortPrice = () => {
  const response = axios.get('/products/price').then( products => products.data )
  return {
    type: 'SORT_PRICE',
    payload: response
  }
}
export const sortPriceHigh = () => {
  const response = axios.get('/products/price_high').then( products => products.data )
  return {
    type: 'SORT_PRICE_HIGH',
    payload: response
  }
}
export const sortRating = () => {
  const response = axios.get('/products/rating').then( products => products.data )
  return {
    type: 'SORT_RATING',
    payload: response
  }
}
export const sortNumReviews = () => {
  const response = axios.get('/products/num_reviews').then( products => products.data )
  return {
    type: 'SORT_NUM_REVIEWS',
    payload: response
  }
}
export const filterConnection = (connection) => {
  const response = axios.get('/products/' + connection).then( products => products.data )
  return {
    type: 'FILTER_CONNECTION',
    payload: response
  }
}

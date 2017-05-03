import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import ProductList from './components/ProductList'

// export default (
//   <Route path="/" component={App}>
//     <Route path="/home" component={Home} />
//   </Route>
// )
export default (
  <App>
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/products" component={ProductList} />
  </App>
)

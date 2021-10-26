/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user/reducers'
import dashboard from './dashboard/reducers'
import profile from './profile/reducers'
import product from './product/reducers'
import cart from './cart/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    dashboard,
    profile,
    product,
    cart
  })

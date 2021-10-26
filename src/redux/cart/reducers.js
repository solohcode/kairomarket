import actions from './actions'
import store from 'store'

const initialState = {
  cart: store.get('cart') || [],
  loading: false,
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

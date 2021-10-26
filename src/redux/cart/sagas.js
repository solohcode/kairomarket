import { message, notification } from 'antd';
import { all, takeEvery, put } from 'redux-saga/effects'
import actions from './actions'
import store from 'store'

// add to cart
export function* ADD_TO_CART({ payload }) {
  
  const {e,cart} = payload


  yield put({
    type: 'cart/SET_STATE',
    payload: {
      loading: true,
    },
  })

    const cartItems = cart.slice();
    let alreadyExists = false;
    cartItems.forEach((x) => {
    if (x.id === e.id) {
        alreadyExists = true
        x.count++
        message.warning({
          content: `${e.product_name} already in the cart`,
            style:{
                marginTop: '10vh'
            }
        })
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...e, count: 1 })
      store.set('cart', cartItems )
      yield put({
        type: 'cart/SET_STATE',
        payload: {
          cart: cartItems,
          loading: false,
        },
      })
      message.success({
        content: `${e.product_name} added to cart successfully`,
        style:{
            marginTop: '10vh'
        }
    })
    }
    yield put({
      type: 'cart/SET_STATE',
      payload: {
        loading: false,
      },
    }) 
  }


// add to cart
export function* REMOVE_FROM_CART({ payload }) {
  
  const {e,cart} = payload


  yield put({
    type: 'cart/SET_STATE',
    payload: {
      loading: true,
    },
  })

    const cartItems = cart.slice();
    cartItems.forEach((x) => {
    if (x.id === e.id) {
        var cartIndex = cartItems.indexOf(e)
        cartItems.splice(cartIndex, 1);
        x.count--
        store.set('cart', cartItems )
        message.warning({
          content: `${e.product_name} removed from cart`,
          style:{
            marginTop: '10vh'
          }
        })
      }
    });
    yield put({
     type: 'cart/SET_STATE',
     payload: {
       cart: cartItems,
       loading: false,
     },
   }) 
  }




// clear cart saga
export function* CLEAR_CART() {
  yield put({
    type: 'cart/SET_STATE',
    payload: {
      loading: true
    },
  })
  store.remove('cart')
  yield put({
    type: 'cart/SET_STATE',
    payload: {
      cart: [],
      loading: false
    },
  })


    notification.success({
      message: `Cart cleared`,
      style:{
          marginTop: '10vh'
      }
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.ADD_TO_CART, ADD_TO_CART),
    takeEvery(actions.CLEAR_CART, CLEAR_CART),
    takeEvery(actions.REMOVE_FROM_CART, REMOVE_FROM_CART),
  ])
}

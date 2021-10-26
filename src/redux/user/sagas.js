import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from '../../index'
import store from 'store'
import actions from './actions'
import * as jwts from '../../api'

// api calls here 
const jwt = {
  login: jwts.LoginApi,
  register: jwts.RegisterApi,
  recover: jwts.RecoverApi,
  reset: jwts.ResetApi,
  verify: jwts.VerifyApi
}

// login saga 
export function* LOGIN({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const success = yield call(jwt.login, payload)
  if (success.data.status) {
    yield put({
      type:'user/SET_STATE',
      payload: {
        loading: false,
        loggedIn: true,
        userData: success.data
      }
    })
    notification.success({
      message: 'Logged In Successfully',
      description: `welcome user ${success.data.name}`,
      duration: 2,
      style:{
        marginTop: '10vh'
      }
    })
      history.push('/user/dashboard')
  }
  if (!success.data.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
        loggedIn: false
      },
    })
    notification.warning({
      message: 'Login error',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
}


// forgot password saga 
export function* FORGOT_PASSWORD({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.recover, payload)
  if (success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false
      },
    })
    notification.success({
      message: 'Request Sent',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
    yield history.push(`/auth/verify-password/:id`)
  }
  if (!success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.warning({
      message: 'Failed to sent request',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
}


// reset password saga 
export function* RESET_PASSWORD({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.reset, payload)
  if (success.status && success.data.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    yield history.push('/auth/login')
    notification.success({
      message: 'Password reset successful',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
  if (!success.data.success){
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.warning({
      message: 'password reset failed',
      description: `${success.data.message}, please check your mail`,
      style:{
        marginTop: '10vh'
      }
    })
  }
  if (!success.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.warning({
      message: 'password reset failed',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
}

// register saga 
export function* REGISTER({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.register, payload)
  if (success.data.status) {
    yield put({
      type: 'user/SET_STATE',
      payload:{
        loading: false
      }
    })
    yield history.push('/auth/login')
    notification.success({
      message: 'Registration Successful',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
  if (!success.data.status) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.error({
      message: 'Registration Failed',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
}


// logout saga 
export function* LOGOUT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loggedIn: false,
      userData: {},
      loading: false,
    },
  })
  history.push('/auth/login')
  store.remove('login-data')
  notification.warning({
    message:'Logged Out Successfully',
    description:'come back soon!',
    style:{
      marginTop: '10vh'
    }
  })
}


// verify email saga 
export function* VERIFY_EMAIL({payload}) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(jwt.verify, payload)
  if(success.status && success.data.status){
    yield put({
      type: 'user/SET_STATE',
      payload:{
        loading:false
      }
    })
    notification.success({
      message: 'Email Verified Successfully',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
    history.push('/auth/login')
  }else{
    notification.error({
      message:'Email Verification Failed',
      description: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.REGISTER, REGISTER),
    takeEvery(actions.LOGOUT, LOGOUT),
    takeEvery(actions.FORGOT_PASSWORD, FORGOT_PASSWORD),
    takeEvery(actions.RESET_PASSWORD, RESET_PASSWORD),
    takeEvery(actions.VERIFY_EMAIL, VERIFY_EMAIL),
    // LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}

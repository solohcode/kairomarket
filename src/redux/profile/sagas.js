import { message, notification } from 'antd'
import { all, takeEvery, put, call } from 'redux-saga/effects'
import actions from './actions'
import * as jwt from '../../api'

// import apis here 
const api = {
  profile : jwt.ProfileApi,
  update: jwt.UpdateProfileApi
}




export function* PROFILE() {
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(api.profile)
  if (success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        profile: success.data[0],
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
  return success && success.data[0].profile_pics? '':
        message.warning({
            content: 'Please Update Your Profile',
            duration: 10
        })
}

export function* UPDATE_PROFILE({payload}) {
  yield put({
    type: 'profile/SET_STATE',
    payload: {
      updateLoading: true,
    },
  })
  const success = yield call(api.update, payload)
  if(success.status && success.data.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload:{
        updateLoading: false
      }
    })
    notification.success({
      message: 'Profile Updated Successfully',
      description: success.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
  if(!success.data.status && success.data.message){
    yield put({
      type: 'profile/SET_STATE',
      payload:{
        updateLoading: false
      }
    })
    notification.warning({
      message: success.data.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
  if(!success.status) {
    yield put({
      type: 'profile/SET_STATE',
      payload:{
        updateLoading: false
      }
    })
    notification.warning({
      message: 'Profile Update UnSuccessful',
      description: success.message,
      style:{
        marginTop: '10vh'
      }
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.PROFILE, PROFILE),
    takeEvery(actions.UPDATE_PROFILE, UPDATE_PROFILE),
  ])
}

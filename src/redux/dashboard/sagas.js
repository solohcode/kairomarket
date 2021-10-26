import { all, takeEvery, put, call } from 'redux-saga/effects'
import actions from './actions'

// import apis here 

export function* DASHBOARD() {
  yield put({
    type: 'dashboard/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call('api call here')
  if (success.status) {
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        dashboard: success.data,
        loading:false
      },
    })
  }
  if (!success.status) {
    yield put({
      type: 'dashboard/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.DASHBOARD, DASHBOARD),
  ])
}

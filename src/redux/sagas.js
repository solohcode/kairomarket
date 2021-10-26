import { all } from 'redux-saga/effects'
import user from './user/sagas'
import dashboard from './dashboard/sagas'
import profile from './profile/sagas'
import product from './product/sagas'
import cart from './cart/sagas'


export default function* rootSaga() {
  yield all([user(), product(), dashboard(), profile(), cart()])
}

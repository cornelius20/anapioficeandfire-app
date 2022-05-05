import {all} from 'redux-saga/effects';
import AppSaga from './AppSaga';

export default function* rootSaga() {
  yield all([AppSaga()]);
}

import {all, takeLatest, spawn, put, call} from 'redux-saga/effects';
import {ApiResponse} from 'apisauce';
import {ItemType} from '../types/appType';
import AppActions, {AppTypes} from '../reduxs/reducer/AppReducer';
import api from '../services';
import {UtilHelper} from '../utils';

function* getSuperheroes() {
  const response: ApiResponse<ItemType[]> = yield call(api.getDcSuperheroes);

  if (!response.ok) {
    yield put(AppActions.getSuperheroesFailure());
    return;
  }

  yield put(
    AppActions.getSuperheroesSuccess(
      UtilHelper.transformSuperheroListAbleToSearch(response.data),
    ),
  );
}

export default function* rootSaga() {
  const sagas = [takeLatest(AppTypes.GET_SUPERHEROES, getSuperheroes)];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        try {
          yield saga;
        } catch (error) {
          console.log('error in children saga', error);
        }
      }),
    ),
  );
}

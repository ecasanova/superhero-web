import {call, put, takeLatest} from 'redux-saga/effects';
import {loadSuperheroeDetails} from './superHeroDetailActions';
import SuperheroeService from '@/utils/api/superHeroesServices';

export default function* superheroDetailSaga(superHeroId) {
  try {
    yield put(loadSuperheroeDetails.request());
    const body = yield call([SuperheroeService, 'getDetails'], {superHeroId});
    yield put(loadSuperheroeDetails.success(body.results));
  } catch (error) {
    console.log('error');

    yield put(loadSuperheroeDetails.failure(error));
  } finally {
    yield put(loadSuperheroeDetails.fulfill());
  }
}
export function* superheroeDetailWatch() {
  yield takeLatest(loadSuperheroeDetails.TRIGGER, superheroDetailSaga);
}

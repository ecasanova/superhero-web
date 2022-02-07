import {call, put} from 'redux-saga/effects';
import {loadSuperheroes} from './cardsListActions';
import SuperheroeService from '@/utils/api/superHeroesServices';

export default function* superheroesListSaga() {
  try {
    yield put(loadSuperheroes.request());
    const body = yield call([SuperheroeService, 'getList']);
    yield put(loadSuperheroes.success(body.results));
  } catch (error) {
    yield put(loadSuperheroes.failure(error));
  } finally {
    yield put(loadSuperheroes.fulfill());
  }
}

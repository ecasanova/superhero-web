import {all, call} from 'redux-saga/effects';
import {routinePromiseWatcherSaga} from 'redux-saga-routines';

import superheroesListSaga from '@/features/SuperheroCard/cardsListComponent/redux/cardsListSagas';
import superheroDetailSaga from '@/features/SuperheroDetail/superheroDetail/redux/superHeroDetailSagas';

function* rootSaga() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([
      // external
      call(routinePromiseWatcherSaga),

      // app
      call(superheroesListSaga),
      call(superheroDetailSaga),
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;

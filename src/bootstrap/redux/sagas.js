import {all, call} from 'redux-saga/effects';
import {routinePromiseWatcherSaga} from 'redux-saga-routines';

import superheroesListSaga from '@features/SuperheroCard/cardsListComponent/redux/cardsListSagas';

function* rootSaga() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([
      // external
      call(routinePromiseWatcherSaga),

      // app
      call(superheroesListSaga),
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;

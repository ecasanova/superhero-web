import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {persistConfig} from './persist';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import optimist from 'redux-optimist';
import {reduxMiddleware} from './middleware';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import session from '@/shared/components/session/redux/sessionReducer';
import cardsListReducer from '@/features/SuperheroCard/cardsListComponent/redux/cardsListReducer';
import addToTeamReducer from '@/features/SuperheroCard/addToTeamComponent/redux/addToTeamReducer';
import paginationReducer from '@/features/SuperheroCard/cardsListComponent/redux/paginationReducer';
import filtersReducer from '@/features/SuperheroCard/cardsListComponent/redux/filtersReducer';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import sagas from './sagas';

const createRootReducer = (history) =>
  optimist(
    combineReducers({
      router: connectRouter(history),
      session,
      superheroes: cardsListReducer,
      myteam: addToTeamReducer,
      page: paginationReducer,
      filters: filtersReducer,
    }),
  );

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        ...reduxMiddleware,
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  );
  return store;
};

const store = configureStore({});

export const persistor = persistStore(store);
// process.env.NODE_ENV !== 'production' && persistor.purge();

sagaMiddleware.run(sagas);

export default store;

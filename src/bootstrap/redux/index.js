import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { persistConfig } from './persist'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import optimist from 'redux-optimist'
import reduxReset from 'redux-reset'
import { reduxMiddleware } from './middleware'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import session, { RESET_REDUX_STATE } from 'features/session/redux'
import { createBrowserHistory } from 'history'

const createRootReducer = history => (
  optimist(
    combineReducers({
      router: connectRouter(history),
      session
    })
  )
)

export const history = createBrowserHistory()
const rootReducer = createRootReducer(history)
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        ...reduxMiddleware,
        routerMiddleware(history)
      ),
      reduxReset(RESET_REDUX_STATE)
    )
  )
  return store
}

const store = configureStore({})

export const persistor = persistStore(store)
// process.env.NODE_ENV !== 'production' && persistor.purge();
export default store
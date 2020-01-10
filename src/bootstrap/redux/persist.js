import storage from 'redux-persist/lib/storage'
import expireReducer from 'redux-persist-expire'
import { SESSION_INITIAL_STATE } from 'features/session/redux';

const NUMBER_OF_HOURS_TO_EXPIRE = 12;

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
  transforms: [
    expireReducer('session', {
      persistedAtKey: '__persisted_at',
      expireSeconds: NUMBER_OF_HOURS_TO_EXPIRE * 3600, // 86400 seconds in one days
      expiredState: SESSION_INITIAL_STATE
    })
  ]
}

import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { transactionsReducer } from './transactions/slice';
import { currencyReducer } from './currency/slice';
import { statisticsReducer } from './statistics/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const currencyPersistConfig = {
  key: 'currencyTime',
  storage,
  whitelist: ['time']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    currency: persistReducer(currencyPersistConfig, currencyReducer),
    transactions: transactionsReducer,
    statistics: statisticsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
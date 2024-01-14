import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { transactionsReducer } from './transactions/slice';
import { currencyReducer } from './currency/slice';
import { statisticsReducer } from './statistics/slice';
import { globalReducer } from './global/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const currencyPersistConfig = {
  key: 'currency',
  storage
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    currency: persistReducer(currencyPersistConfig, currencyReducer),
    transactions: transactionsReducer,
    statistics: statisticsReducer,
    global: globalReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

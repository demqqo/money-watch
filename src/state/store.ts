import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import moneyChangeReducer from './moneyChange/moneyChangeSlice';
import globalStateReducer from './globalStates/modalComponentSlice';
import isIncomeOrExpenseReducer from './globalStates/expenseOrIncomeSlice';
import whatCategoryReducer from './globalStates/whatCategorySlice';
import refreshTrigerReducer from './globalStates/helpers';
import filterReducer from './globalStates/filterSlice'

const rootReducer = combineReducers({
  whatCategory: whatCategoryReducer,
  moneyChange: moneyChangeReducer,
  globalState: globalStateReducer,
  isIncomeOrExpenseSlice: isIncomeOrExpenseReducer,
  refreshTrigerSlice: refreshTrigerReducer,
  filterSlice: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Properly set up middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default: localStorage for web
import themeReducer from '../features/themeSlice';
import boardReducer from './reducers/boardSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  board: boardReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

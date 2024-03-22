// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './slices/filterSlice';
import { contactsReducer } from './slices/contactSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

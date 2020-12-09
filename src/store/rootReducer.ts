import { combineReducers } from "@reduxjs/toolkit";
import { internetReducer, currentUserReducer, themeReducer } from 'slices';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistCombineReducers, PersistConfig, persistReducer } from 'redux-persist';



export const reducers = combineReducers({
  internet: internetReducer,
  theme: themeReducer,
  auth: currentUserReducer
});

const persistConfig: PersistConfig<RootStore> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['auth']
}

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
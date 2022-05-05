import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import RootReducer from './reducer/rootReducer';
import {AppState} from './reducer/AppReducer/types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['list'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export interface RootState {
  list: AppState;
}

export default store;

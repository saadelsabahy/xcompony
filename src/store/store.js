import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import Reactotron from '../../ReactotronConfig';

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   whitelist: ['Favourite'],
};
const PersistReducer = persistReducer(persistConfig, MainReducer);

export const store = createStore(
   PersistReducer,
   {},
   compose(applyMiddleware(thunk), Reactotron.createEnhancer())
);
export const persistor = persistStore(store);

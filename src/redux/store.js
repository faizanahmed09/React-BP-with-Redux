import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../redux/AuthReducer'
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from 'redux-thunk';

const reducers = combineReducers({
    AuthReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: [thunk],
})

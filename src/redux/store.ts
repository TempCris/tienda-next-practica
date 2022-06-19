import {
  createStore, applyMiddleware, compose, Store, AnyAction
} from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import rootReducer from '@Redux/globalReducers';

const middleware = [thunk];

// ---Redux DevTools
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
}

// ---Redux configuration
const makeStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore as unknown as MakeStore<Store<unknown, AnyAction>>);

export default null;

// ---Dependency´s
import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import rootReducer, { FullReduxState } from '@Redux/globalReducers';
import { ignoreProperties } from 'Utils/functions/objectMethods';

/**
 * Método que recibe el estado completo de redux y lo convierte a json string para
 * persistirlo en el local storage, éste método se puede suscribir a los actions de redux
 * para que sea ejecutado en el dispatch de culaquier accion en redux
 * @param {FullReduxState} FullReduxState - state: Estado completo de redux
 * @returns {void} void
 */
function saveToLocalStorage(state: FullReduxState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Carga un objeto con el estado inicial para redux desde el local storage si es que existe
 * @param {string[]} string[] - ignoredStorages: Array de nombres con propiedades que se ignoraran en el initial state
 * @returns {Object} Objeto inicial para redux
 */
function loadFromLocalStorage(ignoredStorages: string[]) {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) {
      return {};
    }
    const reduxFromLocalStorage = JSON.parse(serialisedState);
    const finalStorage = ignoreProperties(reduxFromLocalStorage, ignoredStorages);
    return finalStorage;
  } catch (_) {
    return {};
  }
}

const middleware = [thunk];

// ---Redux DevTools
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
}

const doNotRead = ['appInfoReducer'];
// ---Redux configuration
const makeStore = () => {
  const store = createStore(
    rootReducer,
    loadFromLocalStorage(doNotRead),
    composeEnhancers(applyMiddleware(...middleware)),
  );

  store.subscribe(() => saveToLocalStorage(store.getState()));
  return store;
};

export const wrapper = createWrapper(makeStore as unknown as MakeStore<Store<unknown, AnyAction>>);

export default null;

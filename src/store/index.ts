import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from "./modules/rootReducers";
import rootSagas from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducers, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSagas);

export { store };

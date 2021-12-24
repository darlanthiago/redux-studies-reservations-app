import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./modules/rootReducers";
import rootSagas from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducers, enhancer);

sagaMiddleware.run(rootSagas);

export { store };

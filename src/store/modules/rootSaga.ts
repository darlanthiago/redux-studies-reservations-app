import { all } from "redux-saga/effects";

import reserveSagas from "./reserve/sagas";

export default function* rootSaga(): any {
  return yield all([reserveSagas]);
}

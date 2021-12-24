import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { Trips } from "../../../pages/Home";
import { api } from "../../../services/api";
import { history } from "../../../services/history";
import { addReserveSuccess, incrementAmountSuccess } from "./actions";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* addToReserve({ payload }: { payload: number }): any {
  const tripExists = yield select((state) =>
    state.reserve.find((trip: any) => trip.id === payload)
  );

  const myStock = yield call(api.get, `/stock/${payload}`);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert("Quantidade máxima permitida atingida");
    return;
  }

  if (tripExists) {
    yield put(incrementAmountSuccess(tripExists));
  } else {
    const response = yield call(api.get, `/trips/${payload}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addReserveSuccess(data));

    history.push("/reservations");
  }
}

function* incrementAmount({ payload }: { payload: Trips }): any {
  const currentAmount = payload.amount;

  if (currentAmount <= 0) return;

  const myStock = yield call(api.get, `/stock/${payload.id}`);
  const stockAmount = myStock.data.amount;

  if (currentAmount >= stockAmount) {
    alert("Quantidade máxima atingida");
    return;
  }

  yield put(incrementAmountSuccess(payload));
}

export default all([
  takeLatest<any>("ADD_RESERVE_REQUEST", addToReserve),
  takeLatest<any>("INCREMENT_AMOUNT_REQUEST", incrementAmount),
]);

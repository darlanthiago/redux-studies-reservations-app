import { Trips } from "../../../pages/Home";

export function addReserveRequest(tripId: number) {
  return {
    type: "ADD_RESERVE_REQUEST",
    payload: tripId,
  };
}

export function addReserveSuccess(trip: Trips) {
  return {
    type: "ADD_RESERVE_SUCCESS",
    payload: trip,
  };
}

export function removeReserve(tripId: number) {
  return { type: "REMOVE_RESERVE", payload: tripId };
}

export function incrementAmountRequest(trip: Trips) {
  return { type: "INCREMENT_AMOUNT_REQUEST", payload: trip };
}

export function incrementAmountSuccess(trip: Trips) {
  return { type: "INCREMENT_AMOUNT_SUCCESS", payload: trip };
}

export function decrementAmount(trip: Trips) {
  return { type: "DECREMENT_AMOUNT", payload: trip };
}

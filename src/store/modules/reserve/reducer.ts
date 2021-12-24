import { Reducer } from "redux";
import { produce } from "immer";

export const reserve: Reducer = (state = [], action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "ADD_RESERVE_SUCCESS":
        draft.push(action.payload);
        break;
      case "REMOVE_RESERVE":
        const tripIndexRemove = draft.findIndex(
          (trip: any) => trip.id === action.payload
        );

        if (tripIndexRemove >= 0) {
          draft.splice(tripIndexRemove, 1);
        }
        break;

      case "INCREMENT_AMOUNT_SUCCESS":
        const tripIndexIncrement = draft.findIndex(
          (trip: any) => trip.id === action.payload.id
        );

        draft[tripIndexIncrement].amount += 1;

        break;
      case "DECREMENT_AMOUNT":
        const tripIndexDecrement = draft.findIndex(
          (trip: any) => trip.id === action.payload.id
        );

        if (tripIndexDecrement >= 0) {
          if (draft[tripIndexDecrement].amount > 1) {
            draft[tripIndexDecrement].amount -= 1;
            break;
          } else {
            draft.splice(tripIndexDecrement, 1);
            break;
          }
        }

        break;

      default:
        return draft;
    }
  });
};

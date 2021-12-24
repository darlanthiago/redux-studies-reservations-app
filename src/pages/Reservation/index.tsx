import { MdAddCircle, MdDelete, MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAmount,
  incrementAmountRequest,
  removeReserve,
} from "../../store/modules/reserve/actions";
import { Trips } from "../Home";

import "./style.css";

export const Reservation = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state: any) => state.reserve);

  function handleRemove(id: number) {
    dispatch(removeReserve(id));
  }

  function handleDecrementAmount(reserve: Trips) {
    dispatch(decrementAmount(reserve));
  }

  function handleIncrementAmount(reserve: Trips) {
    dispatch(incrementAmountRequest(reserve));
  }

  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} reservas</h1>

      {reserves.map((item: Trips, index: number) => (
        <div className="reservation" key={index}>
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>

          <div className="amount">
            <button type="button" onClick={() => handleIncrementAmount(item)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
            <input type="number" readOnly value={item.amount} />
            <button type="button" onClick={() => handleDecrementAmount(item)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
          </div>

          <button type="button" onClick={() => handleRemove(item.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
};

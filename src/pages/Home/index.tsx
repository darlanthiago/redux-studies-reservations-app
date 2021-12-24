import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MdFlightTakeoff } from "react-icons/md";
import { api } from "../../services/api";

import "./style.css";
import { addReserveRequest } from "../../store/modules/reserve/actions";

export type Trips = {
  id: number;
  title: string;
  status: boolean;
  image: string;
  amount: number;
};

export const Home = () => {
  const dispatch = useDispatch();

  const [trips, setTrips] = useState<Trips[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Trips[]>("/trips");
      setTrips(response.data);
    })();
  }, []);

  function handleAdd(tripId: number) {
    dispatch(addReserveRequest(tripId));
  }

  return (
    <div className="box">
      {trips.map((item, index) => (
        <li key={index}>
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>
          <span>Status: {item.status ? "Disponível" : "Indisponível"}</span>
          <button type="button" onClick={() => handleAdd(item.id)}>
            <div>
              <MdFlightTakeoff size={16} color="#fff" />
            </div>
            <span>SOLICITAR RESERVA</span>
          </button>
        </li>
      ))}
    </div>
  );
};

import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reservation } from "./pages/Reservation";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservation />} />
    </Switch>
  );
};

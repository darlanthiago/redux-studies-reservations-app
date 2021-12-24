import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logoImg from "../../assets/img/logo.svg";

import "./style.css";

export const Header = () => {
  const reserve = useSelector((state: any) => state.reserve);

  return (
    <header className="container">
      <Link to="/">
        <img src={logoImg} alt="Logo" className="logo" />
      </Link>

      <Link to="/reservations" className="link-reservation">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserve.length} reservas</span>
        </div>
      </Link>
    </header>
  );
};

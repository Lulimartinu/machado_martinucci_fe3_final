import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  const themeClass = state.theme === "light" ? "light" : "dark";

  return (
    <nav className={themeClass}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <li>
        <Link to="/"> Home </Link>
      </li>

      <li>
        <Link to="/contacto"> Contacto </Link>
      </li>

      <li>
        <Link to="/favs"> Favs </Link>
      </li>

      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;

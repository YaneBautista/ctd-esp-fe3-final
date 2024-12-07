import { Link } from "react-router-dom";
import { useContext } from "react"; 
import {ContextGlobal } from "./utils/global.context"; 
import "../styles/index.css";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal); 

  const handleThemeChange = () => {
    dispatch({ type: "TOGGLE_THEME" }); 
  };



  return (
    <nav className={`navbar ${state.theme}`}>
  <h4 className="logo">
    <span style={{ color: "red" }}>D</span>H Odonto
  </h4>

  <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contacts</Link>
    <Link to="/favs">Favs</Link>
  </div>

  <button onClick={handleThemeChange} className="theme-button">
    <img
      className="theme-icon"
      src={state.theme === "dark" ? "/images/sun-solid.svg" : "/images/moon-solid.svg"}
      alt="Change theme"
    />
  </button>

    </nav>
  );
};

export default Navbar;



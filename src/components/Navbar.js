import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar({ onLogout }) {
  const history = useHistory();

  function handleClick() {
    // logout the user
    onLogout();
    // then navigate them to the login page
    history.push("/login");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
}

export default NavBar;
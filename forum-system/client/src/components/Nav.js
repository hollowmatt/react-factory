import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  
  const signOut = () => {
    localStorage.removeItem("_id");
    navigate("/");
  };

  return(
    <nav className="navbar">
      <h2>Threadly</h2>
      <div className="navbarRight">
        <button onClick={signOut}>Sign out</button>
      </div>
    </nav>
  );
}

export default Nav;
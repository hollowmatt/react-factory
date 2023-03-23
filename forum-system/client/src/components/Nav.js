import React from "react";

function Nav() {
  const signOut = () => {
    alert("user signed out");
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
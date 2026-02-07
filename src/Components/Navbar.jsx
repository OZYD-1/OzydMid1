import React from "react";

function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <h2>Course Manager</h2>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
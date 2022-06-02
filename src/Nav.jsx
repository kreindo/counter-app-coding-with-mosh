import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Counter</Link> |{" "}
        <Link to="/TestSite">Website</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default Nav;

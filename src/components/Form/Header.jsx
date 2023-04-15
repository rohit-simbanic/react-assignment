import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  const logOut = () => {
    setAuthenticated(localStorage.removeItem("authenticated"));
    window.location.reload();
  };
  useEffect(() => {}, [authenticated]);
  console.log(authenticated);
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>React</div>
      <div className="menu">
        <Link to="/" style={{ textDecoration: "none", marginRight: "10px" }}>
          Home
        </Link>
        {"   "}
        {authenticated && (
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        )}
        <button onClick={logOut}>
          {authenticated ? "Logout" : "You are logged Out Now"}
        </button>
      </div>
    </header>
  );
};

export default Header;

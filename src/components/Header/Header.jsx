import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useCustomAuthContext } from "../../ContextAPI/AuthContextApi";

const Header = () => {
  const auth = useCustomAuthContext();

  const logOut = () => {
    localStorage.removeItem("authenticated");
    window.location.reload();
  };

  // console.log(authenticated);
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>React</div>
      <div className="menu">
        <Link to="/" style={{ textDecoration: "none", marginRight: "10px" }}>
          Home
        </Link>
        {"   "}
        {auth ? (
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        )}
        <button onClick={logOut}>
          {auth ? "Logout" : "You are logged Out Now"}
        </button>
      </div>
    </header>
  );
};

export default Header;

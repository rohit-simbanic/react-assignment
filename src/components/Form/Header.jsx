import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>React</div>
      <div className="menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;

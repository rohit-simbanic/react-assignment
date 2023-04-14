import React from "react";
import Form from "../components/Form/Form";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.textCenter}>
      <h1>Login page</h1>
      <Form />
    </div>
  );
};

export default Login;

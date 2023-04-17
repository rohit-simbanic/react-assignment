import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  const users = [{ username: "rohit_mondal", password: "123456" }];
  const navigate = useNavigate();

  // console.log(authenticated);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === formData.username);
    // console.log(account);
    if (account && account.password === formData.password) {
      // setAuthenticated(true);

      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          autoComplete="off"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          autoComplete="off"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Form;

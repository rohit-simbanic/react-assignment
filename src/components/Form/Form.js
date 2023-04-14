import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Form = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  console.log(formData);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username, formData.password);
    if (
      formData.username === "rohit_mondal" &&
      formData.password === "123456"
    ) {
      return navigate("/dashboard");
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

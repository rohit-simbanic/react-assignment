import React, { useState } from "react";
import styles from "./header.module.css";

const UserForm = ({ userData, setUserData, setShowForm }) => {
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers((prev) => {
      return { ...prev, id: userData.length, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, users]);
    e.target.reset();
    setShowForm(false);
  };

  console.log(users);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          autoComplete="off"
          required
          onChange={handleChange}
          placeholder="User Name"
          minLength="3"
          maxLength="15"
        />
        <input
          type="email"
          name="email"
          autoComplete="off"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          required
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          autoComplete="off"
          required
          onChange={handleChange}
          pattern="[7-9]{1}[0-9]{9}"
          placeholder="Mobile Number"
        />
        <button type="submit">Create User</button>
      </form>
    </>
  );
};

export default UserForm;

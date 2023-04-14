import React, { useRef, useState } from "react";
import styles from "./header.module.css";

const EditForm = ({ setUserData, userData, editableItem, setEdit }) => {
  const [editUser, setEditUser] = useState(editableItem[0]);
  //   const [users, setUsers] = useState([]);
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const teleRef = useRef("");
  //   console.log(userNameRef.current);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = [
      ...userData.filter((item) => item.id !== editUser.id),
      editUser,
    ];
    console.log(elements);
    const sort = elements.sort((a, b) => a.id - b.id);
    // console.log(sort);
    setUserData(sort);
    e.target.reset();
    setEdit(false);
  };

  console.log(editUser);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={userNameRef}
          type="text"
          name="username"
          autoComplete="off"
          required
          onChange={handleChange}
          placeholder="User Name"
          minLength="3"
          maxLength="10"
          value={editUser.username}
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          autoComplete="off"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          required
          onChange={handleChange}
          placeholder="Email"
          value={editUser.email}
        />
        <input
          ref={teleRef}
          type="tel"
          name="phone"
          autoComplete="off"
          required
          onChange={handleChange}
          pattern="[7-9]{1}[0-9]{9}"
          placeholder="Mobile Number"
          value={editUser.phone}
        />
        <button type="submit">Edit User</button>
      </form>
    </>
  );
};

export default EditForm;

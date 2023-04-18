import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useCustomContext } from "../ContextAPI/CreateContext";
import styles from "./Login.module.css";
import { useCustomAuthContext } from "../ContextAPI/AuthContextApi";

const EditPage = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  //   console.log(id);
  const [editableItem, setEditableItem] = useState({});
  const collectedData = JSON.parse(localStorage.getItem("datas"));
  const collectedDataCustom = useCustomContext();
  const data = collectedData || collectedDataCustom;
  const [userData, setUserData] = useState(data);
  const [editUser, setEditUser] = useState({});
  const navigate = useNavigate();

  // auth
  const { auth } = useCustomAuthContext();
  //   const foundUser = userData.filter((user) => user.id === id);
  useLayoutEffect(() => {
    // console.log(users);
    const user = userData.filter((user) => user.id === parseInt(id));
    setEditableItem(user);
    console.log("uselayout called");
  }, []);
  //   console.log(editableItem);
  useEffect(() => {
    setEditUser(editableItem[0]);
  }, [editableItem]);

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
    // console.log(elements);
    const sort = elements.sort((a, b) => a.id - b.id);
    // console.log(sort);
    setUserData(sort);
    e.target.reset();
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  // redirect to login page if not logged in
  useEffect(() => {
    if (auth === null) {
      navigate("/login");
    }
  });
  useEffect(() => {
    localStorage.removeItem("datas");
    localStorage.setItem("datas", JSON.stringify(userData));
  }, [userData]);
  console.log(editUser);
  console.log(userData);
  return (
    <>
      <Header />
      <div style={{ height: "50px" }}></div>
      <div className="app-container">
        <h3>{`Edit - ${editUser.username}`}</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="username"
            autoComplete="off"
            required
            onChange={handleChange}
            placeholder="User Name"
            minLength="3"
            maxLength="10"
            defaultValue={editUser.username}
          />
          <input
            type="email"
            name="email"
            autoComplete="off"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            required
            onChange={handleChange}
            placeholder="Email"
            defaultValue={editUser.email}
          />
          <input
            type="tel"
            name="phone"
            autoComplete="off"
            required
            onChange={handleChange}
            pattern="[7-9]{1}[0-9]{9}"
            placeholder="Mobile Number"
            defaultValue={editUser.phone}
          />
          <button type="submit">Edit User</button>
        </form>
      </div>
    </>
  );
};

export default EditPage;

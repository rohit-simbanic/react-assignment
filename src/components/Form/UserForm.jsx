import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
// import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../ContextAPI/CreateContext";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const collectedData = JSON.parse(localStorage.getItem("datas"));
  const collectedDataCustom = useCustomContext();
  const data = collectedData || collectedDataCustom;
  const [notification, setNotification] = useState("");
  const [userData, setUserData] = useState(data);
  const [users, setUsers] = useState([]);
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers((prev) => {
      return { ...prev, id: userData.length + 1, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setUserData([...userData, users]);
      e.target.reset();
      setChange(!change);
      setNotification("A new user added!!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      if (error) {
        setNotification(error);
      }
    }
  };

  useEffect(() => {
    console.log("userform loaded");
    if (change) {
      localStorage.setItem("datas", JSON.stringify(userData));
    }
  }, [userData, change]);

  // console.log(data);
  // console.log(userData);

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
      <div>
        <h3 style={{ textAlign: "center" }}>{notification && notification}</h3>
      </div>
    </>
  );
};

export default UserForm;

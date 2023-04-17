import React, { useEffect } from "react";
import UserForm from "../components/Form/UserForm";
import Header from "../components/Header/Header";
import { useCustomAuthContext } from "../ContextAPI/AuthContextApi";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const auth = useCustomAuthContext();
  const navigate = useNavigate();
  // redirect to login page if not logged in
  useEffect(() => {
    if (auth === null) {
      navigate("/login");
    }
  });
  return (
    <>
      <Header />
      <div className="app-container">
        <h2>New User</h2>
        <UserForm />
      </div>
    </>
  );
};

export default NewUser;

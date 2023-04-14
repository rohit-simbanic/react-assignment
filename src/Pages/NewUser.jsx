import React from "react";
import UserForm from "../components/Form/UserForm";
import Header from "../components/Form/Header";

const NewUser = () => {
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

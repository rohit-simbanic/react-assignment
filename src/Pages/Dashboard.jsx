import React, { useEffect, useState } from "react";
import Header from "../components/Form/Header";
import { useCustomContext } from "../ContextAPI/CreateContext";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import UserForm from "../components/Form/UserForm";
import EditForm from "../components/Form/EditForm";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editableItem, setEditableItem] = useState({});
  const data = useCustomContext();
  const [userData, setUserData] = useState(data);

  //   console.log(userData);
  const clickRedirect = () => {
    setShowForm(!showForm);
  };
  const deleteHandler = (id) => {
    // console.log(id);
    const remainingUser = userData.filter((person, i) => person.id !== id);
    setUserData(remainingUser);
  };
  const editHandler = (id) => {
    // console.log(id);
    setEditableItem(userData.filter((user) => user.id === id));
    setEdit(true);
  };
  useEffect(() => {}, [userData]);
  console.log(userData);
  //   console.log(editableItem);
  return (
    <div>
      <Header />
      <div className="app-container">
        <h2>User Database:</h2>
        <h2>
          Create a user:{" "}
          <span onClick={clickRedirect}>
            {" "}
            <GrAdd />
          </span>
        </h2>
        {showForm && (
          <UserForm
            setUserData={setUserData}
            userData={userData}
            setShowForm={setShowForm}
          />
        )}
        <ul>
          {edit ? (
            <EditForm
              setUserData={setUserData}
              userData={userData}
              editableItem={editableItem}
              setEdit={setEdit}
            />
          ) : (
            userData.map((person, i) => (
              <li key={i}>
                <strong>Username:</strong> {person.username},{" "}
                <strong>Email:</strong> {person.email}, <strong>Phone: </strong>
                {person.phone} --{" "}
                <button onClick={() => deleteHandler(person.id)}>
                  <MdDelete />
                </button>{" "}
                <button onClick={() => editHandler(person.id)}>
                  <BiEdit />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
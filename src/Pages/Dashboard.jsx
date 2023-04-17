import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import EditForm from "../components/Form/EditForm";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../ContextAPI/CreateContext";
import { useCustomAuthContext } from "../ContextAPI/AuthContextApi";

const Dashboard = () => {
  const [edit, setEdit] = useState(false);
  const [editableItem, setEditableItem] = useState({});
  const collectedData = JSON.parse(localStorage.getItem("datas"));
  const collectedDataCustom = useCustomContext();
  const data = collectedData || collectedDataCustom;

  // auth
  const auth = useCustomAuthContext();
  console.log(auth);

  const [userData, setUserData] = useState(data);
  const navigate = useNavigate();

  // console.log(data);
  // redirect to login page if not logged in
  useEffect(() => {
    if (auth === null) {
      navigate("/login");
    }
  });
  // console.log(authenticated);
  useEffect(() => {
    console.log("Data changes");
  }, [userData]);
  // console.log(userData);
  const clickRedirect = () => {
    // setShowForm(!showForm);
    navigate("/newUser");
  };
  const deleteHandler = (id) => {
    // console.log(id);
    const remainingUser = userData.filter((person, i) => person.id !== id);
    localStorage.setItem("datas", JSON.stringify(remainingUser));
    setUserData(remainingUser);
  };
  const editHandler = (id) => {
    // console.log(id);
    setEditableItem(userData.filter((user) => user.id === id));
    setEdit(true);
    // setShowForm(false);
  };

  // console.log(userData);
  //   console.log(editableItem);

  return (
    <div>
      <Header />
      <div className="app-container">
        <h2>User Database:</h2>
        {!edit && (
          <h2>
            Create a new User:{" "}
            <button style={{ cursor: "pointer" }} onClick={clickRedirect}>
              <CiEdit />
            </button>
          </h2>
        )}

        {edit && (
          <EditForm
            setUserData={setUserData}
            userData={userData}
            editableItem={editableItem}
            setEdit={setEdit}
          />
        )}
        <div style={{ overflowX: "auto" }}>
          <table id="Table1">
            <tbody>
              <tr>
                {!edit &&
                  userData.map((person, i) => (
                    <td key={i}>
                      <strong>Username:</strong> {person.username}, <br />
                      <strong>Email:</strong> {person.email}, <br />
                      <strong>Phone: </strong>
                      {person.phone} <br />
                      <br />
                      <button onClick={() => deleteHandler(person.id)}>
                        <MdDelete />
                      </button>{" "}
                      <button onClick={() => editHandler(person.id)}>
                        <BiEdit />
                      </button>
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
        {!data && <h2>No users found</h2>}
      </div>
    </div>
  );
};

export default Dashboard;

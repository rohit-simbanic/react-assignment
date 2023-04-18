import { createContext, useContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const userData = [
    {
      id: 0,
      username: "Vinod",
      email: "rohit@gmail.com",
      phone: 9883221210,
    },
    { id: 1, username: "Virat", email: "virat@gmail.com", phone: 9663221210 },
    {
      id: 2,
      username: "Rohit",
      email: "rohit@gmail.com",
      phone: 9863221210,
    },
    {
      id: 3,
      username: "Raina",
      email: "raina@gmail.com",
      phone: 9563221210,
    },
    {
      id: 4,
      username: "Ashish",
      email: "ashish@gmail.com",
      phone: 9163221210,
    },
  ];
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};
// custom hook

const useCustomContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useCustomContext };

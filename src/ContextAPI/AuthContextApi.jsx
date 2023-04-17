import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const authVal = localStorage.getItem("authenticated");
  const [auth, setAuth] = useState(authVal || null);
  console.log(auth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
// custom hook

const useCustomAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useCustomAuthContext };

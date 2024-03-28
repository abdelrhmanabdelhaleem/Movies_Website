import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export let AuthContext = createContext("");

export default function AuthContextProvider(props) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  let saveUserData = () => {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

  let logOut = () => {
    localStorage.removeItem("userToken");
    setUserData(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider value={{ saveUserData, userData, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

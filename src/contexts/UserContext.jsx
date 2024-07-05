import { createContext, useState } from "react";

const DefaultUserData = {
  name: "",
  email: "",
  role: "user",
  isLoggedIn: false,
  isAdmin: false,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(DefaultUserData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

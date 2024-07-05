import { createContext, useState } from "react";

const defaultAdminData = {
  name: "",
  email: "",
  role: "admin",
  permission: ["admin", "create", "edit"],
};

export const AdminContext = createContext(defaultAdminData);

export const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState({
    name: "AdminDai",
    email: "admindai@gmail.com",
    permission: ["admin", "create", "edit"],
  });

  return (
    <AdminContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminContext.Provider>
  );
};

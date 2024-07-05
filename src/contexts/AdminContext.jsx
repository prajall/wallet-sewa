import { createContext, useState } from "react";

const defaultAdminData = {
  name: "",
  email: "",
  adminKey: "",
  permission: ["admin", "create", "edit"],
};

export const AdminContext = createContext(defaultAdminData);

export const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState({
    name: "AdminDai",
    email: "admindai@gmail.com",
    permission: ["admin", "create", "edit"],
    adminKey: "1238812812812382",
  });

  return (
    <AdminContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminContext.Provider>
  );
};

import React from "react";
import { AdminProvider } from "../contexts/AdminContext";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminProvider>{children}</AdminProvider>
    </>
  );
};

export default AdminLayout;

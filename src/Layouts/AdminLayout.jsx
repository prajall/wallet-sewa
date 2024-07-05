import React from "react";
import { AdminProvider } from "../contexts/AdminContext";
import AdminNav from "../components/AdminNav";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminProvider>
        <AdminNav />
        {children}
      </AdminProvider>
    </>
  );
};

export default AdminLayout;

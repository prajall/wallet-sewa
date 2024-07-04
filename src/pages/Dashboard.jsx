import React, { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";

const Dashboard = () => {
  const data = useContext(AdminContext);
  console.log(data);
  return <div>Dashboard Page with Admin Data</div>;
};

export default Dashboard;

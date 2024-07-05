import React from "react";
import ProtectedNav from "../components/ProtectedNav";

const ProtectedLayout = ({ children }) => {
  return (
    <div>
      <ProtectedNav />
      <h2>This is Protected Route</h2>
      <div>{children}</div>
    </div>
  );
};

export default ProtectedLayout;

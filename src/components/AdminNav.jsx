import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";

const AdminNav = () => {
  const { userData, setUserData } = useContext(UserContext);
  const handleLogout = () => {
    setUserData({ ...userData, isLoggedIn: false });
    navigate("/");
  };
  return (
    <nav className="bg-crimson p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">Admin Panel</Link>{" "}
      </div>
      <div>
        <div className="ml-auto flex">
          <Button
            // variant="contained"
            sx={{ color: "#fff" }}
            className="bg-green text-white"
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Avatar className="bg-white text-blue-500 ">U</Avatar>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;

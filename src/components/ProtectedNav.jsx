import { Avatar, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedNav = ({ children }) => {
  const { userData, setUserData } = useContext(UserContext);
  const handleLogout = () => {
    setUserData({ ...userData, isLoggedIn: false, role: "" });
    navigate("/");
  };
  return (
    <nav className="bg-blue p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">Protected Page</Link>{" "}
      </div>
      <div>
        {userData.isLoggedIn && (
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
        )}
      </div>
    </nav>
  );
};

export default ProtectedNav;

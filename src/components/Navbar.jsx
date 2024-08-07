import React, { useContext } from "react";
import { Avatar, Button } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  const handleLogin = () => {
    setUserData({ ...userData, isLoggedIn: true });
  };
  const handleLogout = () => {
    setUserData({ ...userData, isLoggedIn: false, role: "" });
    navigate("/");
  };
  const handleAdminLogin = () => {
    setUserData({ ...userData, isLoggedIn: true, role: "admin" });
    console.log("User data: ", userData);
    navigate("/");
  };

  return (
    <nav className="bg-green p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">WALLET</Link>{" "}
      </div>
      <div>
        {!userData.isLoggedIn && (
          <>
            <Button
              // variant="contained"
              sx={{ color: "#fff" }}
              className="bg-green text-white"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              // variant="contained"
              sx={{ color: "#fff" }}
              className="bg-green text-white"
              onClick={handleAdminLogin}
            >
              Login Admin
            </Button>
          </>
        )}
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

export default Navbar;

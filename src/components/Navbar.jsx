import React from "react";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 p-4 flex items-center">
      <div className="text-white text-2xl font-bold">LOGO</div>
      <ul className="flex ml-4 space-x-4 text-white">
        <li>
          <a href="home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <div className="ml-auto">
        <Avatar className="bg-white text-blue-500">U</Avatar>
      </div>
    </nav>
  );
};

export default Navbar;

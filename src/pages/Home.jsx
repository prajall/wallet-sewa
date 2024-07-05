import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-3">
      <div>Homepage</div>
      <div className="flex gap-3 text-blue">
        <Link to="/protected">Protected Page</Link>
        <Link to="/admin">Admin Page</Link>
      </div>
    </div>
  );
};

export default Home;

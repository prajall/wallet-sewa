import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Protected = () => {
  const { userData } = useContext(UserContext);
  console.log("User Data: ", userData);
  return (
    <>
      <div>Protected Page with User datas in console</div>
    </>
  );
};

export default Protected;

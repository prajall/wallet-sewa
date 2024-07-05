import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Protected = () => {
  const { userData } = useContext(UserContext);
  const userName = userData.name;

  return (
    <>
      <div>Welcome {userName}, this page is protected</div>
    </>
  );
};

export default Protected;

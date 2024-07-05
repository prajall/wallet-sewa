import { IconButton } from "@mui/material";
import React from "react";
import IconComponent1 from "../components/IconComponent1";
// import IconComponent2 from "./IconComponent2";
import MuiComponents from "../components/MuiComponents";

const Home = () => {
  const buttons = {
    variant: ["text", "container", "outline"],
    sizes: ["small", "medium", "large"],
  };

  // const Icons = { 1: IconComponent1, 2: IconComponent2 };
  const Icon = IconComponent1;

  return (
    <>
      <div>Rendering MUI components</div>
      <MuiComponents components={Icon} />
    </>
  );
};

export default Home;

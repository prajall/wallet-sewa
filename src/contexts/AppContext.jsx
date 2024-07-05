import { createContext, useState } from "react";

const defaultAppData = {
  userData: {
    name: "",
    email: "",
    role: "",
  },
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState();

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import { UserContext } from "./contexts/UserContext";
import Navbar from "./components/Navbar";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    <Navigate to="/" />;
  }
  return <div>{children};</div>;
};

const AdminRoute = ({ isLoggedIn, isAdmin }) => {
  if (!isLoggedIn || !isAdmin) {
    <Navigate to="/" />;
  }
  return { children };
};

function App() {
  const { userData } = useContext(UserContext);
  const isLoggedIn = userData.isLoggedIn;
  const isAdmin = userData.role === "admin";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Public />} />

        {/* Protected Routes */}
        <Route
          path="/protected"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Protected />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
              <Admin />
            </AdminRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

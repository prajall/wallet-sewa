import React, { useContext, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import { UserContext } from "./contexts/UserContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AdminLayout from "./Layouts/AdminLayout";
import MainLayout from "./Layouts/MainLayout";
import ProtectedLayout from "./Layouts/ProtectedLayout";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) return <div>{children}</div>;
};

const AdminRoute = ({ isLoggedIn, isAdmin, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Is admin: ", isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
    if (!isAdmin) {
      navigate("/");
    }
  }, [isLoggedIn, isAdmin, navigate]);
  if (isLoggedIn && isAdmin) return <div>{children}</div>;
};

function App() {
  const { userData } = useContext(UserContext);
  const isLoggedIn = userData.isLoggedIn;
  const isAdmin = userData.role === "admin";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/public"
          element={
            <MainLayout>
              <Public />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/protected"
          element={
            <ProtectedLayout>
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Protected />
              </ProtectedRoute>
            </ProtectedLayout>
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
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </AdminRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

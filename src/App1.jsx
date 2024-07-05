/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

// Importing layouts
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";

// Importing pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Booking from "./pages/Booking/Booking";
import AddCourse from "./pages/Dashboard/AddCourse/AddCourse";
import EditCourse from "./pages/Dashboard/EditCourse/EditCourse";
import AddTutor from "./pages/Dashboard/AddTutor/AddTutor";
import Category from "./pages/Category/Category";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import { useAppContext } from "./contexts/AppContext";
import AllCourses from "./pages/Dashboard/AllCourses/AllCourses";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Users from "./pages/Dashboard/Users/Users";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import AllCoursesPage from "./pages/AllCoursesPage/AllCoursesPage";
import PayNow from "./pages/PayNow/PayNow";
import Profile from "./pages/Profile/Profile";
import CourseRegisterationForm from "./pages/CourseRegisterationForm/CourseRegisterationForm";
import Forms from "./pages/Dashboard/Forms/Forms";
import { AdminProvider } from "./contexts/AdminContext";

// Custom ProtectedRoute component for better organization
const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Custom AdminRoute component for admin-only access
const AdminRoute = ({ children, isLoggedIn, isAdmin }) => {
  if (!isLoggedIn && !isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default function App() {
  const { userData } = useAppContext();
  const isLoggedIn = userData.isLoggedIn;
  const isAdmin = userData.role === "admin" || userData.role === "master";
  return (
    <Router>
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
          path="/search"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <MainLayout>
              <AllCoursesPage />
            </MainLayout>
          }
        />
        <Route
          path="/course-registeration-form"
          element={
            <MainLayout>
              <CourseRegisterationForm />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/course/:courseTitle/:courseId"
          element={
            <MainLayout>
              <CourseDetail />
            </MainLayout>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/category/:subCategory" element={<Category />} />

        {/* Protected Routes */}

        <Route
          path="/course/:courseId/booking"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainLayout>
                <Booking />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainLayout>
                <Profile />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pay-now/:courseId"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainLayout>
                <PayNow />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Admin-Only Routes */}
        <AdminProvider>
          <Route
            path="/dashboard"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/forms"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <Forms />
                </DashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/all-users"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <Users />
                </DashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/add-course"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <AddCourse />
                </DashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/edit-course/:courseId"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <EditCourse />
                </DashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/add-tutor"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <AddTutor />
                </DashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/all-courses"
            element={
              <AdminRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <DashboardLayout>
                  <AllCourses />
                </DashboardLayout>
              </AdminRoute>
            }
          />
        </AdminProvider>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

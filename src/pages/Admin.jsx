import { Link, Outlet } from "react-router-dom"; // Outlet is used to render nested routes

function Admin() {
  return (
    <div className="space-y-4">
      <nav className="flex bg-slate-900 text-white justify-between py-3 px-2 items-center">
        <h2>Admin Panel</h2>
        <div className="space-x-3">
          <Link to="./dashboard" className="underline">
            Dashboard
          </Link>
          <Link to="./settings" className="underline">
            Settings
          </Link>
        </div>
      </nav>
      <div>
        <p>This is admin's page </p>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;

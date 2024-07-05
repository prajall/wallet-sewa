import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";

function Admin() {
  const { adminData, setAdminData } = useContext(AdminContext);
  const fetch = async () => {
    console.log(adminData);
    const modifiedAdminData = { ...adminData, name: "Adminbhai" };
    await setAdminData(modifiedAdminData);
    console.log("modified Data: ", adminData);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="space-y-4">
      <nav className="flex bg-green text-white justify-between py-3 px-2 items-center">
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
        <p>This is admin's page with admin Data in console </p>
      </div>
    </div>
  );
}

export default Admin;

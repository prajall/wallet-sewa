import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";

function Admin() {
  const { adminData, setAdminData } = useContext(AdminContext);
  console.log("Admin Datas: ", adminData);

  return (
    <div className="space-y-4">
      <div>
        <p>This is admin's page with admin Data in console </p>
      </div>
    </div>
  );
}

export default Admin;

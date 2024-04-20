import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      {" "}
      <div>
        <div className="flex flex-col pb-8">
          <ul className="list-group min-w-60">
            <button onClick={() => navigate("/admin")}>
              <li
                className={`list-group-item ${
                  location.pathname === "/admin" ? "active" : ""
                }`}
                aria-current="true"
              >
                Profile
              </li>
            </button>

            <button onClick={() => navigate("/admin/manageproduct")}>
              <li
                className={`list-group-item ${
                  location.pathname === "/admin/manageproduct" ? "active" : ""
                }`}
              >
                Manage Products
              </li>
            </button>

            <button onClick={() => navigate("/admin/managecategory")}>
              <li
                className={`list-group-item ${
                  location.pathname === "/admin/managecategory" ? "active" : ""
                }`}
              >
                Manage Categories
              </li>
            </button>

            <button onClick={() => navigate("/admin/manageOrders")}>
              <li
                className={`list-group-item ${
                  location.pathname === "/admin/manageOrders" ? "active" : ""
                }`}
              >
                Manage Orders
              </li>
            </button>

            <button onClick={() => navigate("/admin/users")}>
              <li
                className={`list-group-item ${
                  location.pathname === "/admin/users" ? "active" : ""
                }`}
              >
                All Users
              </li>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;

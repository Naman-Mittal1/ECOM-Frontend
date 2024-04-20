import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Usermenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div className="flex flex-col pb-8">
        <ul class="list-group min-w-60">
          <button onClick={() => navigate("/admin")}>
            <li
              className={`list-group-item  ${
                location.pathname === "/admin" ? "active" : ""
              }`}
              aria-current="true"
            >
              Profile
            </li>
          </button>

          <button onClick={() => navigate("/order")}>
            <li
              class={`list-group-item  ${
                location.pathname === "/order" ? "active" : ""
              }`}
            >
              Orders{" "}
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Usermenu;

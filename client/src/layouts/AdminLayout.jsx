import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import NavbarGen from "../components/NavbarGen";
import Footer from "../components/Footer";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <div className="admin-layout__nav">
        <h1>Sukhrob.co</h1>

        <ul>
          <li>
            <NavLink to={"projects"}>Current Projects</NavLink>
          </li>
          <li>
            <NavLink to={"portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"users"}>Users</NavLink>
          </li>
        </ul>

        <Link className="admin-layout__logout-btn">Logout</Link>
      </div>


<div className="admin-layout__main">
<div className="admin-layout__top">
        <h2>Admin Dashboard</h2>
        <h2>Welcome, Sukhrob</h2>

      </div>
<div className="admin-layout__outlet">
      <Outlet />

</div>

</div>
  

    </div>
  );
}

export default AdminLayout;

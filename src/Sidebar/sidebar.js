import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function sidebar() {
  return (
    <div className="sidebar">
      <Link className="order-list" to="/">
        Home
      </Link>
      <Link className="order-list" to="/Attendance">
        Attendance
      </Link>
      <Link className="order-list" to="/quickInfo">
        Quick Info
      </Link>
      <Link className="order-list" to="/register">
        Register
      </Link>
    </div>
  );
}

export default sidebar;

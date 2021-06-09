import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar({ isAdmin }) {
  return (
    <div className="sidebar">
      <Link className="order-list" to="/">
        Home
      </Link>
      {isAdmin && (
        <Link className="order-list" to="/Attendance">
          Attendance
        </Link>
      )}
      <Link className="order-list" to="/quickInfo">
        Quick Info
      </Link>
      <Link className="order-list" to="/register">
        Register
      </Link>
      {!isAdmin && (
        <Link className="order-list" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Sidebar;

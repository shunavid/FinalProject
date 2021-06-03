import React from "react";
import "./style.css";
function attendance() {
  return (
    <>
      <div className="attendance">
        <div className="travels-list">
          <h4 className="head-list">Travelers Attendance</h4>
          <input type="text" placeholder="Add Passenger" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default attendance;

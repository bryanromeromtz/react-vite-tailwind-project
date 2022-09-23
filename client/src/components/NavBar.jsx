import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <p>To Do List</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/tasks/new">New Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

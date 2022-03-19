import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function Navbar(props) {
  // console.log(props.users[0]);
  // const user = props.users[0].name;
  return (
    <nav>
      <div className="top-nav">
        <h1 className="nav-tab">Project Tracker</h1>
        {/* <Link to="/summary" className="nav-tab">Summary</Link> */}
        <span className="nav-tab">Summary</span>
        {/* <Link to="/schedule" className="nav-tab">Schedule</Link> */}
        <span className="nav-tab">Schedule</span>

        <span className="login-nav">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          {/* <Link to="/logout"> Logout</Link> */}
        </span>
        <p className="nav-tab">Logged in as:</p>
      </div>
    </nav>
  )
}
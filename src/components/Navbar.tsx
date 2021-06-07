import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: { name: string, setName: (name: string)=>void }) => {
  const logout = async () => {
    await fetch("http://localhost:3333/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    props.setName('');
  }
  let menu;
  if (props.name === '') {
    menu = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" href="#">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    console.log(props.name);
    menu = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <Link to="/" className="navbar-brand">
        JWT with Golang
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        {menu}
      </div>
    </nav>
  );
};

export default Nav;

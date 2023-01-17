import React from "react";
import {  NavLink } from "react-router-dom";
import logoimg from "../../assets/logojob.png"
import "./navbar.css"
const Navbar = () => {
  return (
    <>
      <header className="container" >
        <div className="logo">
          <img  src={logoimg} alt=""  style={{height:"8vh" ,marginLeft:"4rem"}}/>
        </div>
        <div className="menu_list">
          <ul className="menu_ui">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/work">How it Works</NavLink>
            </li>

            <li>
              <NavLink to="/service">Services</NavLink>
            </li>

            <li>
              <NavLink to="/price">Pricing</NavLink>
            </li>

            <li>
              <NavLink to="/page">Pages</NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>

            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;

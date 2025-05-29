import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../static/Header.css";

export const Header = () => {
  function isActive(path){
    return location.pathname == path;
  }
  return (
    <header className="bg-[#0f2e3d] sticky">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <span className="text-[#f5cac3] logo">
              MINERVA
            </span>
          </Link>

          <nav className="flex justify-around">
            <NavLink to="/home" className="navlinks">Home</NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? "activeLink navlinks" : "navlinks"} active={isActive("/")}>Events</NavLink>
            <NavLink to="/content" className="navlinks">Content</NavLink>
            <NavLink to="/team" className="navlinks">Team</NavLink>
            <NavLink to="/contact" className="navlinks">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

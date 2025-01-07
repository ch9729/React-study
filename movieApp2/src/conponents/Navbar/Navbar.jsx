import React from "react";
import Fire from "../../assets/fire.png";
import Star from "../../assets/star.png";
import Party from "../../assets/partying-face.png";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">
          인기작품
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          최고평점
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </NavLink>
        <NavLink to="/upcoming">
          예정작품
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

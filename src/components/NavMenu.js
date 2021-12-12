// src/components/NavMenu.js
import React from "react";

export default function NavMenu() {
  return (
    <div>
      <ul>
        <li>about</li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { FaMoon } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <div className="theme">
        <FaMoon />
        <span className="theme__mode">Dark Mode</span>
      </div>
    </header>
  );
}

export default Header;

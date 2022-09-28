import React from "react";
import { FaCloudsmith } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <FaCloudsmith className="header__icon" />
      <h1 className="header__heading">Fit Hero</h1>
    </div>
  );
};

export default Header;

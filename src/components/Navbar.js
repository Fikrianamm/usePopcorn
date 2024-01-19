import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;

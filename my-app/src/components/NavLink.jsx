import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { NavLink as Link, useLocation } from "react-router-dom";

function NavLink({ to, name, onClose, ...rest }) {
  // const location = useLocation();

  // const isActive = location.pathname === to;

  return (
    <Link to={to}  onClick={onClose}>
      <Button
        
        size="sm"
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}

export default NavLink;
import React from "react";
import "./Header.css";

function Header() {
  const [{ basket }, dispatch] = useDataLayer();
  return <div className="header"></div>;
}

export default Header;

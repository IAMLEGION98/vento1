import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SideBar = () => (
  <ul className="sidebar">
    <li>
      <Link to="/overview"> OVERVIEW </Link>
    </li>
    <li>
      <Link to="/assetlist"> ASSETLIST </Link>
    </li>
    <li>
      <Link to="/multicreateasset"> ADDASSETS </Link>
    </li>

  </ul>
);

export default SideBar;

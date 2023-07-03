import React from "react";
import config from "../config";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">{config.ownerName}'s Portfolio</div>
      <Menu />
    </header>
  );
}

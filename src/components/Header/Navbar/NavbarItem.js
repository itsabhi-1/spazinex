import React from "react";
import { Link } from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar";

function NavbarItem(props) {
  return navbarData.map((item) => (
    <li
      key={item.id}
      className={item.subMenu || item.megaMenu ? "has-submenu" : ""}
    >
      <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
      {(() => {
        if (item.subMenu) {
          return <ul className="submenu-nav">{}</ul>;
        }

        if (item.megaMenu) {
          return <ul className="submenu-nav submenu-nav-mega">{}</ul>;
        }
      })()}
    </li>
  ));
}

export default NavbarItem;

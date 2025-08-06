import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  return (
    <div className="flex flex-col gap-4 w-[16rem]">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.text}
          end
          onClick={() => {
            if (onLinkClick) onLinkClick();
          }}
        >
          <div className="flex cursor-pointer hover:bg-gray-200 duration-100 px-3 py-2 rounded-xl gap-2 transition-transform hover:scale-103">
            <div className="text-2xl">{link.icon}</div>
            <div>{link.text}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;

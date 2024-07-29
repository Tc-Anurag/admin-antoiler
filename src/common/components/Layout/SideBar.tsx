import React from "react";
import SidebarItems from "./SideBarItems";
import { SidebarItem } from "../../types";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className=" w-64 p-4">
      <ul>
        {SidebarItems.map((item: SidebarItem, index: number) => (
          <li key={index} className="flex items-center mb-4">
            <div className="mr-2">{item.icon}</div>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

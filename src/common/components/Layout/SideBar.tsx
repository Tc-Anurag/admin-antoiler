import React from "react";
import SidebarItems from "./SideBarItems";
import { SidebarItem } from "../../types";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className="w-64 p-4">
      <div className="flex justify-center items-center mb-6">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>
      <ul className="space-y-4">
        {SidebarItems.map((item: SidebarItem, index: number) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className="flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              <div className="mr-3">{item.icon}</div>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

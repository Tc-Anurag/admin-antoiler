import React, { ReactNode } from "react";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2  h-screen">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#FAFAFB]">{children}</div>
    </div>
  );
};

export default Layout;

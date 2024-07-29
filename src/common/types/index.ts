import { ReactNode, ReactElement } from "react";

export interface SidebarItem {
  name: string;
  icon: ReactNode;
  path: string;
}

export interface RouteDefinition {
  path: string;
  element: ReactElement;
}

//Dashboard TabData 
export interface TabProps {
  title: string;
  number: number;
  growth: number;
}


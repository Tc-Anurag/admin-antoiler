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

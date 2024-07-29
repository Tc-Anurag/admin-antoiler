import { SidebarItem as SidebarItemType } from "../../types";
import { GoHome } from "react-icons/go";

const SidebarItems: SidebarItemType[] = [
  {
    name: "Dashboard",
    icon: <GoHome />,
    path: "/dashboard",
  },
];

export default SidebarItems;

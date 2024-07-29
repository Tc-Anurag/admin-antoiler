import { RouteDefinition } from "../common/types";
import Dashboard from "../domains/Dashboard/pages/Dashboard";

export const routeDefinitions: RouteDefinition[] = [
  { path: "/dashboard", element: <Dashboard /> },
];

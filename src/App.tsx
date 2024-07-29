import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./common/components/Layout/Layout";
import { routeDefinitions } from "./routes/routeDefinitions";

const App: React.FC = () => {
  return (
    <Routes>
      {routeDefinitions.map(({ path, element }, index) => (
        <Route key={index} path={path} element={<Layout>{element}</Layout>} />
      ))}
    </Routes>
  );
};

export default App;

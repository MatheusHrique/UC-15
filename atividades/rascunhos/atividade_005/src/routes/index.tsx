import React from "react";
import { StackRoutes } from "./stack.routes";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}; // <StackRoutes />

export default Routes;

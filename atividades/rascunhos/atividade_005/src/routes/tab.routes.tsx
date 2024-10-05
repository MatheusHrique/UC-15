import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackRouter } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomate",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "#252525",
        tabBarInactiveBackgroundColor: "#fafa",
      }}
    >
      <Tab.Screen
        name="Initial"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
